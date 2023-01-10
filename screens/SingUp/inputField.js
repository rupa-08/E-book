import { View, Text, TextInput } from "react-native";
import React, { useNavigation, useLayoutEffect } from "react";
import Input from "../../components/input";

const InputField = () => {
  return (
    <View>
      <Input placeholder="Username" label="Username" />
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Password" label="Password" />
      <Input placeholder="Confirm Password" label="Confirm Password" />
    </View>
  );
};

export default InputField;
