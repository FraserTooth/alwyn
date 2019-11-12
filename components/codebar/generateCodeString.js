import Const from '../blocks/constBlock'
import Sum from '../blocks/sumBlock'
import Assert from '../blocks/assertionBlock'
const Blocks = { Const, Sum, Assert }

export default (chart) => {
  const nodes = chart.nodes
  const links = chart.links

  console.log(nodes)

  //Set Up Initial Things
  let outputString = ''
  const importStatements = []

  //For Each Node Map in Code Functions
  //Write Dependancies into Array
  for (const key in nodes) {
    const node = nodes[key]
    const block = Blocks[node.type]

    //Pull Out Import Statements
    const importCode = block.importCode
    if (importCode && !importStatements.includes(importCode())) {
      importStatements.push(importCode())
    }
  }

  //Add in Dependencies
  importStatements.forEach((statement) => {
    outputString = outputString + statement
  })
  outputString += ' \n '

  let lastNode = null
  const codeBlockBuildUp = {}

  //For Each Link
  for (const key in links) {
    const link = links[key]
    const fromNode = nodes[link.from.nodeId]
    const toNode = nodes[link.to.nodeId]
    const toNodePort = link.to.portId

    //Write Into Tracker if Not Tracked
    //From Block
    if (!codeBlockBuildUp[link.from.nodeId]) {
      codeBlockBuildUp[link.from.nodeId] = {
        type: fromNode.type,
        props: fromNode.properties.custom,
        output: fromNode.properties.custom.variableName,
        code: Blocks[fromNode.type].code
      }
    } else {
      codeBlockBuildUp[link.from.nodeId].output =
        fromNode.properties.custom.variableName
    }

    //To Block
    if (!codeBlockBuildUp[link.to.nodeId]) {
      codeBlockBuildUp[link.to.nodeId] = {
        type: toNode.type,
        inputs: {},
        props: toNode.properties.custom,
        code: Blocks[toNode.type].code
      }
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.properties.custom.variableName
    } else {
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.properties.custom.variableName
    }
  }

  console.log({ codeBlockBuildUp })

  //Loop Through Code Build Up
  for (const key in codeBlockBuildUp) {
    const block = codeBlockBuildUp[key]
    if (block.type === 'Const') {
      outputString += block.code(block.output, block.props.value)
    }
    if (block.type === 'Sum') {
      outputString += block.code(
        block.props.variableName,
        block.inputs ? block.inputs.input1 : undefined,
        block.inputs ? block.inputs.input2 : undefined
      )
    }
    if (block.type === 'Assert') {
      outputString += block.code(
        block.inputs ? block.inputs.testData : undefined,
        block.inputs ? block.inputs.expectedValue : undefined
      )
    }
  }
  return outputString
}
