import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function CartStackNavigator() {
  return (
      <Stack.Navigator
      initialRouteName='Carrito'>
        <Stack.Screen name="Carrito" component={CartScreen} />
        
      </Stack.Navigator>
  )
}