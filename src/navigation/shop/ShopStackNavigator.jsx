import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen } from '../../screens';
import { useSelector } from 'react-redux';
import { colors } from '../../global/colors';

const Stack = createNativeStackNavigator();

export default function ShopStackNavigator() {
  const category = useSelector((state) => state.shopReducer.categorySelected);

  return (
      <Stack.Navigator
      initialRouteName='Categorías'
      screenOptions={
        {
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.lightGray },
          headerTintColor: colors.darkGray,
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right',
        }
      }>
        <Stack.Screen name="Categorías"  component={CategoriesScreen} />
        <Stack.Screen name="Productos" component={ProductsScreen} />
        <Stack.Screen name="Producto" component={ProductScreen} />
      </Stack.Navigator>
  )
}