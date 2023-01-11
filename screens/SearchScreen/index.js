import { View, Text, ScrollView } from "react-native";
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
    <ScrollView>
      <Header title="Search" bgColor="white" textColor="black" />
      <SearchBooks />
      <FilterBooks />
    </ScrollView>
  );
};

export default SearchScreen;
