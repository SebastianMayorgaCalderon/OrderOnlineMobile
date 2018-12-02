import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CategoriesScreen extends Component {

  render() {
    return (
      <View>
        <Text> {this.props.categoryList.length} </Text>
      </View>
    );
  }
}
const mapStateToProps = ({categories}) => {
    return {
        categoryList: categories.list
    };
};

export default connect(mapStateToProps)(CategoriesScreen);
