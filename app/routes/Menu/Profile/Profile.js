import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Picker,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'react-native-material-ui';
import {
  RkTextInput,
  RkButton,
} from 'react-native-ui-kitten';
import Color from './../../../config/Colors';
import { getPatientProfile, updatePatientProfile } from '../../../actions';

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Profil',
      title: 'Mon Profil',
      drawerIcon: (
        <Icon name={'insert-emoticon'} size={26} color={Color.headerBackgroundColor} />
      ),
      headerLeft: (
        <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen') }>
          <View style={ { padding: 10 } }>
            <Icon name="menu" size={ 26 } color={Color.headerColor}/>
          </View>
        </TouchableOpacity>)
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props.auth,
    };
  }

  componentWillMount() {
    this.props.dispatch(getPatientProfile(this.props.auth.uid)).then(() => {
      Alert.alert('Info', 'Profil utilisateur charge avec success');
    }).catch((err) => {
      console.log(err);
      Alert.alert('Erreur', 'Veuillez reessayer une autre fois svp');
    });
  }

  showMaladies = () => {
    if (!this.state.maladie) {
      return (
        <View>
          <Text style={ styles.titleTextStyle }>{ this.state.maladies.name }</Text>
          <Text style={ styles.descriptionStyle }>{ this.state.maladies.description }</Text>
        </View>);
    }

    return (
      <View>
        <Text>...</Text>
      </View>
    )
  };

  saveChanges = () => {
    this.props.dispatch(updatePatientProfile(this.state)).then(() => {
      Alert.alert('Info', 'Profile updated');
    }).catch((err) => {
      console.warn(err);
    })
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={[styles.cardStyle, styles.infoContainer]}>
            <Text style={styles.titleStyle}>Information Personnelles</Text>
            <ScrollView>
              <View>
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Nom & prenom'}
                  value={this.state.name}
                  onChangeText={txt => this.setState({ name: txt})}
                />
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Email'}
                  keyboardType={'email-address'}
                  value={this.state.email}
                  onChangeText={txt => this.setState({ email: txt})}
                  enabled={false}
                />
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Phone'}
                  keyboardType={'phone'}
                  value={this.state.phone}
                  onChangeText={txt => this.setState({ phone: txt})}
                />
                <View style={styles.separation} />
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Adresse'}
                  value={this.state.address.street}
                  onChangeText={txt => this.setState({ street: txt})}
                />
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Code postal'}
                  value={this.state.address.zipCode}
                  onChangeText={txt => this.setState({ zipCode: txt})}
                />
                <RkTextInput
                  rkType={'topLabel'}
                  label={'Ville'}
                  value={this.state.address.city}
                  onChangeText={txt => this.setState({ city: txt})}
                />
              </View>
            </ScrollView>
          </View>
          <View style={[styles.cardStyle, styles.maladieContainer]}>
            <Text style={styles.titleStyle}>Maladie</Text>
            <View>{this.showMaladies()}</View>
          </View>
          <View style={[styles.cardStyle, styles.procheContainer]}>
            <Text style={styles.titleStyle}>Proche</Text>
            <View>
              <RkTextInput
                rkType={'topLabel'}
                label={'Nom'}
                value={this.state.proche.name}
                onChangeText={txt => this.setState({ proche: { ...this.state.proche, name: txt }})}
              />
              <RkTextInput
                rkType={'topLabel'}
                label={'Email'}
                keybaordType={'email-address'}
                value={this.state.proche.email}
                onChangeText={txt => this.setState({ proche: { ...this.state.proche, email: txt }})}
              />
            </View>
          </View>
          <RkButton
            style={{ marginVertical: 10 }}
            onPress={() => this.saveChanges()}
            rkType={'rounded'}>Enregistrer</RkButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 3,
    margin: 10,
    padding: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Color.controlColor,
  },
  titleTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.defaultTextColor,
    marginBottom: 5,
  },
  descriptionStyle: {
    fontSize: 14,
    color: Color.defaultDescriptionColor,
  },
  infoContainer: {
    height: 550,
  },
  maladieContainer: {
    flex: 1,
  },
  procheContainer: {
    flex: 1,
  },
  separation: {
    width: 1,
    backgroundColor: '#ccc',
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
