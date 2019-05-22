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
  spaceBetween: { justifyContent: 'space-between' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  places: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center',
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
            <Text style={CommonStyles.labelText}>출발지</Text>
            <MildTouchable style={CommonStyles.searchBox} onPress={() => this._onPlacePress('origin')}>
              <Text style={CommonStyles.placeholderText}>{origin === null ? '출발지를 설정하세요' : origin}</Text>
            </MildTouchable>
            <Text style={CommonStyles.labelText}>도착지</Text>
            <MildTouchable style={CommonStyles.searchBox} onPress={() => this._onPlacePress('destination')}>
              <Text style={CommonStyles.placeholderText}>{destination === null ? '도착지를 설정하세요' : destination}</Text>
            </MildTouchable>
          </View>
          <View>
            <MildTouchable style={CommonStyles.button} disabled={origin && destination} onPress={this._navigateSecond}>
              <Text style={CommonStyles.buttonText}>다음</Text>
            </MildTouchable>
          </View>
        </View>

        <Modalbox style={CommonStyles.paddingContainer} ref={(ref) => { this.modalRef = ref; }} backdropPressToClose={false}>
          <View style={[CommonStyles.searchBox, styles.row]}>
            <TextInput style={CommonStyles.container} placeholder="Search" placeholderTextColor="#B5B5B5" value={placeSearchText} onChangeText={e => this.setState({ placeSearchText: e })} />
            <MaterialIcons size={20} style={styles.marginRightLittle} name="search" />
          </View>
          {places.filter(e => searcher.search(e) === 0).map(e => (
            <MildTouchable key={e} style={styles.places} onPress={() => this._onPlaceConfirm(e)}>
              <Text style={CommonStyles.text}>{e}</Text>
            </MildTouchable>
          ))}
        </Modalbox>
      </View>
    );
  }
}
