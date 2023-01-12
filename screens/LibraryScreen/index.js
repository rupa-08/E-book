import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Library from "./Library";
import Header from "../../components/Header";

const LibraryScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const myLibrary = [
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
      <Header title="My Library" />
      <FlatList
        data={myLibrary}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Library books={item} />}
      />
    </View>
  );
};

export default LibraryScreen;
