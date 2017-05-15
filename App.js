import React from 'react';
import ScheduleListScreen from './screens/ScheduleListScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import FeedbackScreen from './screens/FeedbackScreen';

export default class App extends React.Component {
  render() {
    return <FeedbackScreen />;
    // return <EventDetailsScreen />;
    // return <ScheduleListScreen />;
  }
}
