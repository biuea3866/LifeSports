import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import palette from '../../styles/palette';
import StyledButton from '../Common/StyledButton';
import StyledTextInput from '../Common/StyledInput';
import ErrorMessage from '../Common/ErrorMessage';
import { check } from '../../modules/user';

const LoginForm = ({ navigation }) => {

/**
 *  2020 - 09 - 23 (Wed)
 *  Writer: 조봉준
 *  
 *  [ LoginForm ]  
 *  
 *  1. Using react hooks and auth module, execute login
 *  2. and call login method
 */
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user, userInfo } = useSelector(({ auth, user, userInfo }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
        userInfo: auth.userInfo
    }));

    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;

        dispatch(
            changeField({
                form: 'login',
                key: inputAccessoryViewID,
                value
            })
        );
    };

    const onPress = e => {
        e.preventDefault();

        const { email, password } = form;
        
        dispatch(login({ email, password }));

        if(authError) {
            return;
        }

        if(auth) {
            navigation.navigate(
                'Tab', { 
                    name: 'Tab',
                    user: user._id, 
                }
            )
        }
    };

    

    useEffect( () => {
        dispatch(initializeForm('login'));
    }, [dispatch]);
    
    useEffect( () => {
        if(authError) {
            console.log("Alert Error!");
            console.log(authError);
            setError('Fail Login! \n Please check your ID or PW again ');

            return;
        }
        
        if(auth) {
            console.log("Success Login!");

            dispatch(check());
        }
    }, [auth, authError, dispatch])

    return(
        <View style={styles.loginForm}>
            <StyledTextInput
                inputAccessoryViewID="email"
                placeholder="Email.."
                placeholderTextColor={ palette.gray[3] }
                onChange={ onChange }
                value={ form.email }
            />
            <StyledTextInput
                inputAccessoryViewID="password"
                placeholder="Password.."
                placeholderTextColor={ palette.gray[3] }
                secureTextEntry={ true }
                onChange={ onChange }
                value={ form.password }
            />
            { error && <ErrorMessage text={ error } /> }
            <StyledButton 
                onPress={ onPress }
                title="Login"
            />
            <StyledButton
                onPress={
                    () => {
                        navigation.navigate(
                            'Join', {
                                name: 'Join'
                            }
                        )
                    }
                }
                title="Join"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleArea: {
        flex: 0.2,
        justifyContent: 'center',
        paddingHorizontal: 10,
        fontSize: 30,
    }
});

export default LoginForm;