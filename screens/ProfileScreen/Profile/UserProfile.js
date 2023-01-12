import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Button from "../../../components/button";

const UserProfile = () => {
  return (
    <View className="">
      <View className="bg-indigo-300 h-60 rounded-br-full justify-center items-center">
        {/* <View>
          <Icon className="-mt-7" name="arrow-back" type="material" />
        </View> */}
        <View>
          <Text className="text-3xl text-indigo-100 ">UserName</Text>
          {/* <View className="border-2 border-blue-400 rounded-full h-40 relative">
            <Text>+</Text>
          </View> */}
        </View>
      </View>
      {/* Body */}
      <View>
        <View className="flex-row h-12 mt-4 pl-8 justify-start border-b-2 border-gray-200">
          <Icon
            name="person-outline"
            type="material"
            iconStyle={{ color: "#5567d0" }}
          />
          <Text className="text-lg text-gray-400 pl-7">Harry</Text>
        </View>
        {/* REPEATED  */}
        <View>
          <View className="flex-row h-12 mt-4 pl-8 justify-start border-b-2 border-gray-200">
            <Icon
              name="event-note"
              type="material"
              iconStyle={{ color: "#5567d0" }}
            />
            <Text className="text-lg text-gray-400 pl-7">2000/10/10</Text>
          </View>
          <View className="flex-row h-12 mt-4 pl-8 justify-start border-b-2 border-gray-200">
            <Icon
              name="mail-outline"
              type="material"
              iconStyle={{ color: "#5567d0" }}
            />
            <Text className="text-lg text-gray-400 pl-7">harry@gmail.com</Text>
          </View>
          <View className="flex-row h-12 mt-4 pl-8 pr-8 justify-between border-b-2 border-gray-200">
            <View className="justify-start flex-row">
              <Icon
                name="visibility"
                type="material"
                iconStyle={{ color: "#5567d0" }}
              />
              <Text className="text-lg text-gray-400 pl-7">Password</Text>
            </View>
            <Icon
              name="cached"
              type="material"
              iconStyle={{ color: "#5567d0" }}
            />
          </View>
        </View>
      </View>
      {/* Button */}
      <View className="items-center">
        <Button buttonText="Edit" />
      </View>
    </View>
  );
};

export default UserProfile;
