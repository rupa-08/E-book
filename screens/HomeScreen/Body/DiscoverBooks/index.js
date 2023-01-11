import { View, Text, FlatList } from "react-native";
import React from "react";
import DiscoverBook from "./DiscoverBook";

const Discover = () => {
  const discoverBooks = [
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
      <Text className="font-bold text-lg">Discover something new</Text>
      <FlatList
        data={discoverBooks}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DiscoverBook book={item} />}
      />
    </View>
  );
};

export default Discover;
