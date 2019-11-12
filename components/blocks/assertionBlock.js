export default {
  type: 'Assert',
  ports: {
    testData: {
      id: 'testData',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
    expectedValue: {
      id: 'expectedValue',
      type: 'top',
      properties: {
        custom: 'property'
      }
    }
  },
  properties: {
    custom: {
      variableName: 'testAssertion'
    }
  },
  importCode: () => {
    return `const assert = require('assert');\n`
  },
  code: (testData, expectedValue) => {
    return `
        assert.equal(${testData}, ${expectedValue});\n 
        `
  }
}
