import {
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY
} from "../actions/types";

const initialState = {
  activities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity._id !== action.payload
        )
      };
    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      };
    default:
      return state;
  }
}
