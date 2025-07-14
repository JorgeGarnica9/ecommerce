import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json';
import FlatCard from '../components/FlatCard';
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';

const ProductsScreen = ({category}) => {

    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        setProductsFiltered(
            products.filter(product => product.category.toLowerCase() === category))
    },[category])

    const renderProductItem = ({ item }) => (
        <FlatCard style={{backgroundColor: colors.white}}>
            <Text>{item.title}</Text>

        </FlatCard>
    )

  return (
    <View>
      <FlatList
      data={productsFiltered}
      renderItem={renderProductItem}  
      keyExtractor={item => item.id} />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})