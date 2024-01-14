import React, { useLayoutEffect } from 'react';
import { View, ScrollView } from 'react-native';

import Header from '../../components/Header';
import Trending from './Body/TrendingBooks';
import Latest from './Body/LatestBooks';
import Discover from './Body/DiscoverBooks';

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Header
        title='E-BOOK'
        icon='menu'
        iconType='material'
        isLogin={true}
        style={{ color: '#966fd6' }}
      />
      <ScrollView className='mt-5'>
        <Latest />
        <Trending />
        <Discover />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
