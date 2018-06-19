import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'react-native-material-ui';
import Color from '../../../config/Colors';
import DoctorItem from './Components/DoctorItem';
import { getAllDoctors } from '../../../actions';

class Doctors extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Medecins',
      drawerIcon: (
        <Icon name={'account-circle'} size={26} color={Color.headerBackgroundColor} />
      ),
      title: 'Medecins',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <View style={ { padding: 10 } }>
            <Icon name="menu" size={ 26 } color={Color.headerColor}/>
          </View>
        </TouchableOpacity>)
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
  }

  componentDidMount() {
    // fetch doctors here
    this.props.dispatch(getAllDoctors()).then((data) => {
      this.setState({ doctors: data });
    }).catch((err) => {
      console.warn(err);
      Alert.alert('Erreur', 'une erreur sur la liste des docteurs');
    })
  }

  render() {
    return (
      <ScrollView>
        { !this.state.doctors || this.state.doctors.length <= 0 &&
          <View style={styles.container}>
            <Text style={styles.titleStyle}>No Doctors found</Text>
            <Icon name={'local-hospital'} size={250} color={'#ccc'} />
          </View>
        }
        {
          this.state.doctors && this.state.doctors.length > 0 &&
          <View style={styles.container}>
            {this.state.doctors.map(doc => {
                return (<DoctorItem doctor={doc}/>)
              })
            }
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
    color: Color.controlColor,
    marginVertical: 10,
  }
});

const mapStateToProps = state => ({
  doctors: state.doctors.doctors,
});

export default connect(mapStateToProps)(Doctors);
