import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  loginText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    color: 'white',
  },
  inputContainerStyle: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0e2d0f',
    width: 80,
    textAlign: 'left',
    justifyContent: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left',
    height: 35,
  },
  registerButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
