import React, { PureComponent } from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modalbox from 'react-native-modalbox';
import * as Hangul from 'hangul-js';
import MildTouchable from '../components/MildTouchable';
import CommonStyles from '../styles/CommonStyles';

const styles = {
  map: {
    height: 250,
    backgroundColor: 'gray',
  },
  placeButton: {
    height: 50,
    backgroundColor: '#D5E3E9',
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
  },
  placeText: {
    fontSize: 16,
    color: '#97BDC8',
  },
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
  tagText: {
    fontSize: 12,
    color: '#143441',
    marginVertical: 10,
  },
  nextButton: {
    height: 50,
    backgroundColor: '#143441',
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  spaceBetween: { justifyContent: 'space-between' },
  marginRightLittle: {
    marginRight: 20,
  },
  marginBottomLittle: {
    marginBottom: 20,
  },
};

export default class PlanFirstScreen extends PureComponent {
  state = {
    type: null,
    origin: null,
    destination: null,
    places: ['기계동 택시승강장', '대전청사', '대전역'],
    placeSearchText: '',
  }

  _onPlacePress = (type) => {
    if (this.modalRef && this.modalRef.open) {
      this.modalRef.open();
      this.setState({ type });
    }
  }

  _onPlaceConfirm = (e) => {
    if (this.modalRef && this.modalRef.close) {
      this.modalRef.close();
      this.setState(prevState => ({ [prevState.type]: e }));
    }
  }

  _navigateSecond = () => {
    const { navigation } = this.props;
    const { origin, destination } = this.state;
    navigation.navigate('PlanSecond', { origin, destination });
  }

  render() {
    const { origin, destination, places, placeSearchText } = this.state;
    const searcher = new Hangul.Searcher(placeSearchText);
    return (
      <View style={CommonStyles.container}>
        <View style={styles.map} />
        <View style={[CommonStyles.paddingContainer, styles.spaceBetween]}>
          <View style={styles.spaceBetween}>
            <Text style={styles.tagText}>출발지</Text>
            <MildTouchable style={styles.placeButton} onPress={() => this._onPlacePress('origin')}>
              <Text style={styles.placeText}>{origin === null ? '출발지를 설정하세요' : origin}</Text>
            </MildTouchable>
            <Text style={styles.tagText}>도착지</Text>
            <MildTouchable style={styles.placeButton} onPress={() => this._onPlacePress('destination')}>
              <Text style={styles.placeText}>{destination === null ? '도착지를 설정하세요' : destination}</Text>
            </MildTouchable>
          </View>
          <View>
            <MildTouchable style={styles.nextButton} disabled={origin && destination} onPress={this._navigateSecond}>
              <Text style={styles.nextText}>다음</Text>
            </MildTouchable>
          </View>
        </View>
        <Modalbox style={CommonStyles.paddingContainer} ref={(ref) => { this.modalRef = ref; }} backdropPressToClose={false}>
          <View style={styles.searchTextInput}>
            <MaterialIcons size={20} style={styles.marginRightLittle} name="search" />
            <TextInput placeholder="Enter for search..." placeholderTextColor="#B5B5B5" value={placeSearchText} onChangeText={e => this.setState({ placeSearchText: e })} />
          </View>
          {places.filter(e => searcher.search(e) === 0).map(e => (
            <MildTouchable key={e} style={[styles.placeButton, styles.marginBottomLittle]} onPress={() => this._onPlaceConfirm(e)}>
              <Text style={styles.placeText}>{e}</Text>
            </MildTouchable>
          ))}
        </Modalbox>
      </View>
    );
  }
}
