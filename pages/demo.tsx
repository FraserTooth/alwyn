import FlowchartComp from '../components/flowchart'
import Link from '@material-ui/core/Link'

export default function Demo() {
  return (
    <div>
      <Link href="/index">
        <a title="Home Page">Home Page</a>
      </Link>
      <p>This is the demo page</p>
      <FlowchartComp />
    </div>
  )
}
