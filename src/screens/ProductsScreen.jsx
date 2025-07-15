import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json';
import FlatCard from '../components/FlatCard';
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';
import Search from '../components/Search';

const ProductsScreen = ({category}) => {

    const [productsFiltered, setProductsFiltered] = useState([]);
    const [keyword, setKeyword] = useState('');
   

    useEffect(() => {
      const productsFilteredByCategory = products.filter(product => product.category.toLowerCase() === category.toLowerCase())

      if (keyword) {
        const productsFilteredByKeyword = productsFilteredByCategory.filter(product => 
          product.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setProductsFiltered(productsFilteredByKeyword);
      } else {
        setProductsFiltered(productsFilteredByCategory)};  
    },[category,keyword]);
        
    
            

    const renderProductItem = ({ item }) => (
        <FlatCard style={{backgroundColor: colors.white}}>
            <Text>{item.title}</Text>

        </FlatCard>
    )

  return (
    <View>
      <Search keyword={keyword} setKeyword={setKeyword}/>
      <FlatList
      data={productsFiltered}
      renderItem={renderProductItem}  
      keyExtractor={item => item.id} />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})