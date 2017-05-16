import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SpeakerRow extends React.Component {
  render() {
    const { title, subtitle, avatarUrl } = this.props;

    return (
      <View style={styles.container}>
        {avatarUrl &&
          <Image style={styles.image} source={{ uri: avatarUrl }} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          {!!subtitle &&
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#060B7A',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 0,
    width: 64,
    height: 64,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 32,
    marginRight: 15,
  },
});
