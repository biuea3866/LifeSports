import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RentalScreenHeader from './RentalComponents/RentalScreenHeader';
import RentalScreenNav from './RentalComponents/RentalScreenNav';
import RentalScreenContent from './RentalComponents/RentalScreenContent';
import RentalScreenFooter from './RentalComponents/RentalScreenFooter';
import { RentalProvider } from './context/RentalContext';
import { useRoute } from '@react-navigation/native';
import { RentalConsumer } from './context/RentalContext';

const RentalScreen = ({ user }) => {
    const route = useRoute();

    return(
        <RentalProvider>
            <ScrollView
                style={ styles.container }
            >
                <RentalScreenHeader
                    map={ route.params.data }
                />
                <RentalScreenNav
                    map={ route.params.data }
                />
                <RentalScreenContent/>
                <RentalConsumer>
                    {
                        ({ state }) => (
                            <RentalScreenFooter 
                                user={ user } 
                                date={ state.date }
                                time={ state.time }
                                map={ route.params.data }
                            />
                        )
                    }
                </RentalConsumer>
            </ScrollView>   
        </RentalProvider> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default RentalScreen;