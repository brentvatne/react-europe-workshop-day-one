import React from 'react';
import { Dimensions } from 'react-native';
import ScheduleListScreen from './screens/ScheduleListScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import FeedbackScreen from './screens/FeedbackScreen';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />;

const ScheduleStack = StackNavigator(
  {
    ScheduleList: {
      screen: ScheduleListScreen,
    },
    EventDetails: {
      screen: EventDetailsScreen,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#050B7A',
      },
      headerTintColor: '#fff',
      tabBarIcon: createTabBarIconWrapper(Ionicons, {
        name: 'ios-calendar-outline',
        size: 30,
      }),
    },
  }
);

const FeedbackStack = StackNavigator(
  {
    Feedback: {
      screen: FeedbackScreen,
    },
  },
  {
    navigationOptions: {
      tabBarIcon: createTabBarIconWrapper(Ionicons, {
        name: 'ios-contacts-outline',
        size: 30,
      }),
    },
  }
);

const RootNavigator = TabNavigator(
  {
    Schedule: {
      screen: ScheduleStack,
    },
    Feedback: {
      screen: FeedbackStack,
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#2242CC',
      activeBackgroundColor: '#fff',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: '#fff',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        // Currently there is no great way to center two tab icons, so we do
        // it manually here by assuming that each tab icon is about 125 points wide
        paddingHorizontal: (Dimensions.get('window').width - 225) / 2,
        backgroundColor: '#fff',
        height: 55,
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
    // return <EventDetailsScreen />;
    // return <ScheduleListScreen />;
  }
}
