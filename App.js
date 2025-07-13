import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import categories from './src/data/categories.json';
import FlatCard from './src/components/FlatCard';

export default function App() {
  const renderCategoryItem = ({ item }) => (
    <FlatCard>
      <View style={styles.categoryContainer}>
    <Text>{item.title}</Text>
    <Image width={80} height={40} source={{uri:item.image}} />
    </View>
    </FlatCard>
  )
  
  return (
    <>
      <Header title="Welcome to My App" />
      <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id} />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  
});
