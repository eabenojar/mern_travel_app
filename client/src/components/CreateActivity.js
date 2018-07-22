import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { connect } from "react-redux";
import { createActivity } from "../actions/activityActions";
import { Redirect } from "react-router-dom";

class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityTitle: "",
      activityDescription: "",
      activityLocation: "",
      activityCategory: "",
      timeStart: "",
      timeEnd: "",
      activityCapacity: 0,
      submitForm: false
    };
  }
  handleInput = event => {
    console.log(event.target.name, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  clickButton = event => {
    event.preventDefault();
    this.props.createActivity(this.state);
    this.setState({
      submitForm: true
    });
  };
  clear = () => {
    this.setState({
      activityTitle: ""
    });
  };
  render() {
    console.log("YEET", this.props);
    return (
      <div className="create-activity-container">
        {this.state.submitForm ? (
          <Redirect to="/" />
        ) : (
          <Form onSubmit={this.clickButton}>
            <FormGroup row>
              <Label for="exampleEmail" md={3}>
                Title
              </Label>
              <Col md={9}>
                <Input
                  type="text"
                  name="activityTitle"
                  id="activityTitle"
                  value={this.state.activityTitle}
                  placeholder="Activity Title"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" md={3}>
                Description
              </Label>
              <Col md={9}>
                <Input
                  type="textarea"
                  name="activityDescription"
                  id="activityDescription"
                  placeholder="Activity Description"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" md={3}>
                Location
              </Label>
              <Col md={9}>
                <Input
                  type="text"
                  name="activityLocation"
                  id="activityLocation"
                  placeholder="Location (City, State)"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" md={3}>
                Select
              </Label>
              <Col md={9}>
                <Input
                  type="select"
                  name="activityCategory"
                  id="exampleSelect"
                  onChange={this.handleInput}
                >
                  <option value="Sports/Fitness">Sports / Fitness </option>
                  <option value="Outdoor Activities">Outdoor Activities</option>
                  <option value="Food/Cooking">Food / Cooking</option>
                  <option value="Collaboration/Business/Entrepreneurs">
                    Collaboration / Business / Entrepreneurs
                  </option>
                  <option value="Art/Film/Music">Art / Film / Music</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" md={3}>
                Start Time
              </Label>
              <Col md={9}>
                <Input
                  type="time"
                  name="timeStart"
                  id="timeStart"
                  placeholder="Start Time"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" md={3}>
                End Time
              </Label>
              <Col md={9}>
                <Input
                  type="time"
                  name="timeEnd"
                  id="timeEnd"
                  placeholder="End Time"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" md={3}>
                Activity Capacitiy
              </Label>
              <Col md={9}>
                <Input
                  type="select"
                  name="activityCapacity"
                  id="activityCapacity"
                  onChange={this.handleInput}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value=">10"> >10</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col md={{ size: 9, offset: 3 }}>
                <Button>Submit</Button>
                <Button onClick={this.clear}>Cancel</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
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
  { createActivity }
)(CreateActivity);
