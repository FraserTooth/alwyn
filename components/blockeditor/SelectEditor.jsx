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
            {blockEditorProps()}
          </div>
        )
      }
    }

    //Type Dependant Block Editor Elements
    const blockEditorProps = () => {
      if (Blocks[block.type]) {
        const blockProps = Blocks[block.type].properties

        const propsArray = Object.keys(blockProps)

        return propsArray.map((prop) => {
          return (
            <ListItem>
              <TextField
                id="standard-basic"
                label={prop + ': '}
                margin="normal"
                defaultValue={block.properties[prop]}
                onChange={(e) =>
                  this.props.handleForm(e, selectedBlock.id, prop)
                }
              />
            </ListItem>
          )
        })
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
