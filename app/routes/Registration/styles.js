import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';

export default StyleSheet.create({
  registrationContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    paddingHorizontal: 20,
  },
  registerHeaderStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
  },
  registerSectionStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'left',
    color: 'white',
    marginTop: 10,
  },
  inputContainer: {
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
  registerLabelStyle: {
    fontSize: 15,
    color: '#000',
    width: 100,
    textAlign: 'left'
  },
  registerInputStyle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left',
    height: 35,
  },
  separation: {
    height: 1,
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
});
