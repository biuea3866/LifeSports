import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import palette from '../../../styles/palette';

const BoardMapDetailContentRuleText = () => {
    return(
        <View
            style={ styles.RuleInfoArea }
        >
            <Text
                style={ styles.RuleInfoTitle}
            >
                이용안내
            </Text>
            <Text>
                기본 이용 시간 : 3시간
                { '\n' }
                기본 이용 요금 : 3시간 기준 100,000원 
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    RuleInfoArea: {
        width: '100%',
        height: 100,
        padding: 20,
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    RuleInfoTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default BoardMapDetailContentRuleText;