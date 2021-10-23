const URL_LOCATION = "turkey's air quality/urlLocation/URL_LOCATION";
const initialState = 'homeScreen';

export default function urlLocationReducer(state = initialState, action) {
  switch (action.type) {
    case URL_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
export const urlLocation = (payload) => ({
  type: URL_LOCATION,
  payload,
});
