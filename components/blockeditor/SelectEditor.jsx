import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import TextField from '@material-ui/core/TextField'
import constBlock from '../blocks/constBlock'
import sumBlock from '../blocks/sumBlock'
import assertBlock from '../blocks/assertionBlock'

export default class SelectEditor extends React.Component {
  updateVar(e) {
    console.log(this.props)
    //props.updateVariableName(e, selectedBlock.id)
  }

  render() {
    const chart = this.props.chart
    const selectedBlock = chart.selected
    const block = chart.nodes[selectedBlock.id]
    //let variableName = block.properties.custom.variableName
    const blockEditor = () => {
      if (selectedBlock.type === 'node') {
        return (
          <div className="blockEditor">
            <ListItem>
              <ListItemText>Type: {block.type}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Id: {selectedBlock.id}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemSecondaryAction>
                <TextField
                  id="standard-basic"
                  label="Name:"
                  margin="normal"
                  defaultValue={block.properties.custom.variableName}
                  onChange={(e) => this.props.handleForm(e, selectedBlock.id)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        )
      }
    }

    return (
      <div>
        <ListItem>
          <ListItemText>Selected Block Will Appear Below</ListItemText>
        </ListItem>

        {blockEditor()}
      </div>
    )
  }
}
