import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RF from "react-native-responsive-fontsize";

import { Card, Button, Icon } from 'react-native-elements'

const DishListItem = props => (
    <Card title={props.name} image={{ uri: `data:image/jpg;base64,${props.image}` }}>
      <Text style={styles.text}>
        {props.description}
      </Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        backgroundColor="#03A9F4"
        buttonStyle={styles.button}
        onPress={props.onItemPressed}
        title="Ver mas"
      />
    </Card>
);
const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  text:{
    marginBottom: 10,
    fontSize: RF(2.5),
  }
});
export default DishListItem;
