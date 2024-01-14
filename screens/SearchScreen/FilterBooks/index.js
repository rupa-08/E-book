import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import BooksGenre from './BooksGenre';

const FilterBooks = () => {
  const booksGenreList = [
    {
      genre: 'Fantasy',
    },
    {
      genre: 'Horror',
    },
    {
      genre: 'Mystery',
    },
    {
      genre: 'Science Fiction',
    },
    {
      genre: 'Adventure',
    },
    {
      genre: 'Historical Fiction',
    },
    {
      genre: 'Fantasy',
    },
    {
      genre: 'Horror',
    },
    {
      genre: 'Mystery',
    },
    {
      genre: 'Science Fiction',
    },
    {
      genre: 'Adventure',
    },
    {
      genre: 'Historical Fiction',
    },
    {
      genre: 'Historical Fiction',
    },
    {
      genre: 'Historical Fiction',
    },
    {
      genre: 'Historical Fiction',
    },
  ];
  return (
    <SafeAreaView className='bg-white '>
      <View className='ml-6'>
        <Text className='text-lg font-bold mt-6 mb-4'>Browse tags</Text>
        <FlatList
          data={booksGenreList}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BooksGenre genres={item} />}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default FilterBooks;
