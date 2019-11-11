export default {
  type: 'Constant',
  ports: {
    port1: {
      id: 'port1',
      type: 'bottom',
      properties: {
        custom: 'property'
      }
    }
  },
  properties: {
    custom: 'property'
  },
  code: (outputVariable, input1, input2) => {
    return `
        const ${outputVariable} = ${input1} + ${input2}
      `
  }
}
