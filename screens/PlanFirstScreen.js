import React, { PureComponent } from 'react';
import { Text, TextInput, View } from 'react-native';
import Modalbox from 'react-native-modalbox';
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
  searchTextInput: {
    backgroundColor: '#FAF9F9',
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
};

export default class PlanFirstScreen extends PureComponent {
  state = {
    isOpen: false,
    type: null,
    origin: null,
    destination: null,
  }

  _onDestinationPress = (type) => {
    this.setState({ isOpen: true, type });
  }

  _onDestinationDismiss = () => {}

  _onDestinationConfirm = (destination) => {
    this.setState(prevState => ({ [prevState.type]: destination }));
  }

  _navigateSecond = () => {
    const { props } = this;
    props.navigation.navigate('PlanSecond', { origin: 'bar', destination: '' });
  }

  render() {
    const { state } = this;
    console.log(state.isOpen);
    return (
      <View style={CommonStyles.container}>
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
            <MildTouchable style={styles.destinationButton} onPress={this._navigateSecond}>
              <Text>다음</Text>
            </MildTouchable>
          </View>
        </View>
        <Modalbox style={CommonStyles.paddingContainer} isOpen={state.isOpen} onClosed={this._onDestinationDismiss} backdropPressToClose={false}>
          <View style={styles.searchTextInput}>
            <TextInput placeholder="Enter for search..." placeholderTextColor="#B5B5B5" />
          </View>
        </Modalbox>
      </View>
    );
  }
}
