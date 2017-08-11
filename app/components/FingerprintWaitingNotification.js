import React from 'react';
import { Fingerprint } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, View } from 'react-native';

import colors from '../constants/Colors';

export default class FingerprintWaitingNotification extends React.Component {
  state = {
    hasFingerprintAuth: null,
    authStatus: null // valid values are null, 'wait', 'success', and 'fail'
  };

  componentDidMount() {
    Fingerprint.hasHardwareAsync().then(hasHardware => {
      hasHardware &&
        Fingerprint.isEnrolledAsync().then(hasFingerprintAuth => {
          this.setState({ hasFingerprintAuth });
          this.authFunction();
        });
    });
  }

  authFunction = async () => {
    try {
      let result =
        Platform.OS === 'ios'
          ? await Fingerprint.authenticateAsync('Show me your finger')
          : await Fingerprint.authenticateAsync();

      if (result.success) {
        this.setState(
          { authStatus: 'success' },
          this.props.onFingerprintSuccess()
        );
      } else {
        this.setState({
          authStatus: 'fail',
          hasFingerprintAuth:
            ['not_enrolled', 'user_cancel'].indexOf(result.error) === -1
        });
        console.log('Fingerprint Auth Failed', result);
      }
    } catch (err) {
      console.error('authFunction Error', err);
    }
  };

  getAuthStatement = () => {
    const displayText = this.getMessage(this.state.authStatus); // this.getMessage(this.state.authStatus);
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(255,255,255,0.8)',
          paddingHorizontal: 10,
          borderRadius: 12
        }}
      >
        <Ionicons name={displayText.icon} size={25} color={displayText.color} />
        <Text
          style={{
            fontSize: 20,
            color: displayText.color,
            paddingLeft: 10
          }}
        >
          {displayText.text}
        </Text>
      </View>
    );
  };

  getMessage = status => {
    const waitText = {
      icon: 'md-finger-print',
      color: this.props.waitTextColor,
      text: 'Waiting for fingerprint...'
    };
    const successText = {
      icon: 'md-checkmark-circle',
      color: colors.success,
      text: 'Success! '
    };
    const failText = {
      icon: 'md-alert',
      color: colors.error,
      text: 'Fail! Please login'
    };

    if (status === 'success') return successText;
    if (status === 'fail') return failText;
    return waitText;
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        {this.state.hasFingerprintAuth ? this.getAuthStatement() : null}
      </View>
    );
  }
}
