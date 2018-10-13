import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RoutesWrapper from './routes';

const routes = () => (
  <BrowserRouter basename="/welcome">
    <RoutesWrapper />
  </BrowserRouter>
);

export default connect(
  state => ({
    userProfile: state.userProfile
  })
)(routes);
