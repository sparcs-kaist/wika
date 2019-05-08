import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class PlanSecondScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { props } = this;
    return (
      <View>
        <Text>{props.navigation.getParam('foo')}</Text>
      </View>
    );
  }
}
