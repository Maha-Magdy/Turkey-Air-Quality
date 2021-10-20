/* eslint-disable no-param-reassign */
const ADD_STATE = "turkey's air quality/home/ADD_STATE";

const initialState = {};
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STATE:
      state[action.payload] = {};
      return { ...state };
    default:
      return state;
  }
}

export const addState = (payload) => ({
  type: ADD_STATE,
  payload,
});
