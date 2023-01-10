import { View, Text, TextInput } from "react-native";
import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { useState } from "react";

const SearchBar = () => {
  const [inputFocused, setInputFocused] = useState(false);
  //   const inputField = useRef(1);
  return (
    <View className="justify-center items-center">
      <View className="border-2 border-black h-12 rounded-full my-3 px-6 flex-row justify-between items w-80">
        <TextInput
          textContentType="text"
          className=" border-none "
          value=""
          placeholder="Search books by title"
          //   ref={inputField}
          onFocus={() => {
            setInputFocused(false);
          }}
          onBlur={() => {
            setInputFocused(true);
          }}
        />
        <Animatable.View
          className="justify-center"
          duration={400}
          animation={inputFocused ? "" : "fadeInLeft"}
        >
          <Icon name="search" type="material" />
        </Animatable.View>
      </View>
    </View>
  );
};

export default SearchBar;
