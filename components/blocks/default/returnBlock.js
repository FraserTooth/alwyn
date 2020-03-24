export default {
  type: 'Return',
  style: {
    backgroundColor: 'black',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
  ports: {
    returnValue: {
      id: 'returnValue',
      type: 'top'
    }
  },
  properties: {},
  code: (block) => {
    return `return ${block.inputs.returnValue}\n`
  },
  generateDisplayName: (properties) => {
    return 'return'
  }
}
