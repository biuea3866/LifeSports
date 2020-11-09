import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import JoinForm from './JoinForm';

const JoinScreen = ({ navigation }) => {
  return(
    <ScrollView 
      style={ styles.container }
    >
      <JoinForm
        navigation={ navigation }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default JoinScreen;