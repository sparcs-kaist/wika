import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const MildTouchable = ({ onPress, style, children, ...rest }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style} {...rest}>
    {children}
  </TouchableOpacity>
);

MildTouchable.defaultProps = {
  style: {},
  children: null,
};

MildTouchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.array,
  ]),
  children: PropTypes.node,
};

export default MildTouchable;
