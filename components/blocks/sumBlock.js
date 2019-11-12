export default {
  type: 'Sum',
  ports: {
    input1: {
      id: 'input1',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
    input2: {
      id: 'input2',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
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
      variableName: 'test'
    }
  },
  code: (variableName, input1 = 0, input2 = 0) => {
    return `
        const ${variableName} = ${input1} + ${input2}
      `
  }
}
