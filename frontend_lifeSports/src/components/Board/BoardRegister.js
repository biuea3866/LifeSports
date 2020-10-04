import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RegisterTitle from './BoardComponents/RegisterTitle';
import RegisterNav from './BoardComponents/RegisterNav';
import RegisterContent from './BoardComponents/RegisterContent';

const BoardRegister = () => {
    return(
        <ScrollView
            style={ styles.container }
        >
            <RegisterTitle/>
            <RegisterNav/>
            <RegisterContent/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BoardRegister;