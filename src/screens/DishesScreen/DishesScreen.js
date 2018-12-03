import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

class DishesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Dishes view </Text>
      </View>
    );
  }
}

export default connect(null, null)(DishesScreen);