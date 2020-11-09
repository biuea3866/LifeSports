import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import StyledButton from '../Common/StyledButton';
import StyledTextInput from '../Common/StyledInput';
import StyledSocialInput from '../Common/StyledSocialInput';
import ErrorMessage from '../Common/ErrorMessage';
import palette from '../../styles/palette';
import Postcode from 'react-native-daum-postcode';

const JoinForm = ({ navigation }) => {
    const [data, setData] = useState("addr");
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user,
    }));

    const handleDaum = e => {
        setVisible(true);
    };

    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;
        
        dispatch(
            changeField({
                form: 'register',
                key: inputAccessoryViewID,
                value
            })
        );
    };

    const onPress = e => {
        e.preventDefault();

        const { 
            email, password, passwordConfirm,
            userName, nickName,
            socialNumberPrefix, socialNumberSuffix, 
            addr, phoneNumber, point
        } = form;

        if(
            [
                email, password, passwordConfirm,
                userName, nickName, 
                socialNumberPrefix, socialNumberSuffix, 
                addr, phoneNumber
            ].includes('')
        ) {
            setError('Please Enter all blanks ');
            
            alert(error);

            return; 
        }

        if(password !== passwordConfirm) {
            setError('Password do not match');
            alert(error);
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));

            return;
        }

        dispatch(register({ 
            email, password,
            userName, nickName,
            socialNumberPrefix, socialNumberSuffix, 
            addr, phoneNumber, point
        }));

        if(auth) {
            navigation.navigate(
                'Login', { 
                    name: 'Login',
                }
            )
        }
    };

    useEffect( () => {
        dispatch(initializeForm('register'));
    }, [dispatch]);
    
    useEffect( () => {
        const inputAccessoryViewID = "addr";
        const value = data.address;

        dispatch(
            changeField({
                form: 'register',
                key: inputAccessoryViewID,
                value
            })
        )
    }, [data.address]);

    changeField({
        form: 'register',
        key: 'point',
        value: 10000000,
    });

    useEffect( () => {
        if(authError) {
            if(authError.response.status === 409) {
                setError("The Email already exists");

                return;
            }

            console.log("Alert Error!");
            setError('Fail Register!');

            return;
        }
        
        if(auth) {
            console.log("Success Register!");

            dispatch(check());
        }
    }, [auth, authError, dispatch])

    useEffect( () => {
        if(user) {
            console.log("Check API Success");
            console.log(user);
        }
    }, [user]);

    return(
        <View
            style={ styles.container }
        >
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
            <StyledTextInput
                inputAccessoryViewID="passwordConfirm"
                placeholder="passwordConfirm.."
                placeholderTextColor={ palette.gray[3] }
                secureTextEntry={ true }
                onChange={ onChange }
                value={ form.passwordConfirm }
            />
            <StyledTextInput
                inputAccessoryViewID="userName"
                placeholder="name.."
                placeholderTextColor={ palette.gray[3] }
                onChange={ onChange }
                value={ form.userName }
            />
            <StyledTextInput
                inputAccessoryViewID="nickName"
                placeholder="nickName.."
                placeholderTextColor={ palette.gray[3] }
                onChange={ onChange }
                value={ form.nickName }
            />
            <View
                style={ styles.socialForm }
            >
                <StyledSocialInput
                    inputAccessoryViewID="socialNumberPrefix"
                    onChange={ onChange }
                    value={ form.socialNumberPrefix }
                />
                <Text>
                    ㅡ
                </Text>
                <StyledSocialInput
                    inputAccessoryViewID="socialNumberSuffix"
                    onChange={ onChange }
                    value={ form.socialNumberSuffix }
                />
            </View>
            <View
                style={{ flex: 1 }}
            >
                <StyledTextInput
                    inputAccessoryViewID="addr"
                    placeholderTextColor={ palette.black[0] }
                    onChange={
                        onChange 
                    }
                    value={ 
                        data === "addr" ?
                        "addr" :
                        data.address
                    }
                    editable={ false }
                />
                <Button 
                    title="Daum"
                    onPress={ handleDaum }
                />
                {
                    visible && 
                    <Postcode
                        style={ styles.DaumPostAPI }
                        jsOptions={{ animation: true }}
                        onSelected={
                            (data) => {
                                setVisible(false)
                                setData(data)
                            }
                        }
                    />
                }
            </View>
            <StyledTextInput
                inputAccessoryViewID="phoneNumber"
                placeholder="phoneNumber.."
                placeholderTextColor={ palette.gray[3] }
                onChange={ onChange }
                value={ form.phoneNumber }
            />
            { error && <ErrorMessage text={ error } /> }
            <StyledButton
                onPress={ onPress }
                title="Join"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postCode: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialForm: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
    },
    DaumPostAPI: {
        width: 400,
        height: 500,
    }
});

export default JoinForm;