import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen } from '../../screens';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function ShopStackNavigator() {
  const category = useSelector((state) => state.shopReducer.categorySelected);
  // probar a ver cómo cambiar los nombres de las vistas dependiendo lo seleccionado

  return (
      <Stack.Navigator
      initialRouteName='Categorías'>
        <Stack.Screen name="Categorías"  component={CategoriesScreen} />
        <Stack.Screen name="Productos" component={ProductsScreen} />
        <Stack.Screen name="Producto" component={ProductScreen} />
      </Stack.Navigator>
  )
}