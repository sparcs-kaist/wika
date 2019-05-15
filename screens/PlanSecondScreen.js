import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MildTouchable from '../components/MildTouchable';
import CommonStyles from '../styles/CommonStyles';
import ModalSelector from 'react-native-modal-selector'

const styles = {
  map: {
    height: 300,
    backgroundColor: 'gray',
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
    textInputValue: null,
  }

_showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });

_showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });

_hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });

_hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });

_handleStartDatePicked = (date) => {
  console.log("A date has been picked: ", date);
  this._hideStartDateTimePicker();
  this.setState({ startDate: date });
};

_handleEndDatePicked = (date) => {
  console.log("A date has been picked: ", date);
  this._hideEndDateTimePicker();
  this.setState({ endDate: date });
};

render() {
  const { state } = this;
  const data = [
    { key: 0, label: '2명' },
    { key: 1, label: '3명' },
    { key: 2, label: '4명' },
  ];
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
          <View>
            <MildTouchable style={styles.destinationButton} onPress={this._showStartDateTimePicker}>
              <Text>{state.startDate ? state.startDate.toLocaleString('ko-kr') : '출발 가능한 시간 선택'}</Text>
            </MildTouchable>
            <MildTouchable style={styles.destinationButton} onPress={this._showEndDateTimePicker}>
              <Text>{state.endDate ? state.endDate.toLocaleString('ko-kr') : '출발 가능한 시간 선택'}</Text>
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
          <ModalSelector
            data={data}
            initValue="인원수 선택"
            onChange={(option)=>this.setState({textInputValue:option.label})}
          />
        </View>
      </View>
    </View>
  );
}
}
