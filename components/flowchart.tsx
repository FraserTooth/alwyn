import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart, actions } from '@mrblenny/react-flow-chart'
import starterChart from './starterChart'
import Sidebar from './sidebar/sidebar'
import Codebar from './codebar/codebar'
import SelectEditor from './blockeditor/SelectEditor'
import './flowchart.css'

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export default class FlowchartComp extends React.Component {
  public state = cloneDeep(starterChart)

  updateVariableName = (e, blockId) => {
    const updatedName = e.target.value
    const stateCopy = cloneDeep(this.state)
    stateCopy.nodes[blockId].properties.custom.variableName = updatedName
    this.setState(stateCopy)
  }

  public render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

    return (
      <div className="chartBox">
        <div>
          <Sidebar />
          <SelectEditor chart={chart} handleForm={this.updateVariableName} />
        </div>
        <FlowChart chart={chart} callbacks={stateActions} />
        <Codebar chart={chart} />
      </div>
    )
  }
}
