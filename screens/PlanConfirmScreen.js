import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
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
    navigation.popToTop();
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
          <ButtonItem>
            <Text>{origin}</Text>
          </ButtonItem>
          <ButtonItem>
            <Text>{destination}</Text>
          </ButtonItem>
          <ButtonItem>
            <Text>{startDate.toLocaleString()}</Text>
          </ButtonItem>
          <ButtonItem>
            <Text>{endDate.toLocaleString()}</Text>
          </ButtonItem>
        </View>
        <View style={CommonStyles.paddingContainer}>
          <ButtonItem>
            <MildTouchable onPress={this._confirm}>
              <Text style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>확인</Text>
            </MildTouchable>
          </ButtonItem>
        </View>
      </View>
    );
  }
}
