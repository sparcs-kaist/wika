import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CommonStyles from '../styles/CommonStyles';

const styles = {
  header: {
    backgroundColor: '#696969',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  body: {
    flex: 1,
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  bodyContent2: {
    flex: 5,
    alignItems: 'center',
    paddingTop: 10,
  },
  name: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },
  details: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },
};

export default class MyPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={CommonStyles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>+65 9155 2930</Text>
          </View>
          <View style={styles.bodyContent2}>
            <View style={{ backgroundColor: '#DCDCDC', width: 350, height: 350, paddingTop: 10, borderRadius: 10 }}>
              <Text style={styles.details}>User Travel History</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
