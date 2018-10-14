import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ForumIcon from '@material-ui/icons/Forum'
import WorkIcon from '@material-ui/icons/Work'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Form from './form';
import AppBar from '../components/appBar';
import Iframe from 'react-iframe';

const Subtitle = ({message, Icon}) => (<div style={{margin: '35px 0', display: 'flex'}}>
  <Icon style={{color: 'gray', fontSize: '50px'}} />
  <Typography style={{marginTop: '10px', marginLeft: '10px'}} variant="headline">{message}</Typography>
</div>)

const styles = () => ({
  root: {
  padding: '5%',
  margin: '2%',
  display: 'flex',
  justifyContent: 'space-between'
  }
});

const chatBotURLs = {
  english: 'https://console.dialogflow.com/api-client/demo/embedded/1b2f5acd-ce46-4cfb-9809-1aa29c9f872a',
  chinese: 'https://console.dialogflow.com/api-client/demo/embedded/8a9751ca-ffaf-4220-8197-865310136cb1'
}
class FormPage extends React.Component {
  state = { chatLang: 'english'}
  handleChange = (e) => this.setState({chatLang: e.target.value});
  render() {
    const {classes, history } = this.props;
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
          <Typography variant="subheading" style={{textAlign: 'center'}}>No, thanks.</Typography>
          <Typography variant="subheading" style={{textAlign: 'center'}}>I'm just browsing</Typography>
          <Button onClick={() => {
        history.push('/details');
        }} variant="contained" style={{marginLeft: '60px', marginTop: '10px'}}>Continue</Button>
        </div>
        <div>
        <Select
            value={this.state.chatLang}
            onChange={this.handleChange}
          >
            <MenuItem value={"english"}>English</MenuItem>
            <MenuItem value={"chinese"}>Chinese</MenuItem>
          </Select>
          <Iframe
          className="chatbot"
          allow="microphone"
          width="450"
          height="450"
          position="static"
          url={chatBotURLs[this.state.chatLang]} />
        </div>
      </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(withRouter(FormPage));