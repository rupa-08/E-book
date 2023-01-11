import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import Trending from "./Body/TrendingBooks";
import Latest from "./Body/LatestBooks";
import Discover from "./Body/DiscoverBooks";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <Header title="E-book" />
      <View className="ml-4">
        <Latest />
        <Trending />
        <Discover />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
