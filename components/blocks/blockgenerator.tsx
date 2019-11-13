import * as React from 'react'
import { INodeInnerDefaultProps } from '@mrblenny/react-flow-chart'
import Typography from '@material-ui/core/Typography'

const blockStyles = {
  backgroundColor: 'teal',
  borderRadius: '5px',
  color: 'white',
  paddingBottom: '15px',
  paddingTop: '15px'
}

const sumBlockStyle = {
  backgroundColor: '#0C755B',
  borderRadius: '5px',
  color: 'white',
  paddingBottom: '15px',
  paddingTop: '15px'
}

const constBlockStyle = {
  backgroundColor: '#76503F',
  borderRadius: '5px',
  color: 'white',
  paddingBottom: '15px',
  paddingTop: '15px'
}

const assertBlockStyle = {
  backgroundColor: '#1E747C',
  borderRadius: '5px',
  color: 'white',
  paddingBottom: '15px',
  paddingTop: '15px'
}

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
export default ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === 'Const') {
    return (
      <div style={constBlockStyle}>
        <Typography align="center">
          {node.properties.custom.variableName} = {node.properties.custom.value}
        </Typography>
      </div>
    )
  } else if (node.type === 'Sum') {
    return (
      <div style={sumBlockStyle}>
        <Typography align="center">
          {node.properties.custom.variableName} = X + Y
        </Typography>
      </div>
    )
  } else if (node.type === 'Assert') {
    return (
      <div style={assertBlockStyle}>
        <Typography align="center">
          <b>{node.properties.custom.variableName}</b>
        </Typography>
        <Typography align="center">X Should be Equal to Y</Typography>
      </div>
    )
  } else {
    return (
      <div style={blockStyles}>
        <Typography align="center">
          Name: {node.properties.custom.variableName}
        </Typography>
      </div>
    )
  }
}
