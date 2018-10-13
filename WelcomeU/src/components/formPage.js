import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ForumIcon from '@material-ui/icons/Forum'
import WorkIcon from '@material-ui/icons/Work'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Form from './form';
import AppBar from '../components/appBar';
import { Typography } from '@material-ui/core';


const Subtitle = ({message, Icon}) => (<div style={{margin: '35px 0', display: 'flex'}}>
  <Icon style={{color: 'gray', fontSize: '50px'}} />
  <Typography style={{marginTop: '10px', marginLeft: '10px'}} variant="headline">{message}</Typography>
</div>)

const styles = () => ({
  root: {
  padding: '4%',
  margin: '3%',
  display: 'flex',
  justifyContent: 'space-between'
  },
});

class FormPage extends React.Component {
  onSubmit = (e) => console.log(e);
  render() {
    const {classes } = this.props;
    return (
      <div>
      <AppBar />
      <Paper className={classes.root} elevation={1}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Subtitle Icon={ForumIcon} message={"Connect with your Community"} />
          <Subtitle Icon={WorkIcon} message={"Find a Job"} />
          <Subtitle Icon={AssignmentIcon} message={"Get Help With Your Naturalization"} />
        </div>
        <div style={{marginRight: '100px'}}>
          <Typography variant="display1" style={{textAlign: 'center'}}>Join WelcomeU</Typography>
          <Typography variant="headline" style={{textAlign: 'center'}}>It's free!</Typography>
          <Form onSubmit={this.onSubmit} />
          <Typography variant="subheading">No, thanks.</Typography>
          <Typography variant="subheading">I'm just browsing</Typography>
          <Button variant="contained">Continue</Button>
        </div>
      </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(FormPage);