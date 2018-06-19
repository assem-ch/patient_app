import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import Colors from '../../../../config/Colors';

class Medoc extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftStyle}>
          <Icon name={'local-pharmacy'} size={35} color={Colors.defaultIconColor} />
        </View>
        <View style={styles.rightStyle}>
          <Text style={styles.titleStyle}>Drug name</Text>
          <Text style={styles.descriptionStyle}>Description</Text>
        </View>
        <View style={styles.extremRight}>
            {
              this.props.schedule.map((item) => {
              return (
                <View style={styles.scheduleContainer}>
                  <Text style={styles.detailStyle}>10h</Text>
                  <Text style={styles.detailStyle}>1cp</Text>
                </View>
              )},
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  leftStyle: {
    width: 80,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  rightStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.defaultTextColor,
  },
  descriptionStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: Colors.defaultDescriptionColor,
  },
  extremRight: {
    width: 70,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  scheduleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  detailStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    marginRight: 5,
    color: Colors.defaultDescriptionColor,
  }
});

export default Medoc;
