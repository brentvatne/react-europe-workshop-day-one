import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import formatCustomDateString from '../util/formatCustomDateString';

export default class ScheduleSectionHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {formatCustomDateString(this.props.date)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    color: '#535353',
    fontWeight: 'bold',
  },
});
