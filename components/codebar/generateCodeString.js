import Const from '../blocks/constBlock'
import Sum from '../blocks/sumBlock'
import Assert from '../blocks/assertionBlock'
const Blocks = { Const, Sum, Assert }

export default (chart) => {
  const nodes = chart.nodes
  const links = chart.links

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

    //Map Back In Code Functions
    node.code = block.code

    //Map Back In Custom Props
    node.props = block.properties.custom
  }

  //Add in Dependencies
  importStatements.forEach((statement) => {
    outputString = outputString + statement
  })
  outputString += '\n'

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
        props: fromNode.props,
        output: fromNode.props.variableName,
        code: fromNode.code
      }
    } else {
      codeBlockBuildUp[link.to.nodeId].output = fromNode.props.variableName
    }

    //To Block
    if (!codeBlockBuildUp[link.to.nodeId]) {
      codeBlockBuildUp[link.to.nodeId] = {
        type: toNode.type,
        inputs: {},
        props: toNode.props,
        code: toNode.code
      }
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.props.variableName
    } else {
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.props.variableName
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
        block.inputs.input1,
        block.inputs.input2
      )
    }
    if (block.type === 'Assert') {
      outputString += block.code(
        block.inputs.testData,
        block.inputs.expectedValue
      )
    }
  }
  return outputString
}
