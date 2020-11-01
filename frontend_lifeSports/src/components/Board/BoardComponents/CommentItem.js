import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { removeComment } from '../../../lib/api/comment';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const CommentItem = ({ user, item }) => {
    const onPress = async () => {
        try {
            await removeComment(item._id);
        } catch(e) {
            console.log(e);
        }
    };

    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.author }
            >
                <Text>
                    { item.author }
                </Text>
                <View
                    style={ styles.date }
                >
                    <Text>
                        { item.commentDate }
                    </Text>
                </View>
                {
                    user._id === item.userId &&
                    <View
                        style={ styles.trash }
                    >
                        <TouchableOpacity
                            onPress={ onPress }
                        >
                            <Icon
                                name={ "ios-trash" }
                                size={ 30 }
                                color={ palette.blue[4] }
                            />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View
                style={ styles.content }
            >
                <Text>
                    { item.contents }
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        padding: 20
    },
    content: {
        width: '100%',
    },
    author: {
        flexDirection: 'row',
        width: '100%',
    },
    date: {
        marginLeft: 20,
    },
    trash: {
        marginLeft: 200,
    }
});

export default CommentItem;