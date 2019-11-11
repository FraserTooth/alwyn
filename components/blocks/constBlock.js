export default {
  type: 'top/bottom',
  ports: {
    port1: {
      id: 'port1',
      type: 'top',
      properties: {
        custom: 'property'
      }
    },
    port2: {
      id: 'port1',
      type: 'bottom',
      properties: {
        custom: 'property'
      }
    }
  },
  properties: {
    custom: 'property'
  }
}
