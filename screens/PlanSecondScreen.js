import React, { PureComponent } from 'react';
import { View, Text, Platform } from 'react-native';
import { Icon } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import MildTouchable from '../components/MildTouchable';
import CommonStyles, { mainColor, disabledColor } from '../styles/CommonStyles';
import TabBarIcon from '../components/TabBarIcon';

const styles = {
  map: {
    height: 300,
  },
  destinationButton: {
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  spaceBetween: { justifyContent: 'space-between' },
  spaceEvenly: { justifyContent: 'space-evenly' },
};


export default class PlanSecondScreen extends PureComponent {
  state = {
    startDate: null,
    endDate: null,
    maxMembers: 2,
    origin: null,
    destination: null,
  }

  _showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });

  _showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });

  _hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });

  _hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });

  _handleStartDatePicked = (date) => {
    this._hideStartDateTimePicker();
    this.setState({ startDate: date });
  };

  _handleEndDatePicked = (date) => {
    this._hideEndDateTimePicker();
    this.setState({ endDate: date });
  };

  _navigateConfirm = () => {
    const { navigation } = this.props;
    const { startDate, endDate, origin, destination, maxMembers } = this.state;
    navigation.navigate('PlanConfirm', { startDate, endDate, origin, destination, maxMembers });
  }

  _makeFocused = (num) => {
    this.setState({ maxMembers: num });
    console.log('now maxMember is', num);
  }

  render() {
    const { state } = this;
    const { navigation } = this.props;
    const origin = navigation.getParam('origin', 'Origin not specified');
    const destination = navigation.getParam('destination', 'Destination not specified');
    const { startDate, endDate, maxMembers } = this.state;
    const tabBarIcon = ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-add' : 'ios-add'} />;
    const complete = origin !== '' && destination !== '' && startDate !== '' && endDate !== '' && maxMembers !== '';
    tabBarIcon.propTypes = {
      focused: PropTypes.bool.isRequired,
    };

    return (
      <View style={[CommonStyles.container, { backgroundColor: 'white' }]}>
        <View style={[CommonStyles.paddingContainer, styles.spaceBetween]}>
          <View style={styles.spaceBetween}>
            <View>
              <Text style={CommonStyles.largeText}>{origin}</Text>
              <Text style={CommonStyles.largeText}>{destination}</Text>
            </View>
            <View>
              <Text style={CommonStyles.labelText}>출발 가능한 가장 빠른 시간</Text>
              <MildTouchable style={CommonStyles.searchBox} onPress={this._showStartDateTimePicker}>
                <Text style={CommonStyles.placeholderText}>{state.startDate ? state.startDate.toLocaleString('ko-kr') : '언제부터 출발 가능한가요?'}</Text>
              </MildTouchable>
              <Text style={CommonStyles.labelText}>출발 가능한 가장 늦은 시간</Text>
              <MildTouchable style={CommonStyles.searchBox} onPress={this._showEndDateTimePicker}>
                <Text style={CommonStyles.placeholderText}>{state.endDate ? state.endDate.toLocaleString('ko-kr') : '언제까지 출발 가능한가요?'}</Text>
              </MildTouchable>
            </View>
            <DateTimePicker
              mode="datetime"
              isVisible={state.isStartDateTimePickerVisible}
              onConfirm={this._handleStartDatePicked}
              onCancel={this._hideStartDateTimePicker}
            />
            <DateTimePicker
              mode="datetime"
              isVisible={state.isEndDateTimePickerVisible}
              onConfirm={this._handleEndDatePicked}
              onCancel={this._hideEndDateTimePicker}
            />
            <Text style={CommonStyles.labelText}>탑승 인원수</Text>
            <View style={[styles.spaceBetween, { flexDirection: 'row' }]}>
              <MildTouchable onPress={() => this._makeFocused(1)}>
                <Icon.MaterialCommunityIcons
                  name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                  size={80}
                  color={(state.maxMembers >= 1) ? 'black' : 'gray'}
                />
              </MildTouchable>
              <MildTouchable onPress={() => this._makeFocused(2)}>
                <Icon.MaterialCommunityIcons
                  name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                  size={80}
                  color={(state.maxMembers >= 2) ? 'black' : 'gray'}
                />
              </MildTouchable>
              <MildTouchable onPress={() => this._makeFocused(3)}>
                <Icon.MaterialCommunityIcons
                  name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                  size={80}
                  color={(state.maxMembers >= 3) ? 'black' : 'gray'}
                />
              </MildTouchable>
              <MildTouchable onPress={() => this._makeFocused(4)}>
                <Icon.MaterialCommunityIcons
                  name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                  size={80}
                  color={(state.maxMembers >= 4) ? 'black' : 'gray'}
                />
              </MildTouchable>
            </View>
          </View>
          <MildTouchable style={[CommonStyles.button, { backgroundColor: complete ? mainColor : disabledColor }]} disabled={!complete} onPress={this._navigateConfirm}>
            <Text style={CommonStyles.buttonText}>다음</Text>
          </MildTouchable>
        </View>
      </View>
    );
  }
}
