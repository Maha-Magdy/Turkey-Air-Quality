import homeReducer from '../redux/home/home';

describe('Unit test for home reducer', () => {
  const ADD_STATE = "turkey's air quality/home/ADD_STATE";
  const ADD_CITY = "turkey's air quality/home/ADD_CITY";

  const states = {
    Adana: {},
  };

  const city = {
    city: 'Adana',
    country: 'Turkey',
    current: { weather: {}, pollution: {} },
    location: { type: 'Point', coordinates: [] },
    state: 'Adana',
  };

  it('returns the correct state for ADD_STATE action', () => {
    expect(homeReducer({}, { type: ADD_STATE, payload: 'Adana' })).toEqual(
      states,
    );
  });

  it('returns the correct state for ADD_CITY action', () => {
    expect(homeReducer(states, { type: ADD_CITY, payload: city })).toEqual(
      {
        Adana: { Adana: city },
      },
    );
  });
});
