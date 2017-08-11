import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/Colors';
import devices from '../api/devices';

export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'Offline',
    headerTintColor: colors.thermoRed
  };

  state = {
    devices: devices
  };

  divider = () => {
    return <View style={styles.divider} />;
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.header}>
          {item.scName}
        </Text>
        <Text style={styles.text}>
          {`${item.scType} `}
          {item.hasLocks &&
            item.scType === 'EXPRESS' &&
            <Ionicons name="md-lock" size={16} color={colors.success} />}
          {!item.hasLocks &&
            item.scType === 'EXPRESS' &&
            <Ionicons name="md-unlock" size={16} color={colors.error} />}
        </Text>
        <Text>
          {item.enclosureID}
        </Text>
        <Text>
          {`${item.outageInMinutes} minutes`}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.devices}
        keyExtractor={(item, index) => item.enclosureID}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.divider}
      />
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingVertical: 10
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
    color: colors.text
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider
  },
  text: {
    color: colors.text
  }
});
