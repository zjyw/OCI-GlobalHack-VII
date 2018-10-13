import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Welcome from '../components/welcome';

class RoutesWrapper extends Component {
  componentDidMount() {
    // fetch data
  }

  render() {


    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Redirect to="/products" />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    state => ({ authorization: state.authorization })
)(RoutesWrapper));
