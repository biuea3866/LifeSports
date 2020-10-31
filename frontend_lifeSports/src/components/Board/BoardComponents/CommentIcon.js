import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const CommentIcon = () => {
    return(
        <Icon
            name={ "ios-paper-plane-outline" }
            size={ 30 }
            color={ palette.blue[4] }
        />
    )
};

export default CommentIcon;