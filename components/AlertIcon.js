import React from 'react';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import MildTouchable from './MildTouchable';

const AlertIcon = ({ onPress }) => (
  <MildTouchable style={{ marginRight: 20 }} onPress={onPress}>
    <Icon.MaterialCommunityIcons size={25} name="bell-outline" />
  </MildTouchable>
);

AlertIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AlertIcon;
