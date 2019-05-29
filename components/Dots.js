import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const bigDotSize = 15;
const smallDotSize = 5;
const lastDotSize = 30;
const interval = 10;

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
    height: 'auto',
  },
  dot: {
    backgroundColor: 'rgb(27, 52, 67)',
    borderRadius: '50%',
  },
  firstDot: {
    width: bigDotSize,
    height: bigDotSize,
  },
  smallDot: {
    width: smallDotSize,
    height: smallDotSize,
  },
  lastDot: {
    width: lastDotSize,
    height: lastDotSize,
    backgroundColor: 'rgb(193, 193, 195)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Dots = (props) => {
  const { height } = props;
  if ((height - bigDotSize - lastDotSize) < interval) return null;
  const number = Math.floor((height - bigDotSize - lastDotSize) / interval) - 1;
  return (
    <View style={[styles.wrapper, { height }]}>
      <View style={[styles.dot, styles.firstDot]} />
      {[...Array(number)].map((x, i) => <View key={i} style={[styles.dot, styles.smallDot]} />)}
      <View style={[styles.dot, styles.lastDot]}>
        <View style={[styles.dot, styles.firstDot]} />
      </View>
    </View>
  );
};

Dots.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Dots;
