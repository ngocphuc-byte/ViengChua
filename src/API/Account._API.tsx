import axios from 'axios';
import {Alert} from 'react-native';
import {User} from '../View/Login';
const API = 'http://10.0.2.2:3000/ViengChua';
export const onHandlerGetPhapDanh = (id: string, setPhapDanh: any) => {
  axios({
    method: 'post',
    url: API + '/getPhapDanh',
    data: {
      _id: id,
    },
  })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      setPhapDanh({
        _id: data._id,
        name_PhapDanh: data.name_PhapDanh,
        level: data.level,
      });
    })
    .catch(error => console.error(error));
};

export const onHandlerPassword = (user: User) => {
  axios({
    method: 'post',
    url: API + '/changePassword',
    data: {
      _id: user._id,
      password: user.password,
    },
  })
    .then(res => res.data)
    .then(_ => Alert.alert('Thành công', 'Bạn đã thay đổi mật khẩu thành công'))
    .catch(error => console.error(error));
};

export const onHandlerUpdateNhang = (id_User, nhang) => {
  axios({
    method: 'post',
    url: API + '/updateNhang',
    data: {
      _id: id_User,
      nhang: nhang,
    },
  })
    .then(res => res.data)
    .then(data => console.log(data));
};
