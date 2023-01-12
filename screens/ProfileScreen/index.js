import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import UserProfile from "./Profile/UserProfile";

const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView>
      {/* <Header title="Profile" /> */}
      <UserProfile />
    </SafeAreaView>
  );
};

export default ProfileScreen;
