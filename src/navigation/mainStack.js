import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash/Splash';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Questions from '../screens/QuestionsScreen/Questions';
import WinnerUpdate from '../screens/WinnerUpdates/WinnerUpdate';
import Login from '../screens/Login/Login';
import Register from '../screens/RegisterScreen/Register';


const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Question" component={Questions} />
                    <Stack.Screen name="WinnerUpdates" component={WinnerUpdate} />

                </Stack.Navigator></NavigationContainer>
        </View>
    );
}
export default MainStack;
