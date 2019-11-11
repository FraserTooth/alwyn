import Link from '@material-ui/core/Link';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

const Index = () => (
    <div>
        <Link href="/demo" >
            <a title="Demo Page">Demo Page</a>
        </Link>
        <Typography variant="h1">
            Alwyn
        </Typography>
        <Divider />
        <Typography>
            This is a Demo of the Coding Generator MVP
        </Typography>
        <Typography>
            It is named Alwyn after my Grandfather who taught for many years as a university Professor.
        </Typography>
        <Typography>
            Everybody who knew him said he was a good teacher.
        </Typography>
        <Typography>
            I hope this app will teach as well as he did.
        </Typography>
    </div>
  );
  
export default Index;
  