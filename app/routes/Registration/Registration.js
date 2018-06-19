import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import { Button } from 'react-native-material-ui';
import { popNav } from '../../actions';
import styles from './styles';
import Colors from './../../config/Colors';
import Images from '../../config/Images';

class Registration extends Component {

  static navigationOptions = {
    title: 'Creer un compte',
  };

  render() {

    return (
      <ScrollView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
        <Image source={Images.BACKGROUND} style={{ flex: 1 }} />
        <View style={[styles.registrationContainer, { flex: 1, position: 'absolute', top: 0, left: 0 }]}>
          <Icon 
            style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}
            name={'account-circle'}
            size={80} 
            color={'#fff'}/>
          <Text style={styles.registerHeaderStyle}>Creer votre compte maintenant</Text>
          <Text style={styles.registerSectionStyle}>Information personnelles</Text>
          <View style={styles.separation}></View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              placeholder={'Nom'}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              placeholder={'Prenom'}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              placeholder={'Numero de tel'}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              placeholder={'Adresse'}/>
          </View>
          <Text style={styles.registerSectionStyle}>Authentification</Text>
          <View style={styles.separation}></View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              keyboardType={'email-address'}
              placeholder={'Email'}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.registerInputStyle}
              underlineColorAndroid="transparent"
              secureTextEntry
              placeholder={'Password'}/>
          </View>
          <Button
            raised
            primary
            text='Enregistrer'
            style={{ container: { width: 250, height: 50, marginVertical: 30, alignItems: 'center', alignSelf: 'center' }}}
            onPress={() => this.props.navigation.navigate('AppointmentScreen')} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Registration);
