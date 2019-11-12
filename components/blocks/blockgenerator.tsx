import * as React from 'react'
import { INodeInnerDefaultProps } from '@mrblenny/react-flow-chart'
import Typography from '@material-ui/core/Typography'

const blockStyles = {
  backgroundColor: 'teal',
  borderRadius: '5px',
  color: 'white',
  paddingBottom: '15px'
}

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
export default ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === 'Const') {
    return (
      <div style={blockStyles}>
        <Typography align="center">Constant Block</Typography>
        <Typography align="center">
          Name: {node.properties.custom.variableName}
        </Typography>
        <Typography align="center">
          Value: {node.properties.custom.value}
        </Typography>
      </div>
    )
  } else if (node.type === 'Sum') {
    return (
      <div style={blockStyles}>
        <Typography align="center">Sum Block</Typography>
        <Typography align="center">
          Name: {node.properties.custom.variableName}
        </Typography>
      </div>
    )
  } else if (node.type === 'Assert') {
    return (
      <div style={blockStyles}>
        <Typography align="center">Assertion Block</Typography>
        <Typography align="center">
          Name: {node.properties.custom.variableName}
        </Typography>
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
