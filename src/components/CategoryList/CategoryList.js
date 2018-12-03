import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import ListItem from "../ListItem/ListItem";

const categoryList = props => {
  return (
    <View>
      <Text>{props.categoryList.legth}</Text>
      <FlatList
        style={styles.listContainer}
        data={props.categoryList}
        keyExtractor={item => `${item.id}`}
        renderItem={info => (
          <ListItem
            categoryName={info.item.name}
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

export default categoryList;
