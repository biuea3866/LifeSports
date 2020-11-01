import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listComments } from '../../../modules/comments';
import { StyleSheet, ScrollView ,View, Text } from 'react-native';
import CommentItem from './CommentItem';

const BoardDetailComment = ({ user, board }) => {
    const dispatch = useDispatch();
    const { comments, error, loading } = useSelector(({ comments, loading }) => ({
        comments: comments.comments,
        error: comments.error,
        loading: loading['comment/LIST_COMMENTS']
    }));

    useEffect( () => {
        dispatch(listComments(board._id))
    }, [dispatch, comments]);

    return(
        <ScrollView
            style={ styles.comment }
        >
            {
                comments ?
                comments.map(
                    (item, i) => {
                        return(
                            <CommentItem
                                key={ i }
                                user={ user }
                                item={ item }
                            />
                        )
                    }
                )
                :
                console.log("Comment Loading..")
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '50%',
        bottom: 80,
    }
});

export default BoardDetailComment;