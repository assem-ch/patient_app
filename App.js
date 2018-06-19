/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { AppStackNavigator } from './app/config/Navigator';
import configureStore from './app/store';
import Images from './app/config/Images';
import Colors from './app/config/Colors';

type Props = {};

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component<Props> {

  constructor() {
    super();
    this.store = null;
    this.state = {
      isStoreInitialised: false,
    };
    this.statusBarColor = (Platform.OS === 'ios' ? 'dark-content' : 'light-content');
  }

  componentDidMount() {
    configureStore((store) => {
      this.store = store;
      this.setState({ isStoreInitialised: true });
    });
  }

  render() {
    if (!this.state.isStoreInitialised) {
      return (
        <View style={styles.container}>
         <Text style={styles.welcome}>Patient App</Text>
         <Text style={styles.instructions}>this is a medical app for patients to connect with their doctors</Text>
         <Image 
            source={Images.LOGO}
            style={{ width: 350, height: 350, justifyContent: 'center', resizeMode: 'center', margin: 10 }} />
         <ActivityIndicator
             animating
             size={35}
             color={'green'} 
             style={styles.loadingStyle} />
        </View>
      );
    }

    return (
      <Provider store={this.store}>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={{ flex: 1 }}>
            <StatusBar
              backgroundColor={Colors.statusBarBackgroundColor}
              barStyle={this.statusBarColor}
            />
            <AppStackNavigator />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
