import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpeakerRow from '../components/SpeakerRow';

export default class EventDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            Conference Keynote
          </Text>
          <Text style={styles.subtitle}>
            Thursday, May 18, 10-10:45 AM
          </Text>
          <Text style={styles.description}>
            Hear about some stuff that has happened,
            and some other things that people think
            bout, and want to talk about, for some
            weird reason, to a lot of other people.
          </Text>
        </View>
        <SpeakerRow title={'Lucy Vatne'} subtitle={'11/10 doggo'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(223,223,223,0.75)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 23,
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
  },
});
