import { View, Text } from "react-native";
import React from "react";

const Library = ({ books }) => {
  const { title, image } = books;
  return (
    <View className="flex flex-row ml-4">
      <View
        className="bg-slate-50 rounded-lg h-16 mb-3 justify-center flex-col"
        style={{ width: "95%" }}
      >
        {/* <Image source={BookImage} className="h-52 w-40 rounded-t-lg" /> */}
        <Text className="pb-3 font-semibold text-base px-2">{title}</Text>
      </View>
    </View>
  );
};

export default Library;
