import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MildTouchable from '../components/MildTouchable';
import CommonStyles from '../styles/CommonStyles';
import ModalSelector from 'react-native-modal-selector'
import RNPickerSelect from 'react-native-picker-select';
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

_navigateConfirm = () => {
  const { props } = this;
  props.navigation.navigate('PlanConfirm', { startDate: this.startDate, endDate: this.endDate, origin: this.origin, destination: this.destination, maxMembers: 4 });
}

render() {
  const { state } = this;
  const data = [
    { key: 0, label: '2명' },
    { key: 1, label: '3명' },
    { key: 2, label: '4명' },
  ];
  const datas = [
    { label: '2명', value: '2명' },
    { label: '3명', value: '3명' },
    { label: '4명', value: '4명' },
  ];

  const placeholder = {
    label: '인원수 선택',
    value: null,
    style: CommonStyles.paddingContainer,
  };
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
          <RNPickerSelect
            style={CommonStyles.paddingContainer}
            placeholder={placeholder}
            items={datas}
            onValueChange={(value) => { this.setState({ textInputValue: value }); }}
            value={this.state.textInputValue}
          />
        </View>
        <MildTouchable style={styles.destinationButton} onPress={this._navigateConfirm}>
              <Text>다음</Text>
        </MildTouchable>
      </View>
    </View>
  );
}
}
