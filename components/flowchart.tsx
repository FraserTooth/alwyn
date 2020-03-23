import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart, actions } from '@mrblenny/react-flow-chart'
import starterChart from './starterChart'
import NewBlockSidebar from './sidebar/newblocksidebar'
import Codebar from './codebar/codebar'
import SelectEditor from './blockeditor/SelectEditor'
import './flowchart.css'
import alwynBlocks from './blocks/blockgenerator'
import { Grid, Box } from '@material-ui/core'

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export default class FlowchartComp extends React.Component {
  public state = cloneDeep(starterChart)

  updateBlock = (e, blockId, fieldToEdit) => {
    const updatedValue = e.target.value
    const stateCopy = cloneDeep(this.state)
    stateCopy.nodes[blockId].properties[fieldToEdit] = updatedValue
    this.setState(stateCopy)
  }

  public render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

    const sidebarRenderChoice = () => {
      if (this.state.selected.type) {
        return <SelectEditor chart={chart} handleForm={this.updateBlock} />
      } else {
        return <NewBlockSidebar />
      }
    }

    return (
      <div className="chartBox">
        <Grid container>
          <Grid item xs={2}>
            {sidebarRenderChoice()}
          </Grid>
          <Grid container item xs={7}>
            <FlowChart
              chart={chart}
              callbacks={stateActions}
              Components={{
                NodeInner: alwynBlocks
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Codebar chart={chart} />
          </Grid>
        </Grid>
      </div>
    )
  }
}
