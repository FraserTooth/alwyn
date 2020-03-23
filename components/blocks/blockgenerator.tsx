import * as React from 'react'
import { INodeInnerDefaultProps } from '@mrblenny/react-flow-chart'
import Typography from '@material-ui/core/Typography'
import Blocks from './allBlocks'

const defaultStyle = {
  backgroundColor: 'teal',
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
  if (Blocks.hasOwnProperty(node.type)) {
    return (
      <div style={Blocks[node.type].style}>
        <Typography align="center">
          {Blocks[node.type].generateDisplayName(node.properties)}
        </Typography>
      </div>
    )
  } else {
    return (
      <div style={defaultStyle}>
        <Typography align="center">Unknown Block</Typography>
      </div>
    )
  }
}
