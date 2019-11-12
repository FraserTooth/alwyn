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
    console.log(node)
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
    const fromNodePort = fromNode[link.from.portId]
    const toNode = nodes[link.to.nodeId]
    const toNodePort = toNode[link.to.portId]

    if (fromNode.type === 'Const') {
      outputString += fromNode.code(
        fromNode.props.variableName,
        fromNode.props.value
      )
    }
    if (toNode.type === 'Sum') {
      outputString += toNode.code(
        toNode.props.variableName,
        fromNode.props.variableName
      )
    }
    if (toNode.type === 'Assert') {
      outputString += toNode.code(fromNode.props.variableName)
    }
  }

  console.log(outputString)
  return outputString
}
