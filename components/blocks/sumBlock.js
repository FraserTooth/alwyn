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
  code: (block) => {
    return `
      const ${block.props.variableName} = ${block.inputs.input1} + ${block.inputs.input2}\n
    `
  }
}
