import { View, Text, FlatList } from "react-native";
import React from "react";
import LatestBook from "./LatestBooks";

const Latest = () => {
  const latestBooksList = [
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
      <Text className="font-bold text-lg">Latest</Text>
      <FlatList
        data={latestBooksList}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LatestBook latestBooks={item} />}
      ></FlatList>
    </View>
  );
};

export default Latest;
