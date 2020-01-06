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
