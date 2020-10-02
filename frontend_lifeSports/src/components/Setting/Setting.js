import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import SettingHeader from './SettingComponets/SettingHeader';
import SettingBody from './SettingComponets/SettingBody';
import SettingFooter from './SettingComponets/SettingFooter';
import SettingArticle from './SettingComponets/SettingArticle';

const SettingScreen = ({ user }) => {
  return(
    <ScrollView 
      style={ styles.container }
    >
      <SettingHeader
        user={ user }
      />
      <SettingBody/>
      <SettingArticle/>
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