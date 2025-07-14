import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('');
  
  
  return (
    <>
      <Header title="Welcome to My App" />
      <StatusBar style="light" />
      {
        categorySelected ? 
        <ProductsScreen category={categorySelected} />
        :
        <CategoriesScreen setCategorySelected={setCategorySelected}/>
      }
      {/* <CategoriesScreen /> */}
      {/* <ProductsScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
 
  
});
