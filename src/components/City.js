/* eslint-disable consistent-return, react/jsx-one-expression-per-line */
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import flag from '../assets/images/turkey-flag.png';
import WeatherIcons from './Weather_icons';
import { urlLocation } from '../redux/urlLocation/urlLocation';

const City = () => {
  const dispatch = useDispatch();
  dispatch(urlLocation('cityScreen'));
  const { state, id } = useParams();
  const states = useSelector((state) => state.homeReducer);
  const city = states[state][id];

  const pollutionLevel = function () {
    if (city.current.pollution.aqius <= 50) {
      return 'good';
    }

    if (
      city.current.pollution.aqius > 50
      && city.current.pollution.aqius <= 100
    ) {
      return 'moderate';
    }

    if (
      city.current.pollution.aqius > 100
      && city.current.pollution.aqius <= 150
    ) {
      return 'unhealthyForSensitive';
    }

    if (
      city.current.pollution.aqius > 150
      && city.current.pollution.aqius <= 200
    ) {
      return 'unhealthy';
    }
  };

  const weatherDesc = () => {
    if (city.current.weather.ic === '01d') {
      return 'clear sky (day)';
    }

    if (city.current.weather.ic === '01n') {
      return 'clear sky (night)';
    }

    if (city.current.weather.ic === '02d') {
      return 'few clouds (day)';
    }

    if (city.current.weather.ic === '02n') {
      return 'few clouds (night)';
    }

    if (city.current.weather.ic === '03d') {
      return 'scattered clouds';
    }

    if (city.current.weather.ic === '04d') {
      return 'broken clouds';
    }

    if (city.current.weather.ic === '09d') {
      return 'shower rain';
    }

    if (city.current.weather.ic === '10d') {
      return 'rain (day time)';
    }

    if (city.current.weather.ic === '10n') {
      return 'rain (night time)';
    }

    if (city.current.weather.ic === '11d') {
      return 'thunderstorm';
    }

    if (city.current.weather.ic === '13d') {
      return 'snow';
    }

    if (city.current.weather.ic === '50d') {
      return 'mist';
    }
  };

  return (
    <main className="container">
      <div className="d-flex justify-content-around align-items-center p-5 shadow-lg country-block mb-4">
        <img src={flag} alt="Turkey's map" className="px-2" />
        <div className="px-2 text-center">
          <h2 className="text-white fw-normal fst-italic">
            {city.city}
            &apos;S
          </h2>
          <h2 className="text-white fw-normal fst-italic">AIR QUALITY</h2>
          <div className="text-center mt-3">
            {pollutionLevel() === 'good' && (
              <h3>
                <span className="badge bg-green">Good</span>
              </h3>
            )}

            {pollutionLevel() === 'moderate' && (
              <h3>
                <span className="badge bg-yellow">Moderate</span>
              </h3>
            )}

            {pollutionLevel() === 'unhealthyForSensitive' && (
              <h3>
                <span className="badge bg-orange">
                  Unhealthy for sensitive groups
                </span>
              </h3>
            )}

            {pollutionLevel() === 'unhealthy' && (
              <h3>
                <span className="badge bg-red">Unhealthy</span>
              </h3>
            )}
          </div>
        </div>
      </div>

      <div className="row city-information">
        <div className="col-md mb-4">
          <div className="p-4 shadow">
            <h6 className="text-white mb-4">OVERVIEW</h6>
            <div className="table-responsive">
              <table className="table shadow-sm text-white mb-0 mb-md-4 overview-table">
                <thead>
                  <tr>
                    <th scope="col">Air pollution level</th>
                    <th scope="col">US AQI</th>
                    <th scope="col">Main pollutant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">
                      {pollutionLevel() === 'good' && (
                        <p className="mb-0 py-2">Good</p>
                      )}

                      {pollutionLevel() === 'moderate' && (
                        <p className="mb-0 py-2">Moderate</p>
                      )}

                      {pollutionLevel() === 'unhealthyForSensitive' && (
                        <p className="mb-0 py-2">
                          Unhealthy for sensitive groups
                        </p>
                      )}

                      {pollutionLevel() === 'unhealthy' && (
                        <p className="mb-0 py-2">Unhealthy</p>
                      )}
                    </td>
                    <td className="align-middle">
                      <p className="mb-0 py-2">
                        {city.current.pollution.aqius}
                      </p>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0 py-2">
                        {city.current.pollution.mainus}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h6 className="text-white mb-3 mt-3 mt-md-0">HEALTH RECOMMENDATIONS</h6>

            <p className="text-white mb-2">
              <ins>
                How to protect from air pollution in
                {city.city}?
              </ins>
            </p>

            {pollutionLevel() === 'good' && (
              <ul className="text-white">
                <li>Open your windows to bring clean, fresh air indoors.</li>
                <li>Enjoy outdoor activities.</li>
              </ul>
            )}

            {pollutionLevel() === 'moderate' && (
              <ul className="text-white">
                <li>Close your windows to avoid dirty outdoor air.</li>
                <li>Sensitive groups should reduce outdoor exercise.</li>
              </ul>
            )}

            {pollutionLevel() === 'unhealthyForSensitive' && (
              <ul className="text-white">
                <li>Sensitive groups should wear a mask outdoors.</li>
                <li>Close your windows to avoid dirty outdoor air.</li>
                <li>Everyone should reduce outdoor exercise.</li>
              </ul>
            )}

            {pollutionLevel() === 'unhealthy' && (
              <ul className="text-white">
                <li>Close your windows to avoid dirty outdoor air.</li>
                <li>Wear a mask outdoors.</li>
                <li>Avoid outdoor exercise.</li>
              </ul>
            )}
          </div>
        </div>
        <div className="col-md mb-4">
          <div className="p-4 shadow">
            <div className="table-responsive">
              <table className="table text-white mb-4 weather-table">
                <thead>
                  <tr>
                    <th scope="col" className="py-0">
                      <h6 className="text-white mb-4">WEATHER</h6>
                    </th>
                    <th
                      scope="col"
                      className="py-0 text-end d-flex justify-content-end align-items-center"
                    >
                      <img
                        src={WeatherIcons[city.current.weather.ic]}
                        alt="Weather Description"
                        className=" mb-4 me-2"
                      />
                      <h6 className="text-white mb-4">{weatherDesc()}</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">
                      <p className="mb-0">Temperature</p>
                    </td>
                    <td className="align-middle text-end">
                      <p className="mb-0">{city.current.weather.tp} °C</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="align-middle">
                      <p className="mb-0">Humidity</p>
                    </td>
                    <td className="align-middle text-end">
                      <p className="mb-0">{city.current.weather.hu} %</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="align-middle">
                      <p className="mb-0">Wind</p>
                    </td>
                    <td className="align-middle text-end">
                      <p className="mb-0">{city.current.weather.ws} m/s</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="align-middle">
                      <p className="mb-0">Pressure</p>
                    </td>
                    <td className="align-middle text-end">
                      <p className="mb-0">{city.current.weather.pr} mb</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default City;
