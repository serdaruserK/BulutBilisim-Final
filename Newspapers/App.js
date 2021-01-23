import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import KayitOl from './KayitOl';
import GirisYap from './GirisYap';
import Login from './Login';
import Anasayfa from './Anasayfa';

const mystack = createStackNavigator({
  Giris: GirisYap,
  anasayfa: Anasayfa,
  Login: Login,
  Kayit: KayitOl,

},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#575dd9',
    }, 
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold',
    },
  }
})

export default createAppContainer(mystack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
