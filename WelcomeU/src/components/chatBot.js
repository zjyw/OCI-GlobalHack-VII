import React from 'react';
import Iframe from 'react-iframe';

class chatBot extends React.Component {
  render() {
    return (<Iframe
    allow="microphone"
    width="350"
    height="430"
    url="https://console.dialogflow.com/api-client/demo/embedded/1b2f5acd-ce46-4cfb-9809-1aa29c9f872a" />)
  }
}

export default chatBot;