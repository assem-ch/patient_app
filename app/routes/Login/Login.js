import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  View,
} from 'react-native';
import { Button } from 'react-native-material-ui';
import { authentication } from '../../actions';
import styles from './styles';
import Images from './../../config/Images';


class Login extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillMount() {
    if (this.props.auth.isLogged) {
      this.props.navigation.navigate('RootStack');
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.reHydrated && !this.props.auth.reHydrated) {
      // check again if the user is logged
      if (nextProps.auth.isLogged) {
        this.props.navigation.navigate('DrawerNavigator');
      }
    }
  }

  authenticate = () => {
    if (!this.state.email) {
      Alert.alert('Erreur', 'Svp veuillez mettre votre email');
      return;
    }
    if (!this.state.password) {
      Alert.alert('Erreur', 'Svp veuillez mettre votre mot de passe');
      return;
    }
    this.props.dispatch(authentication(this.state.email, this.state.password)).then(() => {
      Alert.alert('Info', 'Vous etes maintenant connecte');
      this.props.navigation.navigate('DrawerNavigator');
    }).catch((err) => { Alert.alert('Erreur', 'Email ou mot de passe invalid') });
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <Image source={Images.BACKGROUND} style={{ flex: 1 }} />
        <View style={{
          position: 'absolute',
          top: 0,
          left: 50,
          flex: 1,
          alignSelf: 'center', alignItems: 'center' }}>
          <View style={{ flex: 5, alignSelf: 'stretch', alignItems: 'center' }}>
             <Text style={styles.loginText}>Authentification</Text>
             <Text style={{ color: 'white' }}> use this form to authenticate</Text>
          </View>
          <View style={{ flex: 5 }}>
            <View style={styles.inputContainerStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={'email'}
                keyboardType={'email-address'}
                onChangeText={email => this.setState({ email })}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainerStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder={'password'}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                underlineColorAndroid="transparent"
              />
            </View>
            <Button
              raised
              primary
              text='Se connecter'
              style={{ container: { width: 250, height: 50, marginTop: 30 }}}
              onPress={() => this.authenticate() }
            />
            <View style={styles.registerButtonContainer}>
              <Button
                primary
                text='creer un compte'
                style={{ container: { backgroundColor: 'white' }}}
                onPress={() => this.props.navigation.navigate('RegistrationScreen') }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
