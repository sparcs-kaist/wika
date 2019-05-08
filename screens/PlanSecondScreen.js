import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MildTouchable from '../components/MildTouchable';
import CommonStyles from '../styles/CommonStyles';

const styles = {
  map: {
    height: 300,
    backgroundColor: 'gray',
  },
  destinationButton: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  spaceBetween: { justifyContent: 'space-between' },
  spaceEvenly: { justifyContent: 'space-evenly' },
};

export default class PlanSecondScreen extends PureComponent {
  state = {
    startDate: null,
  }

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
    this.setState({ startDate: date });
  };

  render() {
    const { state } = this;
    return (
      <View style={[CommonStyles.container, { backgroundColor: 'lightgray' }]}>
        <View style={[CommonStyles.paddingContainer, styles.spaceBetween]}>
          <View style={styles.spaceBetween}>
            <View style={styles.destinationButton}>
              <Text>출발지</Text>
            </View>
            <View style={styles.destinationButton}>
              <Text>도착지</Text>
            </View>
            <MildTouchable style={styles.destinationButton} onPress={this._showDateTimePicker}>
              <Text>시간 선택</Text>
            </MildTouchable>
            <View style={styles.destinationButton}>
              <Text>{state.startDate ? state.startDate.toISOString() : null}</Text>
            </View>
            <DateTimePicker
              isVisible={state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </View>
        </View>
      </View>
    );
  }
}
