import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import "./App.css";
import SearchCard from "./Components/SearchCard";
import ResultCard from "./Components/ResultCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchCard />
        <ResultCard />
      </div>
    );
  }
}

App.propTypes = {
};

const mapStatetoProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);