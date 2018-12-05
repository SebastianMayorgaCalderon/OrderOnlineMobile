import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      {props.image ? (
        <Image
          resizeMode="cover"
          source={{uri: `data:image/jpg;base64,${props.image}`}}
          style={styles.image}
        />
      ) : null}
      <Text style = {styles.text}>{props.name}</Text>
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
    fontSize: 18
  },
  image: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});

export default listItem;
