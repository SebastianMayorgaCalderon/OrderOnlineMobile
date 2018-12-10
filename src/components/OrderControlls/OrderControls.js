import React from "react";
import { View, StyleSheet,TouchableOpacity,Text, Image } from "react-native";
import RF from "react-native-responsive-fontsize";

import NumericInput from '../NumeircInput/NumericInput';

const OrderControls = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        resizeMode="cover"
        source={{ uri: `data:image/jpg;base64,${props.image}` }}
        style={styles.image}/>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$ ${props.price*props.amount}`}</Text>
        <NumericInput value = {props.amount} onValueChange = {props.onValueChange} size = {18}/>
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: RF(2.5)
  },
  priceContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    textAlign: "right",
    fontSize: RF(2.5)
  },
  image: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});

export default OrderControls;
