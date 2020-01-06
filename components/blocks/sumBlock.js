export default {
  type: 'Sum',
  style: {
    backgroundColor: '#0C755B',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
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
      variableName: 'testSum'
    }
  },
  code: (variableName, input1 = 0, input2 = 0) => {
    return `
        const ${variableName} = ${input1} + ${input2}\n
      `
  }
}
