import React, { PureComponent } from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  marginRightLittle: {
    marginRight: 20,
  },
};

export default class PlanFirstScreen extends PureComponent {
  state = {
    type: null,
    origin: null,
    destination: null,
  }

  _onDestinationPress = (type) => {
    if (this.modalRef && this.modalRef.open) {
      this.modalRef.open();
      this.setState({ type });
    }
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
            <MildTouchable style={styles.destinationButton} onPress={() => {}}>
              <Text>다음</Text>
            </MildTouchable>
          </View>
        </View>
        <Modalbox style={CommonStyles.paddingContainer} ref={(ref) => { this.modalRef = ref; }} backdropPressToClose={false}>
          <View style={styles.searchTextInput}>
            <MaterialIcons size={20} style={styles.marginRightLittle} name="search" />
            <TextInput placeholder="Enter for search..." placeholderTextColor="#B5B5B5" />
          </View>
        </Modalbox>
      </View>
    );
  }
}
