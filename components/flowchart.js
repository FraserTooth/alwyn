import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChartWithState, actions } from "@mrblenny/react-flow-chart";
import chartSimple from './simplechart'
import Sidebar from './sidebar/sidebar'
import Codebar from './codebar/codebar'
import "./flowchart.css"


console.log(chartSimple.links)
/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export default class Flowchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = cloneDeep(chartSimple)
    }

    render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func) => (...args) => this.setState(func(...args)));

    return (
      <div className="chartBox">
        <Sidebar />
        <FlowChartWithState
          initialValue={chart}
          callbacks={stateActions}
        />
        <Codebar />
      </div>
    )
  }
}