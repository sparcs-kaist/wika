import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import PlanFirstScreen from '../screens/PlanFirstScreen';
import PlanSecondScreen from '../screens/PlanSecondScreen';
import PlanConfirmScreen from '../screens/PlanConfirmScreen';
import TabBarIcon from '../components/TabBarIcon';
import AlertIcon from '../components/AlertIcon';

const tabBarIcon = ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-add' : 'ios-add'} />;

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator({
  PlanFirst: PlanFirstScreen,
  PlanSecond: PlanSecondScreen,
  PlanConfirm: PlanConfirmScreen,
}, {
  initialRouteName: 'PlanFirst',
  navigationOptions: {
    tabBarLabel: '파티 추가',
    tabBarIcon,
  },
  defaultNavigationOptions: ({ navigation }) => ({
    headerRight: <AlertIcon onPress={() => navigation.navigate('Alert')} />,
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      elevation: 0,
    },
  }),
});
