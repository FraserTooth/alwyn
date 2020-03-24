export default {
  type: 'IF',
  style: {
    backgroundColor: 'orangered',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
  ports: {
    condition: {
      id: 'condition',
      type: 'top'
    },
    true: {
      id: 'true',
      type: 'top'
    },
    false: {
      id: 'false',
      type: 'top'
    },
    output: {
      id: 'output',
      type: 'bottom'
    }
  },
  properties: {
    variableName: 'testConditional'
  },
  code: (block) => {
    return `
          const ${block.props.variableName} = ${block.inputs.condition} ? ${block.inputs.true} : ${block.inputs.false}\n
        `
  },
  generateDisplayName: (properties) => {
    return `${properties.variableName}`
  }
}
