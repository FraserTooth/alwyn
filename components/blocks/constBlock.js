export default {
  type: 'Const',
  ports: {
    output: {
      id: 'output',
      type: 'bottom',
      properties: {
        custom: 'property'
      }
    }
  },
  properties: {
    custom: {
      variableName: 'testConstant',
      value: 1
    }
  },
  code: (variableName, value) => {
    return `const ${variableName} = ${value};\n`
  }
}
