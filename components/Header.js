import { View, Text } from "react-native";
import React from "react";
import Button from "./button";

const Header = ({ title, icon }) => {
  return (
    <View>
      <View className="bg-blue-300 h-20 pt-4">
        {/* <Icon /> */}
        <Text className="text-white font-semibold text-lg mt-4 pl-6">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
