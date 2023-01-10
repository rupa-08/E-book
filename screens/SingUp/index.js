import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import Button from "../../components/button";
import InputField from "./inputField";

const SignUp = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // removes header
    });
  }, []);
  return (
    <View>
      <Header title="Sign Up" />
      <View className="items-center justify-center">
        <InputField />

        <Text>Already have account?</Text>
        <Text onPress={() => navigation.navigate("SignInScreen")}>Login</Text>
        {/* <Button
          className="bg-blue-300 h-12 w-1/3 rounded-md justify-center items-center"
          title="Sign Up"
        /> */}

        <Button buttonText="Sign Up" />
      </View>
    </View>
  );
};

export default SignUp;
