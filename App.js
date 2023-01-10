import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import SignUp from "./screens/SingUp";
import SignIn from "./screens/SignIn";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
