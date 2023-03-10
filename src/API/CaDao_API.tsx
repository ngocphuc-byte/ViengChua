import axios from 'axios';
const API = 'http://10.0.2.2:3000/ViengChua';
export const onHandlerGetCaDao = setData => {
  axios({
    method: 'get',
    url: API + '/getCaDao',
  })
    .then(res => res.data)
    .then(data => {
      setData(data);
    })
    .catch(error => console.log(error));
};
