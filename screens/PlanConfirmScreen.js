import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform, Alert } from 'react-native';
import { Icon } from 'expo';
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
  state = {
    upperText: '시작 전',
    buttonText: '시작',
  }

  _confirm = () => {
    const { navigation } = this.props;
    Alert.alert('알림', '신청 완료!');
    //navigation.popToTop();
    this.setState({ upperText: '진행중...', buttonText: '끝내기' });

  };

  render() {
    const { navigation } = this.props;
    const origin = navigation.getParam('origin', 'Origin not specified');
    const destination = navigation.getParam('destination', 'Destination not specified');
    const startDate = navigation.getParam('startDate', new Date());
    const endDate = navigation.getParam('endDate', new Date());
    const maxMembers = navigation.getParam('maxMembers', 'Origin not specified');
    const { upperText, buttonText } = this.state;
    return (
      <View style={CommonStyles.paddingContainer}>
        <Text style={CommonStyles.largeText}>{upperText}</Text>
        <View style={CommonStyles.paddingContainer}>
          <View>
            <Text style={CommonStyles.largeText}>{origin}</Text>
            <Text style={CommonStyles.largeText}>{destination}</Text>
          </View>
            <Text>{startDate.toLocaleString()}</Text>
            <Text>{endDate.toLocaleString()}</Text>
        </View>
            <View style={[styles.spaceBetween, { flexDirection: 'row' }]}>
              <Icon.MaterialCommunityIcons
                name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                size={80}
                color={(maxMembers >= 1) ? 'black' : 'transparent'}
              />
              <Icon.MaterialCommunityIcons
                name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                size={80}
                color={(maxMembers >= 2) ? 'black' : 'transparent'}
              />
              <Icon.MaterialCommunityIcons
                name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                size={80}
                color={(maxMembers >= 3) ? 'black' : 'transparent'}
              />
              <Icon.MaterialCommunityIcons
                name={Platform.OS === 'android' ? 'human-male' : 'human-male'}
                size={80}
                color={(maxMembers >= 4) ? 'black' : 'transparent'}
              />
            </View>
        <View style={CommonStyles.paddingContainer}>
          <ButtonItem>
            <MildTouchable style={[CommonStyles.button, { backgroundColor: mainColor }]} onPress={this._confirm}>
              <Text style={CommonStyles.buttonText}>{buttonText}</Text>
            </MildTouchable>
          </ButtonItem>
        </View>
      </View>
    );
  }
}
