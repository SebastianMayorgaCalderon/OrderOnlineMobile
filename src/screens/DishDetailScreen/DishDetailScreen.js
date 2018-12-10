import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { deselectDish, removeDish, addDish } from "../../store/actions/index";
import NumericInput from "../../components/NumeircInput/NumericInput";

class DishDetail extends Component {
  state = {
    viewType: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    value: 0
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewType: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
    this.props.onGoBack();
  }

  onCancel = () => {
    Navigation.dismissModal(this.props.componentId);
  };
  test = number => {
    console.log(number);
    this.setState({ value: number });
    console.log(this.state.value);
  };

  addDishToOrderHandler  = () => {
    this.props.onAddDish({...this.props.dish});
  }

  removeDishFromOrderHandler = () =>{
    this.props.onRemoveDish(this.props.dish.id);
  }
  onAddOrRemoveDish = (value) => {
      if(!this.props.dishList.find(item=> item.id === this.props.dish.id)) {
          this.addDishToOrderHandler();
      }else{
        if(this.props.dishList.find(item=> item.id === this.props.dish.id).amount<value){
          this.addDishToOrderHandler();
        }else{
          this.removeDishFromOrderHandler();
        }
      }
  } 
  render() {
    return (
      <View style={styles.container}>
        <View
          style={
            this.state.viewType === "portrait"
              ? styles.portraitWrapper
              : styles.landscapeWrapper
          }>
          <Image
            source={{ uri: `data:image/jpg;base64,${this.props.dish.image}` }}
            style={
              this.state.viewType === "portrait"
                ? styles.dishImagePortrait
                : styles.dishImageLandscape
            }/>
          <View
            style={
              this.state.viewType === "portrait"
                ? styles.dishDescriptionPortrait
                : styles.dishDescriptionLandscape
            }>
            <Text style={styles.dishName}>{this.props.dish.name}</Text>
            <Text style={styles.dishDescription}>
              {this.props.dish.description}
            </Text>
            <Text style={styles.dishDescription}>
              {this.props.dish.price}$
            </Text>
            <NumericInput
              value={this.props.dishList.filter(item=> item.id === this.props.dish.id).length === 0? 0 : this.props.dishList.find(item=> item.id === this.props.dish.id).amount}
              onValueChange={value => this.onAddOrRemoveDish(value)}/>
            <TouchableOpacity onPress={this.onCancel}>
              <View style={styles.button}>
                <Icon
                  size={30}
                  name={
                    Platform.OS === "android"
                      ? "md-arrow-back"
                      : "ios-arrow-back"
                  }
                  color="red"/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1,
    flexDirection: "column"
  },
  dishImagePortrait: {
    width: "100%",
    height: 200
  },
  dishImageLandscape: {
    width: "60%",
    height: 150
  },
  dishName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  dishDescription: {
    textAlign: "center",
    fontSize: 16
  },
  button: {
    alignItems: "center"
  },
  dishDescriptionLandscape: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  dishDescriptionPortrait: {
    flex: 0,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  landscapeWrapper: {
    flexDirection: "row"
  },
  portraitWrapper: {
    flexDirection: "column"
  }
});

const mapStateToProps = ({ dishes, order }) => {
  return {
    errorMsj: dishes.errorMessage,
    loading: dishes.loading,
    dishList: order.dishes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGoBack: id => dispatch(deselectDish(id)),
    onErrorFound: error => dispatch(setErrorMessage(error)),
    onLoadingDishes: value => dispatch(setLoading(value)),
    onRemoveDish: id => dispatch(removeDish(id)),
    onAddDish: dish => dispatch(addDish(dish))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishDetail);
