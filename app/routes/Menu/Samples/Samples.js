import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import { popNav } from '../../../actions';
import styles from './styles';
import Color from '../../../config/Colors';

class Samples extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Prelevements',
      title: 'Prelevements',
      drawerIcon: (
        <Icon name={'add-alert'} size={26} color={Color.headerBackgroundColor} />
      ),
      headerLeft: (
        <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen') }>
          <View style={ { padding: 10 } }>
            <Icon name="menu" size={ 26 } color={Color.headerColor}/>
          </View>
        </TouchableOpacity>)
    }
  };

  render() {

    return (
      <View style={styles.sampleContainer}>
        <Text>Sample</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Samples);
