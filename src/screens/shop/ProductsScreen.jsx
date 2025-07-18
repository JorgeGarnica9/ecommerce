import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
// import products from '../../data/products.json';
import FlatCard from '../../components/FlatCard';
import { colors } from '../../global/colors';
import { useEffect, useState } from 'react';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../services/shop/shopApi';
import { useDispatch } from 'react-redux';

const ProductsScreen = ({navigation}) => {

    const [productsFiltered, setProductsFiltered] = useState([]);
    const [keyword, setKeyword] = useState('');
    const products = useSelector((state) => state.shopReducer.products);
    const category = useSelector((state) => state.shopReducer.categorySelected);
    const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);
    const dispatch = useDispatch();
    // const productsFilteredByCategory = useSelector((state) => state.shopReducer.productsFilteredByCategory);

    useEffect(() => {
      // const productsFilteredByCategory = products.filter(product => product.category.toLowerCase() === category.toLowerCase())

      if (keyword) {
        const productsFilteredByKeyword = productsFilteredByCategory.filter(product => 
          product.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setProductsFiltered(productsFilteredByKeyword);
      } else {
        setProductsFiltered(productsFilteredByCategory)};  
    },[category,keyword, productsFilteredByCategory]);
        
    
            

    const renderProductItem = ({ item }) => (
      <Pressable onPress={() => navigation.navigate('Product',{product:item})}>

        <FlatCard style={{backgroundColor: colors.white}}>
            <Text>{item.title}</Text>

        </FlatCard>
        </Pressable>
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