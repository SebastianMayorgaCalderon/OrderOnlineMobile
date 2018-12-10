import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TYPE_ORDER_ITEM, TYPE_DISH } from "../../utility/constants";
import { removeDish, addDish } from "../../store/actions/index";
import List from "../../components/List/List";
import { Card } from 'react-native-elements'


class OrderScreen extends Component {
  onAddRemove = (itemType, id, value) => {
    switch (itemType) {
      case TYPE_DISH:
        if (
          this.props.dishOrderList.find(item => item.id == id).amount < value
        ) {
          this.props.onAddDish({id});
        } else {
          this.props.onRemoveDish(id);
        }
        break;
    }
  };

  onItemSelected = id => {
    console.log(id);
  };

  render() {
    const content =
      this.props.dishOrderList.length === 0 &&
      this.props.offerOrderList.length === 0 &&
      this.props.comboOrderList.length === 0 ? (
        <Text>No hay nada en la orden por ahora</Text>
      ) : (
        <Card title="Platillos / Bebidas">
          <List
            type={TYPE_ORDER_ITEM}
            itemList={this.props.dishOrderList}
            onAddRemove={(id, value) => this.onAddRemove(TYPE_DISH, id, value)}
          />
        </Card>
      );

    return (
      <View
        style={
          this.props.dishOrderList.length === 0 &&
          this.props.offerOrderList.length === 0 &&
          this.props.comboOrderList.length === 0
            ? [styles.container, styles.horizontal]
            : null
        }
      >
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  errorMessage: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red"
  }
});

const mapStateToProps = ({ order }) => {
  return {
    dishOrderList: order.dishes,
    offerOrderList: order.offers,
    comboOrderList: order.combos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddDish: id => dispatch(addDish(id)),
    onRemoveDish: id => dispatch(removeDish(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderScreen);
