export default {
  type: 'Param',
  style: {
    backgroundColor: 'tomato',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
  ports: {
    object: {
      id: 'object',
      type: 'top'
    },
    output: {
      id: 'output',
      type: 'bottom'
    }
  },
  properties: {
    variableName: 'keyOrIndex',
    value: '"parameterName"'
  },
  code: (block) => {
    return `const ${block.output} = ${block.inputs.object}[${block.props.value}];\n`
  },
  generateDisplayName: (properties) => {
    return `${properties.variableName} = [${properties.value}]`
  }
}
