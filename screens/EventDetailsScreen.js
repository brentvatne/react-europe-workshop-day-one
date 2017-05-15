import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpeakerRow from '../components/SpeakerRow';

export default class EventDetails extends React.Component {
  render() {
    let { params } = this.props.navigation.state;
    let { event } = params;

    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {event.title}
          </Text>
          <Text style={styles.subtitle}>
            Thursday, May 18, 10-10:45 AM
          </Text>
          <Text style={styles.description}>
            {event.description}
          </Text>
        </View>
        {this._maybeRenderSpeakerRow()}
      </View>
    );
  }

  _maybeRenderSpeakerRow = () => {
    let { params } = this.props.navigation.state;
    let { event } = params;

    if (event.speakers && event.speakers.length) {
      let speaker = event.speakers[0];
      return <SpeakerRow title={speaker.name} subtitle={speaker.bio} />;
    }
  };
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
