import { View, Text } from 'react-native';
import React from 'react';

const BooksGenre = ({ genres }) => {
  const { genre } = genres;
  return (
    <View className='bg-indigo-200 w-40 rounded-lg h-20 mb-2 mr-3 flex justify-center items-center'>
      <Text className='pb-3 font-semibold text-base px-2 text break-words text-center'>
        {genre}
      </Text>
    </View>
  );
};

export default BooksGenre;
