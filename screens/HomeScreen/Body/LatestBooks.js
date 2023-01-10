import { View, Text } from "react-native";
import React from "react";
import BookCard from "../../../components/BookCard";

const LatestBooks = () => {
  return (
    <View>
      <Text className="pl-3 font-bold text-lg">LatestBooks</Text>
      <View className="flex flex-row">
        <View className="bg-fuchsia-500 w-40 rounded-lg px-3 h-48 mx-3 my-4 justify-between flex-col">
          <Text>Image</Text>
          <Text className="pb-3 font-semibold text-base">BookCard</Text>
        </View>
      </View>
    </View>
  );
};

export default LatestBooks;
