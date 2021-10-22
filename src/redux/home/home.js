/* eslint-disable no-param-reassign */
const ADD_STATE = "turkey's air quality/home/ADD_STATE";
const ADD_CITY = "turkey's air quality/home/ADD_CITY";

const initialState = {};
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STATE:
      state[action.payload] = {};
      return { ...state };
    case ADD_CITY:
      state[action.payload.state][action.payload.city] = action.payload;
      return { ...state };
    default:
      return state;
  }
}

export const addState = (payload) => ({
  type: ADD_STATE,
  payload,
});

export const addCity = (payload) => ({
  type: ADD_CITY,
  payload,
});
