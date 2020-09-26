import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

const HomeScreen = () => {
  return(
    <ScrollView 
      style={ styles.container }
    >
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;