import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ placeholder, label }) => {
  const [text, changedText] = useState();
  return (
    <View className="mt-3">
      <Text>{label}</Text>
      <TextInput
        textContentType="text"
        className=" border-2 w-72 h-12 rounded-md my-3 px-6"
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
