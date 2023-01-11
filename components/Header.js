import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Header = ({ style, title, icon, iconType, bgColor, textColor }) => {
  return (
    <View>
      <View
        className="h-20 pt-4 pl-4 flex-row items-center"
        style={{ backgroundColor: bgColor }}
      >
        <View>
          <Icon iconStyle={style} name={icon} type={iconType} />
        </View>
        <Text
          className="text-white font-semibold text-lg"
          style={{ color: textColor }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
