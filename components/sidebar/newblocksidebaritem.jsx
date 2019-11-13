import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default ({ type, ports, properties }) => {
  return (
    <ListItem
      button
      divider
      className="sidebaritem"
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        )
      }}
    >
      <ListItemText>{type}</ListItemText>
    </ListItem>
  )
}
