import { View, Text, FlatList } from "react-native";
import React from "react";
import TendingBooks from "./TendingBooks";

const Trending = () => {
  const trendingBooksList = [
    {
      title: "Crack the code",
      image: "Image",
    },
    {
      title: "Harry Potter",
      image: "Image",
    },
    {
      title: "Cruel Prince",
      image: "Image",
    },
    {
      title: "Kafka",
      image: "Image",
    },
    {
      title: "Norweigian Wood",
      image: "Image",
    },
    {
      title: "After Dark",
      image: "Image",
    },
    {
      title: "The wind-up bird chronicle",
      image: "Image",
    },
  ];
  return (
    <View>
      <Text className="font-bold text-lg">Trending </Text>
      <FlatList
        horizontal
        data={trendingBooksList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TendingBooks books={item} />}
      ></FlatList>
    </View>
  );
};

export default Trending;
