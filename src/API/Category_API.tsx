import axios from 'axios';
import {PhatProps} from '../View/CategoryPhat';
import {ToastAndroid} from 'react-native';
import {ElevationLevels} from 'react-native-paper/lib/typescript/types';
import {UpdateUserAction} from '../../Redux/Actions/UserAction';
const API = 'http://10.0.2.2:3000/ViengChua';
export const onHandlerGetPhat = setData => {
  axios({
    method: 'post',
    url: API + '/getPhat',
  })
    .then(res => res.data)
    .then(data => {
      //   console.log(data);
      setData(data);
    })
    .catch(error => console.log(error));
};

export const onHandlerInsertUser = (_id, id_User, setData) => {
  axios({
    method: 'post',
    url: API + '/createMoreAccount',
    data: {
      _id: _id,
      id_User: id_User,
    },
  })
    .then(res => res.data)
    .then(data => {
      onHandlerGetPhat(setData);
      ToastAndroid.show('Sở hữu Skin thành công', ToastAndroid.SHORT);
    })
    .catch(error => console.log(error));
};

export const onHandlerGetLevelPhapDanh = (
  id_User,
  level,
  id_Phat,
  setData,
  dispatch,
) => {
  axios({
    method: 'post',
    url: API + '/getLevelPhapDanh',
    data: {
      level: level,
    },
  })
    .then(res => res.data)
    .then(data => {
      dispatch(UpdateUserAction(level, data._id));
      onHandlerUpdateUser(id_User, level, data._id);
      onHandlerInsertUser(id_Phat, id_User, setData);
    })
    .catch(error => console.log(error));
};

export const onHandlerUpdateUser = (_id, level, id_PhapDanh) => {
  axios({
    method: 'post',
    url: API + '/updateUser',
    data: {
      _id: _id,
      level: level,
      id_PhapDanh: id_PhapDanh,
    },
  })
    .then(res => res.data)
    .then(data => {})
    .catch(error => console.log(error));
};
