import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VictoryPie, VictoryContainer } from 'victory-native';

export default class RevenueScreen extends React.Component {
  static navigationOptions = {
    title: 'Revenue',
    headerTintColor: '#f44248'
  };

  state = {
    revenueByType: [
      { x: 'A', y: 6000, type: 'Standard' },
      { x: 'B', y: 7000, type: 'Express No Locks' },
      { x: 'C', y: 8000, type: 'Express w/Locks' },
      { x: 'D', y: 9000, type: 'Premier' },
      { x: 'E', y: 10000, type: 'Store' }
    ]
  };

  componentDidMount() {
    setInterval(this.randomUpdateRevenueByType, 700);
  }

  getRandom = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  randomUpdateRevenueByType = () => {
    const i = this.getRandom(0, this.state.revenueByType.length - 1);
    const inflation = this.getRandom(500, 1500);
    const prefix = this.state.revenueByType.slice(0, i);
    const target = this.state.revenueByType.slice(i, i + 1);
    const suffix = this.state.revenueByType.slice(i + 1);
    const updatedRevenue = [
      ...prefix,
      Object.assign(target[0], { y: target[0].y + inflation }),
      ...suffix
    ];
    return this.setState({
      revenueByType: updatedRevenue
    });
  };

  toUSD = num => {
    const p = parseInt(num).toFixed(2).split('.');
    return (
      '$' +
      p[0].split('').reverse().reduce(function(acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '' + 'M')
    );
  };

  renderRow = item => {
    return (
      <View key={`${item.x}-${item.y}`} style={styles.row}>
        <Text style={styles.textLabel}>
          {item.x}: {item.type}
        </Text>
        <Text style={styles.textPrice}>
          {this.toUSD(item.y)}
        </Text>
      </View>
    );
  };

  render() {
    const revenueTotal = this.state.revenueByType.reduce(
      (subtotal, item, i) => {
        return subtotal + item.y;
      },
      0
    );

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <VictoryPie
            animate={{
              duration: 400
            }}
            style={{
              labels: {
                fill: 'white',
                stroke: 'none',
                fontSize: 15,
                fontWeight: 'bold'
              }
            }}
            data={[...this.state.revenueByType].reverse()}
            startAngle={90}
            endAngle={-90}
            innerRadius={5}
            labelRadius={150}
            colorScale={['#7D1476', '#D2AF21', '#CA0BBD', '#0B5C53', '#017D6F']}
            containerComponent={<VictoryContainer height={200} />}
          />
          <Text style={styles.total}>
            {this.toUSD(revenueTotal)}
          </Text>
          {this.state.revenueByType.map(this.renderRow)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollview: {
    paddingBottom: 50
  },
  row: {
    alignContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  textLabel: {
    flex: 1,
    fontSize: 16
  },
  textPrice: {
    flex: 0
  },
  total: {
    fontSize: 40,
    color: 'red',
    alignSelf: 'center'
  }
});
