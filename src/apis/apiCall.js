import axios from 'axios';

export default {
  getData: (urlParam) =>
    axios({
      method: 'GET',
      url: urlParam,
      headers: {
        'content-type': 'application/json',
      },
    }),
};

// export default {
//   getData: (urlParam) =>
//     axios({
//       method: 'GET',
//       url: urlParam,
//       headers: {
//         'content-type': 'application/json',
//         'x-rapidapi-key': process.env.RAPIDAPI_KEY,
//       },
//       params: {
//         parameter: 'parameter',
//       },
//     }),
// };
