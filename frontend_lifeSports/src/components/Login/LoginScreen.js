import * as React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return(
    <View style={
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    }>
      <Text>Login Screen</Text>
      <Button
        onPress={ () => navigation.navigate('Join', { name: 'Join' })}
        title='Join'
      />
    </View>
  );
}

export default LoginScreen;