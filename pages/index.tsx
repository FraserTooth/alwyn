import FlowchartComp from '../components/flowchart'
import 'typeface-roboto'
import './pages.css'
import { Divider, Grid, Typography, Link } from '@material-ui/core'
import Meta from '../partials/seo-meta.jsx'
import Head from 'next/head'
import Introduction from '../components/introduction'

const Index = () => {
  return (
    <div>
      <Meta />
      <Introduction />
      <Divider variant="middle" />
      <div className="pageSection">
        <FlowchartComp />
      </div>
    </div>
  )
}

export default Index
