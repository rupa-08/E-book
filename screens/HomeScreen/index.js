import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import LatestBooks from "./Body/LatestBooks";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Header title="E-book" />
      <LatestBooks />
    </View>
  );
};

export default HomeScreen;
