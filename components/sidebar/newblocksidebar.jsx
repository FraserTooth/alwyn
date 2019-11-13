import SidebarItem from './newblocksidebaritem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import constBlock from '../blocks/constBlock'
import sumBlock from '../blocks/sumBlock'
import assertBlock from '../blocks/assertionBlock'
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

      <SidebarItem
        type={constBlock.type}
        ports={constBlock.ports}
        properties={constBlock.properties}
      />

      <SidebarItem
        type={sumBlock.type}
        ports={sumBlock.ports}
        properties={sumBlock.properties}
      />

      <SidebarItem
        type={assertBlock.type}
        ports={assertBlock.ports}
        properties={assertBlock.properties}
      />
    </div>
  )
}
