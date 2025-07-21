import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function CartStackNavigator() {
  return (
      <Stack.Navigator
      initialRouteName='Tu carrito'>
        <Stack.Screen name="Tu carrito" component={CartScreen} />
        
      </Stack.Navigator>
  )
}