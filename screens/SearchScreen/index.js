import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import SearchBooks from "./SearchBooks";
import FilterBooks from "./FilterBooks";
import Header from "../../components/Header";

const SearchScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Header title="Search" bgColor="white" textColor="black" />
      <SearchBooks />
      <FilterBooks />
    </View>
  );
};

export default SearchScreen;
