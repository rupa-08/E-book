import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import LibraryScreen from "../../screens/LibraryScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const BottomTabsNavigator = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // removes header
    });
  }, []);
  return (
    <BottomTabsNavigator.Navigator
      screenOptions={{
        activeTintColor: "orange",
      }}
    >
      <BottomTabsNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" type="material" color={color} size={size} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="person-outline"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;
