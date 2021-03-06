/* eslint-disable array-callback-return, no-unused-vars, react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control, react/self-closing-comp */

import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as moment from 'moment';
import { addState, addCity } from '../redux/home/home';
import flag from '../assets/images/turkey-flag.png';
import { urlLocation } from '../redux/urlLocation/urlLocation';

function Home() {
  const dispatch = useDispatch();
  dispatch(urlLocation('homeScreen'));
  const states = useSelector((state) => state.homeReducer);

  const [cities, setCities] = useState([]);

  const [lastUpdateDate, setLastUpdateDate] = useState([]);

  useEffect(() => {
    if (Object.keys(states).length === 0) {
      axios
        .get(
          'https://api.airvisual.com/v2/states?country=Turkey&key=e4e8766a-ad50-4757-b00a-3f8b0957c08f',
        )
        .then((response) => {
          const { data } = response.data;
          data.map((item) => {
            dispatch(addState(item.state));
            return item.state;
          });

          axios
            .get(
              `https://api.airvisual.com/v2/cities?state=${
                Object.keys(states)[0]
              }&country=Turkey&key=e4e8766a-ad50-4757-b00a-3f8b0957c08f`,
            )
            .then((response) => {
              const { data } = response.data;
              const result = data.map((item) => item.city);

              result.map((city) => {
                axios(
                  `https://api.airvisual.com/v2/city?city=${city}&state=${
                    Object.keys(states)[0]
                  }&country=Turkey&key=e4e8766a-ad50-4757-b00a-3f8b0957c08f`,
                ).then((response) => {
                  dispatch(addCity(response.data.data));
                  const statesName = Object.keys(states);
                  const citiesOfFirstState = Object.entries(
                    states[statesName[0]],
                  );
                  setCities(citiesOfFirstState);
                });
              });
            });
        });
    } else {
      const statesName = Object.keys(states);
      const citiesOfFirstState = Object.entries(
        states[statesName[0]],
      );
      setCities(citiesOfFirstState);
    }
  }, []);

  useEffect(() => {
    cities.sort(
      (a, b) => b[1].current.pollution.aqius - a[1].current.pollution.aqius,
    );
    if (cities.length !== 0) {
      setLastUpdateDate(moment(cities[0][1].current.pollution.ts).format('hh:mm, MMM DD'));
    }
  }, [cities]);

  const getCitiesOfState = (e) => {
    if (Object.keys(states[e.target.value]).length === 0) {
      axios
        .get(
          `https://api.airvisual.com/v2/cities?state=${e.target.value}&country=Turkey&key=e4e8766a-ad50-4757-b00a-3f8b0957c08f`,
        )
        .then((response) => {
          const { data } = response.data;
          const result = data.map((item) => item.city);

          result.map((city) => {
            axios(
              `https://api.airvisual.com/v2/city?city=${city}&state=${e.target.value}&country=Turkey&key=e4e8766a-ad50-4757-b00a-3f8b0957c08f`,
            ).then((response) => {
              dispatch(addCity(response.data.data));
              const citiesOfState = Object.entries(states[e.target.value]);
              setCities(citiesOfState);
            });
          });
        });
    } else {
      const citiesOfState = Object.entries(states[e.target.value]);
      setCities(citiesOfState);
    }
  };

  if (Object.keys(states).length !== 0) {
    const statesName = Object.keys(states);

    cities.sort(
      (a, b) => b[1].current.pollution.aqius - a[1].current.pollution.aqius,
    );

    return (
      <main className="container">
        <div className="d-flex justify-content-around align-items-center p-5 shadow-lg country-block">
          <img src={flag} alt="Turkey's map" className="px-2" />
          <div className="px-2 text-center">
            <h2 className="text-white fw-normal fst-italic">TURKEY&apos;S</h2>
            <h2 className="text-white fw-normal fst-italic">AIR QUALITY</h2>
            <p className="text-white fs-sm">LAST UPDATE: {lastUpdateDate}</p>
          </div>
        </div>

        <div className="my-4 selection-block">
          <label htmlFor="statesName" className="d-block text-white mb-2">
            Switch between the states of Turkey from the following dropdown menu
            to view the air quality of its cities.
          </label>
          <select
            id="statesName"
            className="form-select d-block"
            onChange={getCitiesOfState}
          >
            {statesName.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="cities-block mb-4">
          <ul className="list-unstyled">
            {cities.map((item) => (
              <li
                key={item[1].city}
                className="shadow py-3 px-4"
              >
                <Link to={`/city/${item[1].state}/${item[1].city}`} className="text-decoration-none w-100 d-flex justify-content-between align-items-center">
                  <h5 className="text-white mb-0">{item[1].city}</h5>

                  <div className="text-center">
                    {item[1].current.pollution.aqius <= 50 && (
                    <h6>
                      <span className="badge bg-green">Good</span>
                    </h6>
                    )}

                    {item[1].current.pollution.aqius > 50
                    && item[1].current.pollution.aqius <= 100 && (
                      <h6>
                        <span className="badge bg-yellow">Moderate</span>
                      </h6>
                    )}

                    {item[1].current.pollution.aqius > 100
                    && item[1].current.pollution.aqius <= 150 && (
                      <h6>
                        <span className="badge bg-orange">
                          Unhealthy for sensitive groups
                        </span>
                      </h6>
                    )}

                    {item[1].current.pollution.aqius > 150
                    && item[1].current.pollution.aqius <= 200 && (
                      <h6>
                        <span className="badge bg-red">Unhealthy</span>
                      </h6>
                    )}

                    <p className="text-white mb-2">
                      {item[1].current.pollution.aqius}
                      <span className="ms-1">US AQI</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
  return (
    <div className="text-center p-5 my-5">
      <div className="lds-ellipsis mb-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5 className="text-white fw-light fst-italic">Sorry, it seems there&apos;s a problem in fetching the data from the server now.</h5>
      <h5 className="text-white fw-light fst-italic">Please wait a few minutes before you try again.</h5>
    </div>
  );
}

export default Home;
