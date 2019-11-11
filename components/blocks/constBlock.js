export default {
  type: 'Sum',
  ports: {
    port1: {
      id: 'port1',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
    port2: {
      id: 'port2',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
    port3: {
      id: 'port3',
      type: 'bottom',
      properties: {
        custom: 'property'
      }
    }
  },
  properties: {
    custom: 'property'
  },
  code: (variableName, value) => {
    return `const ${variableName} = ${value}`
  }
}
