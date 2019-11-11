export default {
  type: 'Assert',
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
    }
  },
  properties: {
    custom: 'property'
  },
  importCode: () => {
    return `const assert = require('assert');`
  },
  code: (testData, expectedValue) => {
    return `
        assert.equal(${testData}, ${expectedValue}); 
        `
  }
}
