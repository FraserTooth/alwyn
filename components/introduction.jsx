import { Divider, Grid, Typography, Link } from '@material-ui/core'

export default () => {
  return (
    <div>
      <div className="pageSection">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography variant="h2">alwyn Demo</Typography>
          </Grid>
          <Grid container direction="column" item xs={8} justify="center">
            <Typography>
              This is an MVP Demo of the alwyn Flowchart Coding IDE By
              <Link href="https://github.com/FraserTooth"> Fraser Tooth</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="pageSection">
        <Grid container spacing={1}>
          <Grid container item xs={6}>
            <Typography>
              alwyn was built to combine the best of{' '}
              <Link href="https://nodered.org/">NodeRed </Link>
              and{' '}
              <Link href="https://developers.google.com/blockly">Blockly </Link>
              with enforced test writing to enable developers to easily build
              <b> 'user generated feature'</b> toolboxes.
            </Typography>
            <Typography>
              It is named Alwyn after my Grandfather who was a University
              Professor who was regarded for his ability to teach and explain
              complex topics well before the age of Powerpoint.
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Divider variant="middle" orientation="vertical" />
          </Grid>
          <Grid container item xs={5}>
            <Typography>
              This app is built in
              <Link href="https://reactjs.org/"> React </Link>
              using
              <Link href="https://nextjs.org/"> Next.js</Link>.
            </Typography>
            <Typography>
              It also makes use of a Flowcharting library that exposes it's
              current state called{' '}
              <Link href="https://github.com/MrBlenny/react-flow-chart">
                react-flow-chart
              </Link>
              .
            </Typography>
            <Typography>
              If you are interested in using this library or contributing to its
              development please visit the{' '}
              <Link href="https://github.com/FraserTooth/alwyn">
                alwyn repository
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
