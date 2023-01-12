import { View, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import InputField from "./inputField";

const SignIn = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // removes header
    });
  }, []);
  return (
    <View>
      <Header
        title="Sign In"
        icon="arrow-back"
        iconType="material"
        style={{ color: "black" }}
      />
      <View className="items-center justify-center">
        <InputField />
        <Button
          className="bg-blue-300 h-12 w-1/3 rounded-md justify-center items-center"
          title="Sign In"
          onPress={() => navigation.navigate("BottomTabs")}
        />
      </View>
    </View>
  );
};

export default SignIn;
