import React from "react";
import {createStackNavigator} from '@react-navigation-stack'

import HomeScreen from "../screens/homescreen/HomeScreen";
import Login from "../screens/auth_screen.js/Login";
import SignUp from "../screens/auth_screen.js/SignUp";
import DetailsScreen from "../screens/auth_screen.js/details_screen/DetailsScreen";
import CartScreen from "../screens/cart_screen/CartScreen";
import CheckOut from "../screens/checkout/CheckOut";
import OrderScreen from "../screens/order_screen/OrderScreen"
const Stack = createStackNavigator();

export default function myStack() {
    return <Stack.Navigator>
        <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
        />
         <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
        />
         <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
        />
         <Stack.Screen
        name="DetailsScreen"
        options={{headerShown: false}}
        component={DetailsScreen}
        />
         <Stack.Screen
        name="CartScreen"
        options={{headerShown: false}}
        component={CartScreen}
        />
         <Stack.Screen
        name="Checkout"
        options={{headerShown: false}}
        component={CheckOut}
        />
         <Stack.Screen
        name="OrderScreen"
        options={{headerShown: false}}
        component={OrderScreen}
        />
    </Stack.Navigator>
}
