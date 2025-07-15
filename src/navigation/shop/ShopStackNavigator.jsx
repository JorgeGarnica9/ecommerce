import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function ShopStackNavigator() {
  return (
      <Stack.Navigator
      initialRouteName='Categories'>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
  )
}