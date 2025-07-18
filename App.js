import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/tab/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store/index';
import MainNavigator from './src/navigation/main/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
    'Karla-BoldItalic': require('./assets/fonts/Karla-BoldItalic.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'Audiowide': require('./assets/fonts/Audiowide-Regular.ttf'),

  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  
  return (
    <>
    <Provider store={store}>
      <Header title="FREAKYSTORE" subtitle="by JORGE GARNICA"/>
      {/* <NavigationContainer> */}
      <StatusBar style="light" />
        {/* <TabNavigator /> */}
      {/* </NavigationContainer> */}
      <MainNavigator />
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
 
  
});
