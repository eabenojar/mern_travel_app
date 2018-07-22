import React, { Component } from "react";
import { getActivity } from "../actions/activityActions";
import { connect } from "react-redux";
import Activities from "./Activities";
import { Link } from "react-router-dom";

class ActivityMainPage extends Component {
  componentDidMount() {
    this.props.getActivity();
  }
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Link to="/activities/create">Create New Activity</Link>
        <Activities />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { getActivity }
)(ActivityMainPage);
