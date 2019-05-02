import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import PartyScreen from '../screens/PartyScreen';
import TabBarIcon from '../components/TabBarIcon';
import AlertIcon from '../components/AlertIcon';

const tabBarIcon = ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-car' : 'ios-car'} />;

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator({
  Party: PartyScreen,
}, {
  initialRouteName: 'Party',
  navigationOptions: {
    tabBarLabel: '파티 조회',
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
