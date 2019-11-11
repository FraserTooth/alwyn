import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './codebar.css'
import * as React from 'react'

export default class Codebar extends React.Component {
  render() {
    return (
      <div className="codebar">
        <div>{JSON.stringify(this.props.codeString)}</div>
      </div>
    )
  }
}
