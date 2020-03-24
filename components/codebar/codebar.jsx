import './codebar.css'
import * as React from 'react'
import {
  Typography,
  ListItemText,
  ListItem,
  List,
  Button,
  TextField
} from '@material-ui/core'

import generateCodeString from './generateCodeString'

export default class Codebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codeString: '',
      functionName: 'testFunction'
    }
  }

  convertToString() {
    const chart = this.props.chart

    console.log(this.state)

    const outputString = generateCodeString(chart, this.state.functionName)

    this.setState({ codeString: outputString })
  }

  render() {
    const formattedCodeArray = this.state.codeString.split('\n')
    const formattedCodeObjects = formattedCodeArray.map((line) => {
      if (line === '') {
        return
      }
      return (
        <ListItem>
          <Typography>{line}</Typography>
        </ListItem>
      )
    })
    return (
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6">Generated Code:</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <TextField
            id="standard-basic"
            label="Function Name"
            margin="normal"
            defaultValue={this.state.functionName}
            onChange={(e) =>
              this.setState({
                functionName: e.target.value
              })
            }
          />
        </ListItem>
        <ListItem>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.convertToString.bind(this)}
          >
            What is the code?
          </Button>
        </ListItem>
        {formattedCodeObjects}
      </List>
    )
  }
}
