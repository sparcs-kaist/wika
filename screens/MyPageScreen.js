import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class MyPageScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MyPageScreen </Text>
      </View>
    );
  }
}
