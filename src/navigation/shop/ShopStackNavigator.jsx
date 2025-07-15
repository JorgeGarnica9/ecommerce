import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen } from '../../screens';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function ShopStackNavigator() {
  const category = useSelector((state) => state.shopReducer.categorySelected);
  // probar a ver cómo cambiar los nombres de las vistas dependiendo lo seleccionado

  return (
      <Stack.Navigator
      initialRouteName='Categories'>
        <Stack.Screen name="Categories"  component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
  )
}