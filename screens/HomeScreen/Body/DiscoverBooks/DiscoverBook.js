import { View, Text } from "react-native";
import React from "react";

const DiscoverBook = ({ book }) => {
  const { title, image } = book;
  return (
    <View className="flex flex-row">
      <View className="bg-slate-50 w-40 rounded-lg h-64 mr-3 my-4 justify-between flex-col">
        {/* <Image source={BookImage} className="h-52 w-40 rounded-t-lg" /> */}
        <Text className="pb-3 font-semibold text-base px-2">{title}</Text>
      </View>
    </View>
  );
};

export default DiscoverBook;
