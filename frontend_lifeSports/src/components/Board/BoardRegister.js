import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RegisterTitle from './BoardComponents/RegisterTitle';
import RegisterNav from './BoardComponents/RegisterNav';
import RegisterContent from './BoardComponents/RegisterContent';
const BoardRegister = ({ user }) => {

    return(
        <ScrollView
            style={ styles.container }
        >
            <RegisterTitle
                user={ user }
            />
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