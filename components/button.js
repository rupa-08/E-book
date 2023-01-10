import { View, Text } from "react-native";
import React from "react";

const Button = ({ buttonText, navigation, link }) => {
  return (
    <View className="bg-blue-300 h-12 w-1/3 rounded-md justify-center items-center mt-3">
      <View>
        <Text>{link}</Text>
        <Text
          className="font-bold text-gray-900"
          // onPress={() => navigation.navigate(`${link}`)}
        >
          {buttonText}
        </Text>
      </View>
    </View>
  );
};

export default Button;
