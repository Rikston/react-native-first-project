import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { r: false, s: 'rikston', e: 'ASd' };
    setTimeout(() => {
      this.setState(e => ({ r: !e.r }));
    }, 1000);
  }
  render() {
    if (!this.state.r) {
      return null;
    }
    return (
      <View>
        <Text>MyComponent {this.r}</Text>
        <Text>{this.props.momento}</Text>
        <Text>{this.state.s}</Text>
        <Text>{this.state.e}</Text>
        <Button
          onPress={() => {
            this.setState(q => ({ e: `${q.e}A` }));
          }}
          title="Press Me"
        />
      </View>
    );
  }
}
export { MyComponent };
// AppRegistry.registerComponent('MyComponent', () => MyComponent);
