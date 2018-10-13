import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import welcomeMessage from '../constants/languages';

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '9%'
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
  },
  box: {
    display: 'flex'
  },
  buttonWrapper: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    padding: '1%'
  },
  button: {
    width: '80%',
    margin: 'auto'
  },
});

const ButtonContainer = ({message, classes}) => (
  <div className={classes.buttonWrapper}>
    <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classes.button}
      >
        {message}
      </Button>
  </div>
)

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.box}>
      {welcomeMessage.map(m => (<ButtonContainer key={m.lang} message={m.message} classes={classes}/>))}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(FullWidthGrid);