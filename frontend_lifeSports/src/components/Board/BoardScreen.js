import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import BoardHeader from './BoardComponents/BoardHeader';
import BoardNav from './BoardComponents/BoardNav';
import BoardBody from './BoardComponents/BoardBody';

/**
 *  2020 - 10 - 2 (Fri)
 *  Writer: 조봉준
 *  
 *  [ BoardScreen ]  
 *  
 *  - BoardHeader: This Component will mount SearchBar
 *  - BoardNav: BoardNav will mount WriteButton
 *  - BoardBody: This Component will mount Flatlist that is inserted Board items
 */
const BoardScreen = ({ navigation }) => {

  return(
    <ScrollView style={ styles.container }>
      <BoardHeader/>
      <BoardNav
        navigation={ navigation }
      />
      <BoardBody/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BoardScreen;