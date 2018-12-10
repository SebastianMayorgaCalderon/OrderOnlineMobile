import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { TYPE_DISH, TYPE_CATEGORY, TYPE_ORDER_ITEM } from "../../utility/constants";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import DishListItem from "../DishListItem/DishListItem";
import OrderControls from "../OrderControlls/OrderControls";

const List = props => {
    return (
        <ScrollView>
            <FlatList
                style={styles.listContainer}
                data={props.itemList}
                keyExtractor={item => `${item.id}`}
                renderItem={info => getTypeToRender(props, info.item)}
            />
        </ScrollView>
    );
};

const getTypeToRender = (props, item ) => {
    switch(props.type){
        case TYPE_CATEGORY:
            return (
                <CategoryListItem
                    name={item.name}
                    onItemPressed={() => props.onItemSelected(item.id)}/>
            )
        case TYPE_DISH:
            return (
                <DishListItem name={item.name}
                    image={item.image}
                    price={item.price}
                    description = {item.description}
                    onItemPressed={() => props.onItemSelected(item.id)}/>
            )
        case TYPE_ORDER_ITEM:
            return(
                <OrderControls
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    onItemPressed={() => props.onItemSelected(item.id)}
                    onValueChange = {value=> props.onAddRemove(item.id,value)}
                    amount = {item.amount}/>
            )
    }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default List;
