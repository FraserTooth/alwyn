import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './codebar.css'
import * as React from 'react'

import Typography from '@material-ui/core/Typography'
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
      return <Typography>{line}</Typography>
    })
    return (
      <div className="codebar">
        <button onClick={this.convertToString.bind(this)}>
          What is the code?
        </button>
        {formattedCodeObjects}
      </div>
    )
  }
}
