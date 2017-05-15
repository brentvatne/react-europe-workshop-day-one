import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

export default class ScheduleItemSummary extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          {this._maybeRenderSubtitle()}
        </View>

        {this._maybeRenderAvatar()}
      </View>
    );
  }

  // Assume one speaker
  _getSpeaker = () => {
    let { item } = this.props;

    if (item.speakers && item.speakers[0]) {
      return item.speakers[0];
    }
  };

  _maybeRenderAvatar = () => {
    let speaker = this._getSpeaker();

    if (!speaker) {
      return;
    } else if (speaker.avatarUrl) {
      return (
        <Image source={{ uri: speaker.avatarUrl }} style={styles.avatar} />
      );
    }
  };

  _maybeRenderSubtitle = () => {
    let speaker = this._getSpeaker();

    if (!speaker) {
      return;
    } else if (speaker.name) {
      return (
        <Text style={styles.subtitle}>
          {speaker.name}
        </Text>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: '#565656',
  },
  avatar: {
    marginLeft: 25,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
