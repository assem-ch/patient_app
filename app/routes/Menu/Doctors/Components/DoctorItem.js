import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import Colors from '../../../../config/Colors';

class DoctorItem extends Component {

  showSpecialities = () => {
    if (this.props.doctor.specialities && this.props.doctor.specialities[0]) {
      return (
        <Text style={styles.specText}>{this.props.doctor.specialities[0].name}</Text>
      );
    }
    return (
      <Text style={[styles.specText, { fontSize: 12 }]}>No speciality found for this doctor</Text>
    )
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.leftStyle}>
          <Icon name={'account-circle'} size={75} color={Colors.defaultIconColor} />
        </View>
        <View style={styles.rightStyle}>
          <Text style={styles.titleStyle}>{this.props.doctor.name}</Text>
          <Text style={styles.subTitleStyle}>{this.props.doctor.email}</Text>
          <View stlye={styles.separation} />
          <View style={styles.specialityStyle}>{this.showSpecialities()}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  leftStyle: {
    width: 100,
  },
  rightStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.defaultTextColor,
  },
  subTitleStyle: {
    fontSize: 16,
    textAlign: 'left',
    color: Colors.defaultDescriptionColor,
  },
  separation: {
    height: 1,
    backgroundColor: '#ccc',
  },
  specialityStyle: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  specText: {
    fontSize: 14,
    paddingVertical: 5,
    color: Colors.defaultDescriptionColor,
  },
});

export default DoctorItem;
