import React from 'react';
import { connect } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import MainRouter from "@/router";

import { setGlobel } from '@/store/actions';

class App extends React.Component {

	componentDidMount() {
	}

  render() {
    return (
      <Router>
        <MainRouter/>
      </Router>
    );
  }
}

export default connect()(App);

