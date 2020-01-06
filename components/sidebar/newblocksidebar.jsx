import SidebarItem from './newblocksidebaritem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import blocks from '../blocks/allBlocks'
import '../flowchart.css'

export default () => {
  return (
    <div>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">
            Drag and drop these items onto the canvas.
          </Typography>
        </ListItemText>
      </ListItem>

      {Object.keys(blocks)
        .map((i) => blocks[i])
        .map((block) => {
          return (
            <SidebarItem
              type={block.type}
              ports={block.ports}
              properties={block.properties}
            />
          )
        })}
    </div>
  )
}
