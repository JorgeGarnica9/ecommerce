import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartStackNavigator, OrdersStackNavigator, ShopStackNavigator } from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar}}>
            <Tab.Screen 
            name='Shop' 
            component={ShopStackNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                )
            }}/>
            <Tab.Screen 
            name='Cart' 
            component={CartStackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cart" size={size} color={color} />
                )
            }} />
            <Tab.Screen 
            name='Orders' 
            component={OrdersStackNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});