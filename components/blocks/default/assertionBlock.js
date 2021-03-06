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
      type: 'top'
    },
    expectedValue: {
      id: 'expectedValue',
      type: 'top'
    }
  },
  properties: {
    variableName: 'testAssertion'
  },
  importCode: () => {
    return `const assert = require('assert');\n`
  },
  code: (block) => {
    const testData = block.inputs ? block.inputs.testData : undefined
    const expectedValue = block.inputs ? block.inputs.expectedValue : undefined
    return `
        assert.equal(${testData}, ${expectedValue});\n 
        `
  },
  generateDisplayName: (properties) => {
    return properties.variableName
  }
}
