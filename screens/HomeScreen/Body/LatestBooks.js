import { View, Text, Image } from "react-native";
import React from "react";
// import { BookImage } from "../../images";

const LatestBooks = () => {
  return (
    <View>
      <Text className="pl-3 font-bold text-lg">LatestBooks</Text>
      <View className="flex flex-row">
        <View className="bg-slate-50 w-40 rounded-lg h-64 mx-3 my-4 justify-between flex-col">
          {/* <Image source={BookImage} className="h-52 w-40 rounded-t-lg" /> */}
          <Text className="pb-3 font-semibold text-base px-2">
            Crack the code
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LatestBooks;
