import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import SettingHeader from './SettingComponets/SettingHeader';
import SettingBody from './SettingComponets/SettingBody';
import SettingFooter from './SettingComponets/SettingFooter';
import StyledLine from '../Common/StyledLine';

const SettingScreen = ({ navigation, route }) => {
  const [user, setUser] = useState('');

  useEffect( () => {
    setUser(route.params.user);  
  }, [user]);

  console.log(user);

  return(
    <ScrollView 
      style={ styles.container }
    >
      <SettingHeader
        user={ user }
      />
      {/* <StyledLine/> */}
      <SettingBody/>
      <SettingFooter/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SettingScreen;