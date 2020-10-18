import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import palette from '../../styles/palette';
import Homeheader from './HomeComponents/HomeHeader';
import HomeCategoryNav from './HomeComponents/HomeCategoryNav';

const HomeScreen = () => {
  return(
    <ScrollView 
      style={ styles.container }
    >
      <Homeheader/>
      <HomeCategoryNav/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white[0]
  },
});
export default HomeScreen;