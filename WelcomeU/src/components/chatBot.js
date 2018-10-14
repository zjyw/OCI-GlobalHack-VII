import React from 'react';
import Iframe from 'react-iframe';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FA from 'react-fontawesome';
import { Typography } from '@material-ui/core';

const ChatButton = ({clickHandler}) => {
  return (
    <Zoom
      in={1}
      timeout={'100ms'}
      style={{
        transitionDelay: `100ms`,
        marginRight: '60px',
        float: 'right'
      }}
      unmountOnExit
    >
      <IconButton variant="fab" color="primary" onClick={clickHandler} style={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="subheading" style={{fontSize: '20px'}}>How can I help you?</Typography>
        <FA name='comment' style={{fontSize: '90px', color:'orange', transform: 'rotate(25deg) scaleX(-1)'}}/>
      </IconButton>
    </Zoom>
  )
}
class chatBot extends React.Component {

  state = { showIframe: false };

  toggleIframe = () => {
    this.setState({
      showIframe : !this.state.showIframe
    });
  }
  render() {
    return (
    <div>
      <ChatButton clickHandler={this.toggleIframe}/>
      {
        this.state.showIframe &&
      <div style={{position: 'absolute', top: 350, right: 360}}>
        <IconButton onClick={this.toggleIframe}>
          <CloseIcon />
        </IconButton>
        <Iframe
        allow="microphone"
        width="350"
        height="430"
        url="https://console.dialogflow.com/api-client/demo/embedded/1b2f5acd-ce46-4cfb-9809-1aa29c9f872a" />
      </div>
      }

    </div>)
  }
}

export default chatBot;