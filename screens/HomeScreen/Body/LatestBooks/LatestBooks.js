import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const LatestBook = ({ latestBooks }) => {
  const { title, image } = latestBooks;
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

export default LatestBook;
