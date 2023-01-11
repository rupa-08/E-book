import { View, Text, TextInput } from "react-native";
import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { useState } from "react";

const SearchBooks = () => {
  const [inputFocused, setInputFocused] = useState(false);
  //   const inputField = useRef(1);
  return (
    <View className="justify-center items-center bg-white border-b-2 border-gray-200">
      <View
        className="border-2 border-black h-11 rounded-full mb-3 flex-row items"
        style={{ width: "85%" }}
      >
        <Animatable.View
          className="justify-center"
          duration={400}
          animation={inputFocused ? "" : "fadeInLeft"}
        >
          <Icon className="px-2" name="search" type="material" />
        </Animatable.View>

        <TextInput
          textContentType="text"
          className=" border-none px-2"
          value=""
          placeholder="Search books"
          //   ref={inputField}
          onFocus={() => {
            setInputFocused(false);
          }}
          onBlur={() => {
            setInputFocused(true);
          }}
        />
      </View>
    </View>
  );
};

export default SearchBooks;
