import Blocks from '../blocks/allBlocks'
import { array } from 'prop-types'

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
  }

  //Add in Dependencies
  importStatements.forEach((statement) => {
    outputString = outputString + statement
  })
  outputString += '\n '

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
        code: Blocks[fromNode.type].code,
        id: link.from.nodeId
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
        code: Blocks[toNode.type].code,
        id: link.to.nodeId
      }
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.properties.custom.variableName
    } else {
      if (!codeBlockBuildUp[link.to.nodeId].inputs) {
        codeBlockBuildUp[link.to.nodeId].inputs = {}
      }
      codeBlockBuildUp[link.to.nodeId].inputs[toNodePort] =
        fromNode.properties.custom.variableName
    }
  }

  console.log(codeBlockBuildUp)

  //Find Stuff without Inputs, Push Those into Inputs
  //Find Stuff without Outputs, Push Those into Outputs
  const inputs = []
  const outputs = []
  const inputOutput = []
  for (const key in codeBlockBuildUp) {
    if (!codeBlockBuildUp[key].inputs) {
      inputs.push(codeBlockBuildUp[key])
    } else if (!codeBlockBuildUp[key].output) {
      outputs.push(codeBlockBuildUp[key])
    } else {
      inputOutput.push(codeBlockBuildUp[key])
    }
  }

  const orderedCodeBlocks = [...inputs, ...inputOutput, ...outputs]

  //Loop Through Code Build Up
  orderedCodeBlocks.forEach((block) => {
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
    if (block.type === 'Fetch') {
      outputString += block.code(block.output, block.props.url)
    }
  })
  return outputString
}
