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
import Dialog from './dialog';


const styles = () => ({
  root: {
  padding: '5%',
  margin: '2%',
  display: 'flex',
  justifyContent: 'space-between'
  }
});

class FormPage extends React.Component {
  onSubmit = (e) => console.log(e);
  render() {
    const {classes } = this.props;
    return (
      <div>
      <AppBar />
      <Paper className={classes.root} elevation={1}>
        <div style={{marginRight: '100px'}}>
          <Dialog />
        </div>
      </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(FormPage);