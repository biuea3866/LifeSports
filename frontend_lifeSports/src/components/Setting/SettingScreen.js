import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRentals } from '../../modules/rentals';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import SettingHeader from './SettingComponets/SettingHeader';
import SettingBody from './SettingComponets/SettingBody';
import SettingFooter from './SettingComponets/SettingFooter';
import SettingArticle from './SettingComponets/SettingArticle';

const SettingScreen = ({ user }) => {
  const dispatch = useDispatch();
  const { rentals, error, loading } = useSelector(({ rentals, loading }) => ({
      rentals: rentals.rentals,
      error: rentals.error,
      loading: loading['rental/LIST_RENTALS']
  }));

  useEffect( () => {
      dispatch(listRentals(user._id))
  }, [dispatch]);

  console.log(rentals)
  return(
    <ScrollView 
      style={ styles.container }
    >
      <SettingHeader
        user={ user }
      />
      <SettingBody
        user={ user }
        rentals={ rentals }
      />
      <SettingArticle
        user={ user }
        rentals={ rentals }
      />
      <SettingFooter
        user={ user }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  }
});

export default SettingScreen;