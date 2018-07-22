import {
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY
} from "./types";

import axios from "axios";

export const getActivity = () => dispatch => {
  axios.get("/activities").then(res => {
    console.log(res, "GET TASK");
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    });
  });
};

export const createActivity = activity => dispatch => {
  axios.post("/activities/create", activity).then(res => {
    console.log(res, "INSIDE CREATE");
    dispatch({
      type: ADD_ACTIVITY,
      payload: res.data
    });
  });
};

export const deleteActivity = id => dispatch => {
  axios.delete(`/activities/delete/${id}`).then(res => {
    dispatch({
      type: DELETE_ACTIVITY,
      payload: id
    });
  });
};

export const editActivity = (id, activity) => dispatch => {
  console.log(id, activity, "EDIT ACTION FAM");
  axios.put(`/activities/update/${id}`, activity).then(res => {
    console.log("INSIDE AXIOS EDIT", res);
    dispatch({
      type: EDIT_ACTIVITY,
      payload: res.data
    });
  });
};
