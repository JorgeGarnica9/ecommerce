import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
  return (
      <Stack.Navigator
      initialRouteName='Ordenes'>
        <Stack.Screen name="Ordenes" component={OrdersScreen} />
        
      </Stack.Navigator>
  )
}