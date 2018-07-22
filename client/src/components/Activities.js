import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Button } from "reactstrap";
import { deleteActivity } from "../actions/activityActions";
import { Link } from "react-router-dom";

class Activities extends Component {
  editForm = activity => {
    console.log("EDIT CLICKED", activity);
  };
  deleteForm = activity => {
    this.props.deleteActivity(activity._id);
    console.log("DELETE CLICKED", activity);
  };
  render() {
    const { state } = this.props;
    return (
      <div>
        {state.activities.length > 0 ? (
          <div>
            {state.activities.map((activity, i) => {
              return (
                <div key={i} className="activity-box">
                  <h1>{activity.activityTitle}</h1>
                  <Button color="success" className="edit-button">
                    <Link
                      to={{
                        pathname: "/activities/update",
                        state: activity
                      }}
                      onClick={this.editForm.bind(this, activity)}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button
                    color="danger"
                    onClick={this.deleteForm.bind(this, activity)}
                    className="delete-button"
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        ) : null}
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
  { deleteActivity }
)(Activities);
