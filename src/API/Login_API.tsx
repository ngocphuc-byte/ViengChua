import axios from 'axios';
import {ToastAndroid, Alert} from 'react-native';
import {LoginAction} from '../../Redux/Actions/UserAction';
const URL = 'http://10.0.2.2:3000/ViengChua';
type user = {
  username: string;
  password: string;
};
export const onHandlerLogin = (user: user, dispatch: any, navigation) => {
  axios({
    method: 'post',
    url: URL + '/getUser',
    data: {
      username: user.username,
      password: user.password,
    },
  })
    .then(res => res.data)
    .then(data => {
      if (data) {
        dispatch(LoginAction(data));
        navigation.navigate('BottomNavigation');
      } else {
        console.log('Sai tài khoản hoặc mật khẩu');
      }
    })
    .catch(error => console.log(error));
};
export const onHandlerCreateUser = (user: user) => {
  axios({
    method: 'post',
    url: URL + '/createUser',
    data: {
      username: user.username,
      password: user.password,
      point: 0,
      nhang: 10,
    },
  })
    .then(___ => {
      ToastAndroid.show('Tạo tài khoản thành công', ToastAndroid.SHORT);
    })
    .catch(error => console.log(error));
};
export const onHandlerCheckAccount = (user: user) => {
  axios({
    method: 'post',
    url: URL + '/checkAccount',
    data: {
      username: user.username,
    },
  })
    .then(res => res.data)
    .then(data => {
      if (data) {
        Alert.alert('Cảnh báo', 'Tài khoản đã được sử dụng');
      } else {
        onHandlerCreateUser(user);
      }
    })
    .catch(error => console.log(error));
};
