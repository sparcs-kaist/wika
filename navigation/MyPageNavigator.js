import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import MyPageScreen from '../screens/MyPageScreen';
import TabBarIcon from '../components/TabBarIcon';
import AlertIcon from '../components/AlertIcon';

const tabBarIcon = ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-person' : 'ios-person'} />;

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator({
  MyPage: MyPageScreen,
}, {
  initialRouteName: 'MyPage',
  navigationOptions: {
    tabBarLabel: '프로필',
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
