import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import ListItem from "../ListItem/ListItem";

const DishList = props => {
  return (
    <View>
      <FlatList
        style={styles.listContainer}
        data={props.dishList}
        keyExtractor={item => `${item.id}`}
        renderItem={info => (
          <ListItem
            name={info.item.name}
            image = {info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default DishList;