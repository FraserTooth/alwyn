import Blocks from '../../blocks/allBlocks'

const functionStart = (nodes, functionName) => {
  let outputString = ''
  const importStatements = []
  const inputsStatements = []

  //For Each Node Map in Code Functions
  //Write Dependancies and Inputs into Array
  for (const key in nodes) {
    const node = nodes[key]
    const block = Blocks[node.type]

    //Pull Out Import Statements
    const importCode = block.importCode
    if (importCode && !importStatements.includes(importCode())) {
      importStatements.push(importCode())
    }

    //Push Inputs
    if (node.type === 'Input' && !inputsStatements.includes(key)) {
      inputsStatements.push(key)
    }
  }

  //Add in Dependencies
  importStatements.forEach((statement) => {
    outputString = outputString + statement
  })
  outputString += '\n'

  //Grab Inputs and assign them as parameters to function
  outputString += 'function ' + functionName + `(`
  for (let i = 0; i < inputsStatements.length; i++) {
    const inputNode = nodes[inputsStatements[i]]
    outputString += inputNode.properties.variableName
    if (inputNode.properties.defaultValue) {
      outputString += '=' + inputNode.properties.defaultValue
    }
    if (i < inputsStatements.length - 1) {
      outputString += ', '
    }
  }
  outputString += `){\n`

  return outputString
}

const functionEnd = () => {}

export default {
  functionStart,
  functionEnd
}
