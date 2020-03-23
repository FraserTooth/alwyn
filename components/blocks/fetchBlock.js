export default {
  type: 'Fetch',
  style: {
    backgroundColor: 'teal',
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
      variableName: 'fetchRequest',
      url: 'https://www.example.com'
    }
  },
  code: (block) => {
    return `
        const response  = await fetch(${block.props.url})
        const data = await response.json()
        const ${block.output} = await JSON.parse(data)\n
      `
  }
}
