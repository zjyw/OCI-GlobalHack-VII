import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import WelcomePage from '../components/welcomePage';
import FormPage from '../components/formPage';
import { Redirect } from 'react-router-dom';
import Recommendation from '../components/recommendation'

class RoutesWrapper extends Component {
  componentDidMount() {
    // fetch data
  }

  render() {


    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/join" component={FormPage} />
        <Route path="/" component={Recommendation} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    state => ({ authorization: state.authorization })
)(RoutesWrapper));
