import { View, Text, FlatList } from 'react-native';
import React from 'react';
import LatestBook from './LatestBooks';

const Latest = () => {
  const latestBooksList = [
    {
      title: 'Crack the code',
      image:
        'https://m.media-amazon.com/images/I/61mtUorPZbL._AC_UF1000,1000_QL80_.jpg',
    },

    {
      title: 'The courage to be disliked',
      image:
        'https://miro.medium.com/v2/resize:fit:1200/1*m7Ef6BCO0Ye7H2wLhfQBSg.jpeg',
    },
    {
      title: 'The wind-up bird chronicle',
      image:
        'https://luminousvibes.files.wordpress.com/2021/03/murak.jpg?w=189',
    },
  ];
  return (
    <View className='mb-3'>
      <Text className='font-bold text-lg ml-5'>Latest Books</Text>
      <FlatList
        data={latestBooksList}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LatestBook latestBooks={item} />}
      ></FlatList>
    </View>
  );
};

export default Latest;
