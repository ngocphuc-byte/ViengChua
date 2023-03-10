import {StyleSheet} from 'react-native';
import {Color} from './Color';
export const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: Color.Brown,
  },
  containerBack: {
    flex: 4,
    backgroundColor: Color.Brown,
    padding: 5,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: Color.Gray,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 24,
    color: Color.White,
    marginLeft: 10,
  },
  containerBottom: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  containerTop: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBody: {
    flex: 96,
  },
  imageBatHuong: {
    width: '25%',
    height: '25%',
    top: 20.5,
    right: 12,
  },
  imageBan: {
    width: '70%',
    height: '50%',
  },
  imageNhang: {
    width: '40%',
    height: '100%',
    // backgroundColor: '#f12',
    top: 40,
    right: 10,
  },
  containerNhang: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gifL: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: -20,
    right: 153,
  },
  gifR: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: -20,
    left: 126,
  },
  gifM: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: -20,
    left: 160,
  },
  imagePhat: {
    width: '100%',
    height: '90%',
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  containerButton: {
    width: '30%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 80,
    right: 10,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  iconGarbage: {
    position: 'absolute',
    right: 110,
    top: 85,
  },
  iconChat: {
    position: 'absolute',
    top: 10,
    left: 15,
    backgroundColor: Color.White,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconQuestion: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: Color.White,
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});