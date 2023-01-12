import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const UserProfile = () => {
  return (
    <View className="">
      <View className="bg-indigo-600 h-60 rounded-br-full justify-center items-center">
        {/* <View>
          <Icon className="-mt-7" name="arrow-back" type="material" />
        </View> */}
        <View>
          <Text className="text-3xl text-indigo-100 ">UserName</Text>
          <View className="border-2 border-blue-400 rounded-full h-40 relative">
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
