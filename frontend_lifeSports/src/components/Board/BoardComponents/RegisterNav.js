import React from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../../modules/boards';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import palette from '../../../styles/palette';

const RegisterNav = () => {
    const dispatch = useDispatch();
    const boardTypeItems = [
        {
            label: '함께해요', value: "together"
        },
        {
            label: '도와주세요', value: "information"
        }
    ]
    const peopleItems = [
        { label: '1', value: "1" },
        { label: '2', value: "2" },
        { label: '3', value: "3" },
        { label: '4', value: "4" },
        { label: '5', value: "5" },
        { label: '6', value: "6" },
        { label: '7', value: "7" },
        { label: '8', value: "8" },
        { label: '9', value: "9" },
        { label: '10', value: "10" },
        { label: '11', value: "11" },
        { label: '12', value: "12" },
        { label: '13', value: "13" },
        { label: '14', value: "14" },
        { label: '15', value: "15" },
        { label: '16', value: "16" },
        { label: '17', value: "17" },
        { label: '18', value: "18" },
        { label: '19', value: "19" },
        { label: '20', value: "20" },
    ];
    const onChangeTypeItem = item => {
        dispatch(
            changeField({
                key: 'boardType',
                value: item.value
            })
        )
    };
    const onChangePeopleItem = item => {
        dispatch(
            changeField({
                key: 'peopleRestrict',
                value: item.value
            })
        )
    }
    const onChange = e => {
        const value = e.nativeEvent.text;
           
        dispatch(
            changeField({
                key: 'boardTitle',
                value: value
            })
        );
    };

    return(
        <View
            style={ styles.container }
        >
            <DropDownPicker
                placeholder={ '게시판 종류' }
                items={ boardTypeItems }
                defaultIndex={ 0 }
                containerStyle={ styles.dropDown }
                onChangeItem={ onChangeTypeItem }
            />
            <Text
                style={ styles.titleLabel }
            >
                인원
            </Text>
            <DropDownPicker
                placeholder={ '정원 수를 정해주세요' }
                items={ peopleItems }
                defaultIndex={ 0 }
                containerStyle={ styles.dropDown }
                onChangeItem={ onChangePeopleItem }
            />
            <Text
                style={ styles.titleLabel }
            >
                제목
            </Text>
            <TextInput
                style={ styles.titleInput }
                placeholder="제목을 입력해주세요"
                onChange={ onChange }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 420,
        height: 320,
        justifyContent: 'flex-start',
        backgroundColor: palette.white[0]
    },
    titleLabel: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    titleInput: {
        width: 370,
        height: 40,
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: palette.gray[3],
        color: palette.black[0]
    },
    dropDown: {
        width: 200,
        height: 50,
        marginTop: 20,
        marginLeft: 20
    },
    alert: {
        paddingTop: 20,
        paddingLeft: 20
    }
});

export default RegisterNav;