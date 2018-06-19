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

class Messages extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Mes messages',
      title: 'Messages',
      drawerIcon: (
        <Icon name={'message'} size={26} color={Color.headerBackgroundColor} />
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
      <View style={styles.messagesContainer}>
        <Text>Messages</Text>
        <Icon name={'message'} size={200} color={'#ccc'} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Messages);
