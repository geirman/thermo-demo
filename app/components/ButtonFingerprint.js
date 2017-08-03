import React from 'react';
import { Fingerprint } from 'expo';
import { Button, View } from 'react-native';

export default class ButtonFingerprint extends React.Component {
  state = {
    waiting: false,
    hasFingerprintAuth: false
  };

  componentDidMount() {
    console.log('mounted');
    Fingerprint.hasHardwareAsync().then(hasHardware => {
      hasHardware &&
        Fingerprint.isEnrolledAsync().then(hasFingerprintAuth =>
          this.setState({ hasFingerprintAuth })
        );
    });
  }

  authFunction = async () => {
    this.setState({ waiting: true });
    try {
      let result = await Fingerprint.authenticateAsync();
      if (result.success) {
        alert('Authenticated!');
      } else {
        alert('Failed to authenticate');
      }
    } finally {
      this.setState({ waiting: false });
    }
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        {this.state.hasFingerprintAuth &&
          <Button
            title={
              this.state.waiting
                ? 'Waiting for fingerprint... '
                : 'Authenticate with fingerprint'
            }
            onPress={this.authFunction}
          />}
      </View>
    );
  }
}
