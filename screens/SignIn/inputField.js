import { View, Text } from "react-native";
import React from "react";
import Input from "../../components/input";

const InputField = () => {
  return (
    <View>
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Password" label="Password" />
    </View>
  );
};

export default InputField;
