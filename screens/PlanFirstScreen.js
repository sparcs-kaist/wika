import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import MildTouchable from '../components/MildTouchable';
import CommonStyles from '../styles/CommonStyles';

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
};

export default class PlanFirstScreen extends PureComponent {
  state = {}

  _navigateSecond = () => {
    const { props } = this;
    props.navigation.navigate('PlanSecond', { origin: 'bar', destination: '' });
  }

  render() {
    return (
      <View style={[CommonStyles.container, { backgroundColor: 'lightgray' }]}>
        <View style={styles.map} />
        <View style={[CommonStyles.paddingContainer, styles.spaceBetween]}>
          <View style={styles.spaceBetween}>
            <MildTouchable style={styles.destinationButton} onPress={() => this._onDestinationPress('origin')}>
              <Text>출발지</Text>
            </MildTouchable>
            <MildTouchable style={styles.destinationButton} onPress={() => this._onDestinationPress('destination')}>
              <Text>도착지</Text>
            </MildTouchable>
          </View>
          <View>
            <MildTouchable style={styles.destinationButton}>
              <Text>다음</Text>
            </MildTouchable>
          </View>
        </View>
      </View>
    );
  }
}
