import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "./Body/SearchBar";
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
      {/* Body */}
      <SearchBar />
      <LatestBooks />
      <Footer />
    </View>
  );
};

export default HomeScreen;
