import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'Devices'
  };

  state = {
    devices: [
      {
        iso: 'au',
        scName: 'SAHMRI - Premier',
        scType: 'PREMIER',
        enclosureID: 'VR02RTAU25002354',
        hasLocks: true,
        outageInMinutes: 15629,
        temp: 'RT',
        status: 'OFFLINE'
      },
      {
        iso: 'ch',
        scName: 'ID 058 - HCI Shop ETH (EXPRESS)',
        scType: 'EXPRESS',
        enclosureID: 'VR03EXEU22013528',
        hasLocks: false,
        outageInMinutes: 177549,
        temp: 'EX',
        status: 'OFFLINE'
      },
      {
        iso: 'de',
        scName: 'DE0302 - Freie Universitat Berlin EXPRESS',
        scType: 'EXPRESS',
        enclosureID: 'VR03EXEU22017763',
        hasLocks: true,
        outageInMinutes: 7742,
        temp: 'EX',
        status: 'OFFLINE'
      },
      {
        iso: 'de',
        scName: 'ID 221 - Gottingen University EXPRESS',
        scType: 'EXPRESS',
        enclosureID: 'VR03EXEU22011476',
        hasLocks: false,
        outageInMinutes: 42206,
        temp: 'EX',
        status: 'OFFLINE'
      }
    ]
  };

  _divider = () => {
    return <View style={styles.divider} />;
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.header}>
          {item.scName}
        </Text>
        <Text>
          {`${item.scType} `}
          {item.hasLocks &&
            item.scType === 'EXPRESS' &&
            <Ionicons name="md-lock" size={16} color="#00b200" />}
          {!item.hasLocks &&
            item.scType === 'EXPRESS' &&
            <Ionicons name="md-unlock" size={16} color="#b20000" />}
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
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._divider}
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
    lineHeight: 25
  },
  divider: {
    height: 1,
    backgroundColor: '#CED0CE'
  }
});
