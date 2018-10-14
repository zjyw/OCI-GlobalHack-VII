import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import WelcomePage from '../components/welcomePage';
import FormPage from '../components/formPage';
import { Redirect } from 'react-router-dom';
import Recommendation from '../components/recommendation';
import DetailsPage from '../components/detailsPage';
import TaskList from '../components/taskList';
import ResourceList from '../components/resources';
import CommunityPosts from '../components/communityPosts';

class RoutesWrapper extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/join" component={FormPage} />
        <Route path="/recommendation" component={Recommendation} />
        <Route path="/tasklist" component={TaskList} />
        <Route path="/resources" component={ResourceList} />
        <Route path="/community" component={CommunityPosts} />
        <Route path="/details" component={DetailsPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    state => ({ authorization: state.authorization })
)(RoutesWrapper));
