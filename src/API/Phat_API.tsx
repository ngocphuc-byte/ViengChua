import axios from 'axios';
import {User} from '../View/Login';
import {UpdatePointAction} from '../../Redux/Actions/UserAction';
const API = 'http://10.0.2.2:3000/ViengChua';
export const onHandlerUpdatePoint = (user, dispatch) => {
  axios({
    method: 'post',
    url: API + '/updatePoint',
    data: {
      _id: user.id_User,
      point: user.point,
      nhang: user.nhang,
    },
  })
    .then(res => res.data)
    .then(data => dispatch(UpdatePointAction(data.point, data.nhang)))
    .catch(error => console.log(error));
};
