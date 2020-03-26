export default {
  type: 'Input',
  style: {
    backgroundColor: 'darkviolet',
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
    variableName: 'input',
    defaultValue: undefined
  },
  code: (block) => {
    return ``
  },
  generateDisplayName: (properties) => {
    return `${properties.variableName}`
  }
}
