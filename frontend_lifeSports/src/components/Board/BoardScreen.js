import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import BoardHeader from './BoardComponents/BoardHeader';
import BoardNav from './BoardComponents/BoardNav';
import BoardBody from './BoardComponents/BoardBody';
import { useNavigation } from '@react-navigation/native';
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
const BoardScreen = ({ user }) => {
  const navigation = useNavigation();
  return(
    <View style={ styles.container }>
      <BoardHeader/>
      <BoardNav
        navigation={ navigation }
      />
      <BoardBody
        user={ user }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BoardScreen;