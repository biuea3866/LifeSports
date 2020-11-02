import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CancelCard from './CancelCard';
import { useRoute } from '@react-navigation/native';

const SettingCancel = () => {
    const route = useRoute();

    return(
        <ScrollView
            style={ styles.container }
        >
            {
                route.params.rentals ?
                route.params.rentals.map(
                    (item, i) => {
                        return(
                            <CancelCard 
                                key={ i }
                                item={ item }
                            />
                        )
                    }
                )
                :
                console.log("Data Loading..")
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SettingCancel;