import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import axios from "../../utility/axios-config";
import { HEADER, SCREEN_BASE_NAME } from "../../utility/constants";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import {
  addAllDishes,
  selectDish,
  setErrorMessage,
  setLoading
} from "../../store/actions";
import DishList from "../../components/DishList/DishList";

class DishesScreen extends Component {

  componentDidMount() {
    this.props.onLoadingDishes(true);
    const endpoint = `/dishes-by-category?categoryId=${
      this.props.selectedCategory.id
    }`;
    axios
      .get(endpoint, HEADER)
      .then(response => {
        this.props.onLoadingDishes(false);
        if (response.data.length === 0) {
          this.props.onErrorFound(
            "No hay platillos Activos para esa categoria"
          );
        } else {
          this.props.onDishesLoaded(response.data);
        }
      })
      .catch(function(error) {
        alert(error);
      });
  }

  dishSelectedHandler = (id) => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: `${SCREEN_BASE_NAME}DisheDetailScreen`,
            passProps: {
              dish: this.props.dishList.find(item => item.id === id)
            },
            options: {
              topBar: {
                title: {
                  text: this.props.dishList.find(item => item.id === id).name
                }
              }
            }
          }
        }]
      }
    });
  }

  renderDishList = () => {
    return (
      <DishList
        dishList={this.props.dishList}
        onItemSelected={id => this.dishSelectedHandler(id)}
      />
    );
  };

  render() {
    const content = this.props.loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : this.props.dishList == null ? (
      <Text>KKCK</Text>
    ) : (
      this.renderDishList()
    );

    return (
      <View
        style={
          this.props.loading
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
  }
});
const mapStateToProps = ({ dishes }) => {
  return {
    dishList: dishes.list,
    errorMsj: dishes.errorMessage,
    loading: dishes.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDishesLoaded: list => dispatch(addAllDishes(list)),
    onDishSelect: id => dispatch(selectDish(id)),
    onErrorFound: error => dispatch(setErrorMessage(error)),
    onLoadingDishes: value => dispatch(setLoading(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesScreen);
