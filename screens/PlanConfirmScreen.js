import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';
import CommonStyles, { mainColor, disabledColor } from '../styles/CommonStyles';
import MildTouchable from '../components/MildTouchable';

const styles = {
  buttonItem: {
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
};

const ButtonItem = ({ style, ...props }) => <View {...props} style={[styles.buttonItem, ...(Array.isArray(style) ? style : [style])]} />;

ButtonItem.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

ButtonItem.defaultProps = {
  style: {},
};

export default class PlanConfirmScreen extends PureComponent {

  _confirm = () => {
    const { navigation } = this.props;
    Alert.alert('알림', '신청 완료!');
    //navigation.popToTop();
  };

  render() {
    const { navigation } = this.props;
    const origin = navigation.getParam('origin', 'Origin not specified');
    const destination = navigation.getParam('destination', 'Destination not specified');
    const startDate = navigation.getParam('startDate', new Date());
    const endDate = navigation.getParam('endDate', new Date());

    return (
      <View style={CommonStyles.container}>
        <View style={CommonStyles.paddingContainer}>
          <View>
            <Text style={CommonStyles.largeText}>{origin}</Text>
            <Text style={CommonStyles.largeText}>{destination}</Text>
          </View>
            <Text>{startDate.toLocaleString()}</Text>
            <Text>{endDate.toLocaleString()}</Text>
        </View>
        <View style={CommonStyles.paddingContainer}>
          <ButtonItem>
            <MildTouchable style={[CommonStyles.button, { backgroundColor: mainColor }]} onPress={this._confirm}>
              <Text style={CommonStyles.buttonText}>{destination === null ? 'Destination is NULL' : destination}</Text>
            </MildTouchable>
          </ButtonItem>
        </View>
      </View>
    );
  }
}
