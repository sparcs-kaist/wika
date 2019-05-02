import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import PlanNavigator from './PlanNavigator';
import PartyNavigator from './PartyNavigator';
import MyPageNavigator from './MyPageNavigator';
import AlertScreen from '../screens/AlertScreen';

export default createStackNavigator({
  Main: createBottomTabNavigator({
    PlanNavigator,
    PartyNavigator,
    MyPageNavigator,
  }, {
    navigationOptions: {
      header: null,
    },
  }),
  Alert: AlertScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
    },
  },
});
