import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '../../screens';
import { colors } from '../../global/colors';

const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
  return (
      <Stack.Navigator
      initialRouteName='Ordenes'
      screenOptions={
                    {
                      headerShown: true,
                      headerTitleAlign: 'center',
                      headerStyle: { backgroundColor: colors.lightGray },
                      headerTintColor: colors.darkGray,
                      headerTitleStyle: { fontWeight: 'bold' },
                      
                    }}>
        <Stack.Screen name="Ordenes" component={OrdersScreen} />
        
      </Stack.Navigator>
  )
}