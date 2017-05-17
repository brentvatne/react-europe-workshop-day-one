import React from 'react';
import _ from 'lodash';
import {
  ActivityIndicator,
  Dimensions,
  TouchableHighlight,
  SectionList,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

import ScheduleItemSummary from '../components/ScheduleItemSummary';
import ScheduleSectionHeader from '../components/ScheduleSectionHeader';
import parseCustomDateString from '../util/parseCustomDateString';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ScheduleListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selectedDay: 'Thursday',
    isRefreshing: false,
  };

  render() {
    if (this.props.data.loading) {
      return (
        <View style={[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.25)'}]}>
          <ActivityIndicator />
        </View>
      );
    }


    const sortedScheduleItems = _.chain(this.props.data.events[0].schedule.slice())
      .sort(item => item.startDate)
      .value();

    const dates = _.chain(sortedScheduleItems)
      .map(item => item.startDate)
      .uniq()
      .sort()
      .value();

    const items = _.groupBy(sortedScheduleItems, item => item.startDate);
    const itemsByDay = _.groupBy(sortedScheduleItems, item =>
      parseCustomDateString(item.startDate).getDay()
    );
    const eventsForThursday = _.groupBy(
      _.sortBy(itemsByDay[4], item => item.startDate),
      item => item.startDate
    );

    const eventsForFriday = _.groupBy(
      _.sortBy(itemsByDay[5], item => item.startDate),
      item => item.startDate
);
    const sections = [];
    let events = this.state.selectedDay === 'Thursday'
      ? eventsForThursday
      : eventsForFriday;

    Object.keys(events).forEach(date => {
      sections.push({ key: date, data: events[date] });
    });

    return (
      <View style={styles.container}>
        <SectionList
          removeClippedSubviews={false}
          onRefresh={this._handleRefreshAsync}
          refreshing={this.state.isRefreshing}
          keyExtractor={item => item.id}
          sections={sections}
          ListHeaderComponent={this._listHeaderComponent}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
        />

        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _handleRefreshAsync = async () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  };

  _listHeaderComponent = props => {
    return (
      <HeaderComponent
        onChangeSelectedDay={selectedDay => {
          this.setState({ selectedDay });
        }}
        selectedDay={this.state.selectedDay}
      />
    );
  };

  _renderSectionHeader = ({ section }) => {
    return <ScheduleSectionHeader date={section.key} />;
  };

  _renderItem = ({ item }) => {
    return (
      <ScheduleItemSummary
        item={item}
        onPress={() =>
          this.props.navigation.navigate('EventDetails', { event: item })}
      />
    );
  };
}

export default graphql(gql`
  {
    events(slug: "reacteurope-2017") {
      schedule(tags: "*") {
        id
        title
        startDate
        eventId
        description
        speakers {
          name
          twitter
          github
          bio
          avatarUrl
        }
      }
    }
  }
`)(ScheduleListScreen);

class DaySelectionButton extends React.Component {
render() {
  return (
    <TouchableHighlight
      onPress={this.props.onPress}
      underlayColor="#19217A"
      style={[
        styles.daySelectionButton,
        this.props.day === this.props.selectedDay &&
          styles.daySelectionButtonSelected,
      ]}>
      <Text style={styles.daySelectionButtonText}>
        {this.props.day.toUpperCase()}
      </Text>
    </TouchableHighlight>
  );
}
}

class HeaderComponent extends React.Component {
render() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/hero.png')}
        style={styles.headerImage}
      />

      <View
        style={{
          flex: 1,
          paddingTop: 40,
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 85, height: 85, resizeMode: 'contain' }}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            backgroundColor: 'transparent',
          }}>
          React Europe
        </Text>
      </View>

      <View
        style={{
          marginVertical: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DaySelectionButton
          day="Thursday"
          selectedDay={this.props.selectedDay}
          onPress={() => this.props.onChangeSelectedDay('Thursday')}
        />
        <View style={{ width: 10 }} />
        <DaySelectionButton
          day="Friday"
          selectedDay={this.props.selectedDay}
          onPress={() => this.props.onChangeSelectedDay('Friday')}
        />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
},
headerContainer: {
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
},
headerImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: null,
  width: null,
  resizeMode: 'cover',
  opacity: 0.4,
},
daySelectionButton: {
  backgroundColor: '#3140DC',
  paddingHorizontal: 20,
  paddingVertical: 8,
  borderRadius: 15,
  opacity: 0.5,
},
daySelectionButtonSelected: {
  opacity: 1,
},
daySelectionButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 14,
},
});
