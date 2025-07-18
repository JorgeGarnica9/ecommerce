import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "../auth/AuthStackNavigator";
import TabNavigator from "../tab/TabNavigator";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function MainNavigator() {
    const userEmail = useSelector((state) => state.userReducer.userEmail);

    return (
        <NavigationContainer>  
            {userEmail ? <TabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )}