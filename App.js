import React from 'react';
import ScheduleListScreen from './screens/ScheduleListScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';

export default class App extends React.Component {
  render() {
    return <EventDetailsScreen />;
    // return <ScheduleListScreen />;
  }
}
