import './codebar.css'
import * as React from 'react'
import {
  Typography,
  ListItemText,
  ListItem,
  List,
  Button
} from '@material-ui/core'

import generateCodeString from './generateCodeString'

export default class Codebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codeString: ''
    }
  }

  convertToString() {
    const chart = this.props.chart

    const outputString = generateCodeString(chart)

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
