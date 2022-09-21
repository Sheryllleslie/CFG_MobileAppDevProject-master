import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ResetPassword from '../screens/ResetPassword';
import NewPassword from '../screens/NewPassword';
import BottomNavigation from '../screens/BottomNavigation';


const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Login'} >
            
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Reset Password" component={ResetPassword} />
                <Stack.Screen name="New Password" component={NewPassword} />
                <Stack.Screen name="Main" component={BottomNavigation} />
                
                
            </Stack.Navigator>
       
    );
};

export default StackNavigation;

