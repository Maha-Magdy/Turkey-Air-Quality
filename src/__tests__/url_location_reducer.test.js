import urlLocationReducer from '../redux/urlLocation/urlLocation';

describe('Unit test for home reducer', () => {
  const URL_LOCATION = "turkey's air quality/urlLocation/URL_LOCATION";
  const initialState = 'homeScreen';

  it('returns the correct state for URL_LOCATION action', () => {
    expect(
      urlLocationReducer(initialState, {
        type: URL_LOCATION,
        payload: 'cityScreen',
      }),
    ).toEqual('cityScreen');
  });
});
