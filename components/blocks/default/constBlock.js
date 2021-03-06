export default {
  type: 'Const',
  style: {
    backgroundColor: '#76503F',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
  ports: {
    output: {
      id: 'output',
      type: 'bottom'
    }
  },
  properties: {
    variableName: 'testConstant',
    value: 1
  },
  code: (block) => {
    return `const ${block.output} = ${block.props.value};\n`
  },
  generateDisplayName: (properties) => {
    return `${properties.variableName}: ${properties.value}`
  }
}
