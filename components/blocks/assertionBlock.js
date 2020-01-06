export default {
  type: 'Assert',
  style: {
    backgroundColor: '#1E747C',
    borderRadius: '5px',
    color: 'white',
    paddingBottom: '15px',
    paddingTop: '15px'
  },
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
