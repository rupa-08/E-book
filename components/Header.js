import React from 'react';
import { View, Text, Image } from 'react-native';

import { Icon } from 'react-native-elements';

const Header = ({ style, title, icon, iconType, bgColor, isLogin = false }) => {
  return (
    <View
      className='flex flex-row justify-between pr-5 shadow-xl bg-white'
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
        elevation: 10,
      }}
    >
      <View
        className='h-20 pt-4 pl-4 flex-row items-center mt-4'
        style={{ backgroundColor: bgColor }}
      >
        {icon && (
          <View className='mr-5'>
            <Icon iconStyle={style} name={icon} type={iconType} />
          </View>
        )}

        <Text className='text-2xl text-[#966fd6] font-bold'>{title}</Text>
      </View>
      {isLogin && (
        <Image
          source={{
            uri: 'https://images.megapixl.com/5824/58249368.jpg',
          }}
          className='w-11 h-11 rounded-full mt-10'
        />
      )}
    </View>
  );
};

export default Header;
