import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import Color from '../../../../config/Colors';

class AppointmentCard extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Icon name={'account-circle'} size={70} color={Color.defaultIconColor} />
        </View>
        <View style={styles.rightSide}>
          <Text>{this.props.rdv}</Text>
          <Text style={styles.titleStyle}>Doctor's name</Text>
          <Text style={styles.subTitleStyle}>doctor.flan@gmail.com</Text>
          <View style={styles.separation} />
          <Text style={styles.descriptionStyle}>description here...</Text>
        </View>
        <View style={styles.extremRight}>
          <Text style={styles.yearStyle}>2018</Text>
          <Text style={styles.monthStyle}>June</Text>
          <Text style={styles.dayStyle}>05</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 130,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    elevation: 3,
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 0,
    backgroundColor: 'white',
  },
  leftSide: {
    width: 100,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  rightSide: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Color.defaultTextColor,
  },
  subTitleStyle: {
    fontSize: 16,
    textAlign: 'left',
    color: Color.defaultTextColor,
  },
  descriptionStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: Color.defaultDescriptionColor,
  },
  separation: {
    height: 1,
    backgroundColor: '#dadada',
    marginVertical: 5,
  },
  extremRight: {
    width: 80,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yearStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: Color.defaultTextColor,
  },
  monthStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: Color.defaultTextColor,
  },
  dayStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.defaultTextColor,
  },
});

export default AppointmentCard;
