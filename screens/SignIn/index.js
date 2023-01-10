import { View, Text, Button } from "react-native";
import React, { useNavigation, useLayoutEffect } from "react";
import Header from "../../components/Header";
// import Button from "../../components/button";
import InputField from "./inputField";

const SignIn = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // removes header
    });
  }, []);
  return (
    <View>
      <Header title="Sign In" />
      <View className="items-center justify-center">
        <InputField />
        {/* <Button buttonText="Sign In" link="Home" /> */}
        <Button
          className="bg-blue-300 h-12 w-1/3 rounded-md justify-center items-center"
          title="Sign Up"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default SignIn;
