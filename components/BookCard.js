import { View, Text } from "react-native";
import React from "react";

const BookCard = ({ Image }) => {
  return (
    <View className="bg-fuchsia-500 w-40 rounded-lg px-3 h-48 mx-3 my-4 justify-between flex-col">
      <Text className="pb-3 font-semibold text-base">BookCard</Text>
    </View>
  );
};

export default BookCard;
