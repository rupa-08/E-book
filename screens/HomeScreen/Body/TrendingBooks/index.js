import { View, Text, FlatList } from 'react-native';
import React from 'react';
import TendingBooks from './TendingBooks';

const Trending = () => {
  const trendingBooksList = [
    {
      title: 'Shatter Me',
      image:
        'https://m.media-amazon.com/images/I/81RxMMXUnFL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      image:
        'https://m.media-amazon.com/images/I/81W7uynFyWL._AC_UF894,1000_QL80_.jpg',
    },
    {
      title: 'Crooked Kingdom',
      image:
        'https://demork.cloudpub.in/Content/Uploadfiles/Title/97817/8062/2316/CoverPage/CoverLowResolution/9781780622316.png',
    },
  ];
  return (
    <View>
      <Text className='font-bold text-lg ml-5'>Trending Books</Text>
      <FlatList
        horizontal
        data={trendingBooksList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TendingBooks books={item} />}
      ></FlatList>
    </View>
  );
};

export default Trending;
