import React from 'react';
import { Button, NativeModules, Platform, View } from 'react-native';

export default class ButtonTouchID extends React.Component {
  state = {
    waiting: false
  };

  render() {
    let authFunction;

    if (Platform.OS === 'android') {
      authFunction = async () => {
        this.setState({ waiting: true });
        try {
          let result = await NativeModules.ExponentFingerprint.authenticateAsync();
          if (result.success) {
            console.log('Authenticated', { result });
            alert('Authenticated!');
          } else {
            console.log('FAIL', { result });
            alert('Failed to authenticate');
          }
        } finally {
          this.setState({ waiting: false });
        }
      };
    } else if (Platform.OS === 'ios') {
      authFunction = async () => {
        let result = await NativeModules.ExponentFingerprint.authenticateAsync(
          'Show me your finger!'
        );
        if (result.success) {
          alert('Success!');
        } else {
          alert('Cancel!');
        }
      };
    }

    return (
      <View style={{ padding: 10 }}>
        <Button
          title={
            this.state.waiting
              ? 'Waiting for fingerprint... '
              : 'Authenticate with TouchID'
          }
          onPress={authFunction}
        />
      </View>
    );
  }
}
