import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import Medoc from './Components/Medoc';
import Color from '../../../config/Colors';

class Drugs extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Medicaments',
      title: 'Medicaments',
      drawerIcon: (
        <Icon name={'assessment'} size={26} color={Color.headerBackgroundColor} />
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
      drugs: [],
    };
  }

  render() {
    if (!this.state.drugs || this.state.drugs.length < 0) {
      return (
        <View style={styles.drugsContainer}>
          <Text style={styles.drugsTitleStyle}>Drugs</Text>
          <Icon name={'healing'} size={200} color={'#ccc'} />
        </View>
      )
    }

    return (
      <ScrollView style={{ containerStyle: { flex: 1 } }}>
        <View style={styles.drugsContainer}>
          <Medoc schedule={[1,3,4]} />
          <Medoc schedule={[1,3]} />
          <Medoc schedule={[1]} />
          <Medoc schedule={[1]} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  drugsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  drugsTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Drugs);
