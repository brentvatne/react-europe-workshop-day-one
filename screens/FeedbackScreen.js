import React from 'react';
import Expo from 'expo';
import {
  TextInput,
  ScrollView,
  Slider,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import GrowingTextInput from '../components/GrowingTextInput';

export default class FeedbackScreen extends React.Component {
  state = {
    feedbackText: '',
    isUrgent: false,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.navbar}>
          <Text style={styles.title}>Feedback</Text>
        </View>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          style={styles.scrollView}>
          <SectionLabel title="Contact Information" />
          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              ref={view => {
                this._fullNameInput = view;
              }}
              style={[styles.textInputRow]}
              autoCorrect={false}
              placeholder="Full name"
              onSubmitEditing={() => this._emailInput.focus()}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              ref={view => {
                this._emailInput = view;
              }}
              style={[styles.textInputRow]}
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              onSubmitEditing={() => this._phoneInput.focus()}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              ref={view => {
                this._phoneInput = view;
              }}
              style={[styles.textInputRow]}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onSubmitEditing={() => this._feedbackInput.focus()}
            />
          </View>

          <SectionLabel title="Feedback" />
          <View style={[styles.row, styles.firstRow]}>

            {/* https://snack.expo.io/ByW4CFPx- */}
            <GrowingTextInput
              minHeight={80}
              ref={view => {
                this._feedbackInput = view;
              }}
              placeholder="Please write at least two or three sentences to share your feedback with us."
              value={this.state.feedbackText}
              onChangeText={feedbackText => this.setState({ feedbackText })}
              style={[styles.textInputRow, styles.multiLineTextInputRow]}
            />
          </View>
          <View style={styles.row}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 15,
                paddingBottom: 5,
              }}>
              <View style={styles.rowTitle}>
                <Text style={styles.rowTitleText}>How do you feel?</Text>
              </View>

              <View style={styles.sliderContainer}>
                <Text>Sad</Text>
                <Slider
                  style={{ flex: 1, marginHorizontal: 10 }}
                  maximumValue={10}
                  minimumTrackTintColor="#3B40B4"
                />
                <Text>Happy</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.rowTitleText}>This feedback is urgent</Text>
              </View>
              <View>
                <Switch
                  onTintColor="#3B40B4"
                  value={this.state.isUrgent}
                  onValueChange={isUrgent => this.setState({ isUrgent })}
                />
              </View>
            </View>
          </View>

          {this._renderSubmitButton()}
        </ScrollView>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _renderSubmitButton = () => {
    return (
      <TouchableOpacity
        onPress={() => alert('pressed!')}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>
          Submit Feedback
        </Text>
      </TouchableOpacity>
    );
  };
}

const SectionLabel = ({ title }) => (
  <Text
    style={{
      color: '#909090',
      fontWeight: '400',
      fontSize: 13,
      marginTop: 20,
      marginBottom: 10,
      marginHorizontal: 15,
    }}>
    {title.toUpperCase()}
  </Text>
);

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    paddingTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#050B7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F8F8F9',
  },
  rowTitle: {
    marginBottom: 7,
  },
  rowTitleText: {
    fontWeight: '500',
    color: 'rgba(0,0,0,0.9)',
  },
  row: {
    backgroundColor: '#fff',
    borderBottomColor: '#EAEBED',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  firstRow: {
    borderTopColor: '#EAEBED',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  textInputRow: {
    height: 50,
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  multiLineTextInputRow: {
    paddingVertical: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#3B3F8C',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
