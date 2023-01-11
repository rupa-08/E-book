import { View, Text, ScrollView } from "react-native";
import React from "react";

const BooksGenre = ({ genres }) => {
  const { genre } = genres;
  return (
    <ScrollView>
      <View className="bg-indigo-200 w-40 rounded-lg h-20 mb-2 ">
        <Text className="pb-3 font-semibold text-base px-2 text break-words">
          {genre}
        </Text>
      </View>
    </ScrollView>
  );
};

export default BooksGenre;
