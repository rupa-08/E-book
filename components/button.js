import { View, Text } from "react-native";
import React from "react";

const Button = ({ buttonText, navigation, link }) => {
  return (
    <View className="bg-indigo-300 h-12 w-1/3 rounded-full justify-center items-center mt-7">
      <View>
        {/* <Text>{link}</Text> */}
        <Text
          className="font-bold text-slate-100"
          // onPress={() => navigation.navigate(`${link}`)}
        >
          {buttonText}
        </Text>
      </View>
    </View>
  );
};

export default Button;
