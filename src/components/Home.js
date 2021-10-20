/* eslint-disable no-unused-vars */

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { addState } from '../redux/home/home';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        'http://api.airvisual.com/v2/states?country=Turkey&key=1b5246a4-d6cf-4272-af2a-2a060b3a0c03',
      )
      .then((response) => {
        const { data } = response.data;
        const states = data.map((item) => {
          dispatch(addState(item.state));
          return item.state;
        });
      });

    // axios
    //   .get(
    //     'http://api.airvisual.com/v2/cities?state=Istanbul&country=Turkey&key=1b5246a4-d6cf-4272-af2a-2a060b3a0c03',
    //   )
    //   .then((response) => {
    //     const { data } = response.data;
    //     const result = data.map((item) => item.city);
    //     result.map((city) => {
    //       axios(
    //         `http://api.airvisual.com/v2/city?city=${city}&state=Istanbul&country=Turkey&key=1b5246a4-d6cf-4272-af2a-2a060b3a0c03`,
    //       ).then((response) => {
    //         console.log('Finally', response.data.data);
    //       });
    //     });
    //   });
  }, []);

  return 'Come to Mummy!';
}

export default Home;
