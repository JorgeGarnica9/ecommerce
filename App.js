import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native'
import ShopStackNavigator from './src/navigation/ShopStackNavigator';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
    'Karla-BoldItalic': require('./assets/fonts/Karla-BoldItalic.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),

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
      <Header title="Welcome to My App" />
      <NavigationContainer>
      <StatusBar style="light" />
        <ShopStackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
 
  
});
