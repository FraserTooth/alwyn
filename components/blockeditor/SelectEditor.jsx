import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Blocks from '../blocks/allBlocks'

import '../flowchart.css'

export default class SelectEditor extends React.Component {
  render() {
    const chart = this.props.chart
    const selectedBlock = chart.selected
    const block = chart.nodes[selectedBlock.id]

    //Main Block Editor
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
              <ListItem>
                <TextField
                  id="standard-basic"
                  label="Name: "
                  margin="normal"
                  defaultValue={block.properties.custom.variableName}
                  onChange={(e) =>
                    this.props.handleForm(e, selectedBlock.id, 'variableName')
                  }
                />
              </ListItem>
            </ListItem>
            {blockEditorSubType()}
          </div>
        )
      }
    }

    //Type Dependant Block Editor Elements
    const blockEditorSubType = () => {
      if (block.type === 'Const') {
        return (
          <ListItem>
            <ListItem>
              <TextField
                id="standard-basic"
                label="Value: "
                margin="normal"
                defaultValue={block.properties.custom.value}
                onChange={(e) =>
                  this.props.handleForm(e, selectedBlock.id, 'value')
                }
              />
            </ListItem>
          </ListItem>
        )
      }
    }

    return (
      <div>
        <ListItem>
          <ListItemText>
            <Typography variant="h6">Block Selected:</Typography>
          </ListItemText>
        </ListItem>

        {blockEditor()}
      </div>
    )
  }
}
