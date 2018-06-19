import React from 'react';
import { Image } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems,
} from 'react-navigation';
import { Container, Content, Header, Body } from 'native-base';
import Colors from './../config/Colors';

// first screens in StackNavigator
import Login from './../routes/Login';
import Registration from './../routes/Registration';
// screen via drawer menu
import Doctors from './../routes/Menu/Doctors';
import Appointments from './../routes/Menu/Appointments';
import Drugs from './../routes/Menu/Drugs';
import Messages from './../routes/Menu/Messages';
import Profile from './../routes/Menu/Profile';
import Sample from './../routes/Menu/Samples';
import Images from './Images';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 150, backgroundColor: 'white', borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
      <Body>
        <Image
          source={Images.LOGO}
          style={{ height: 150, width: 150, resizeMode: 'cover', alignSelf: 'center', justifyContent: 'center' }} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const RootStack = new DrawerNavigator({
  DoctorsScreen: {screen: Doctors},
  AppointmentScreen: {screen: Appointments},
  DrugsScreen: {screen: Drugs},
  MessagesScreen: {screen: Messages},
  ProfileScreen: {screen: Profile},
  SampleScreen: {screen: Sample},
}, {
  headerMode: 'screen',
  initialRouteName: 'DoctorsScreen',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  navigationOptions: {
    headerTintColor: Colors.headerColor,
    headerStyle: { backgroundColor: Colors.headerBackgroundColor },
  },
});

const AppStackNavigator = new StackNavigator({
  LoginScreen: { screen: Login },
  RegistrationScreen: { screen: Registration },
  DrawerNavigator: { screen: RootStack },
}, {
  navigationOptions: {
    gesturesEnabled: false,
    headerTintColor: Colors.headerColor,
    headerStyle: { backgroundColor: Colors.headerBackgroundColor, borderWidth: 0, borderBottomColor: 'white' },
  }
});

export {
  AppStackNavigator,
};
