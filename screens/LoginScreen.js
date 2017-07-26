import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Video } from 'expo';

import FingerprintWaitingNotification from '../components/FingerprintWaitingNotification';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          isLooping={true}
          source={require('../assets/videos/bluesilk4.mp4')}
          //   posterSource={require('../assets/videos/matcha.png')}
          //   usePoster={true}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
          useNativeControls={false}
          shouldPlay={true}
        />

        <KeyboardAvoidingView
          style={styles.login}
          behavior="padding"
          keyboardVerticalOffset={150}
        >
          <Text style={styles.header}>Login</Text>
          <TextInput
            ref="email"
            placeholder="Email"
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={evt => this.refs.password.focus()}
            underlineColorAndroid="transparent"
          />
          <TextInput
            ref="password"
            placeholder="Password"
            secureTextEntry
            style={[styles.input, { marginBottom: 15 }]}
            returnKeyType="done"
            underlineColorAndroid="transparent"
          />
          <Button
            title={this.props.submitting ? 'Submitting...' : 'Submit'}
            color="#b37426"
            onPress={this.props.handleLogin}
          />
          <FingerprintWaitingNotification
            onFingerprintSuccess={this.props.handleLogin}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2665b3'
  },
  header: {
    fontSize: 40,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginVertical: 10,
    paddingLeft: 15,
    fontSize: 20,
    color: '#b37426'
  },
  login: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(50,50,50,0.4)'
  },
  button: {
    height: 50
  }
});

export default LoginScreen;
