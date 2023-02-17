import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
type Props = {
  navigation: any;
};

const AuthScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const authHandler = async () => {
    setIsLoading(true);
    if (isSignup) {
      //Change to handle true sign in / login
      setIsLogged(true);
    } else {
      setIsLogged(true);
    }
    navigation.navigate('Home');
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <Button
          title={isSignup ? 'Sign Up' : 'Login'}
          onPress={authHandler}
          loading={isLoading}
          containerStyle={styles.buttonContainer}
        />
        <Button
          title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
          onPress={() => setIsSignup(prev => !prev)}
          type="outline"
          containerStyle={styles.buttonContainer}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default AuthScreen;
