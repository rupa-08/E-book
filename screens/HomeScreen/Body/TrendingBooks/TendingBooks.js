import React from 'react';
import { View, Text, Image } from 'react-native';

const TendingBooks = ({ books }) => {
  const { title, image } = books;
  return (
    <View className='flex flex-row'>
      <View className='bg-slate-50 w-40 rounded-lg h-72 ml-5 my-4 justify-between flex-col'>
        <Image
          source={{ uri: image }}
          className='h-52 w-40 rounded-t-lg object-contain'
        />
        <Text className='pb-3 font-semibold text-base p-4' numberOfLines={2}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default TendingBooks;
