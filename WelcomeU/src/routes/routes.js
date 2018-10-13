import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import WelcomePage from '../components/welcomePage';
import FormPage from '../components/formPage';

class RoutesWrapper extends Component {
  componentDidMount() {
    // fetch data
  }

  render() {


    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/join" component={FormPage} />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    state => ({ authorization: state.authorization })
)(RoutesWrapper));
