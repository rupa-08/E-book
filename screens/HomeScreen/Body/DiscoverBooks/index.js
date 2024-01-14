import { View, Text, FlatList } from 'react-native';
import React from 'react';
import DiscoverBook from './DiscoverBook';

const Discover = () => {
  const discoverBooks = [
    {
      title: 'Norweigian Wood',
      image: 'https://media.thuprai.com/products/9780099448822.jpg',
    },

    {
      title: 'Cruel Prince',
      image:
        'https://blackholly.com/wp-content/uploads/2017/03/CruelPrince_SMALL-800x1200.jpeg',
    },
    {
      title: 'Kafka',
      image:
        'https://grey.com.np/cdn/shop/products/Kafka-on-the-shore.jpg?v=1669978978',
    },
  ];
  return (
    <View>
      <Text className='font-bold text-lg ml-5'>Discover something new</Text>
      <FlatList
        data={discoverBooks}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DiscoverBook book={item} />}
      />
    </View>
  );
};

export default Discover;
