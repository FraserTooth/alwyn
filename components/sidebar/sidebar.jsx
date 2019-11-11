import SidebarItem from './sidebaritem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import constBlock from '../blocks/constBlock'
import sumBlock from '../blocks/sumBlock'
import assertBlock from '../blocks/assertionBlock'

export default () => {
  return (
    <div>
      <ListItem>
        <ListItemText>Drag and drop these items onto the canvas.</ListItemText>
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
