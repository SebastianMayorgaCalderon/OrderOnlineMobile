import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RF from "react-native-responsive-fontsize";


const CategoryListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.name}</Text>
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
    fontSize: RF(3.5)
  },

});

export default CategoryListItem;
