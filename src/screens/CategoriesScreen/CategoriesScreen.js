import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { selectCategory } from "../../store/actions/index";
import { Navigation } from "react-native-navigation";
import List from "../../components/List/List";
import { TYPE_CATEGORY } from "../../utility/constants";
class CategoriesScreen extends Component {

  itemSelectedHandler = id => {  
    this.props.onCategorySelect(id);
    const category = this.props.categoryList.find((item)=>item.id===id);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'OrderOnlineScreen.DishesScreen',
        passProps: {
          selectedCategory: category
        },
        options: {
          topBar: {
            title: {
              text: category.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <ScrollView>
        <List
          type = {TYPE_CATEGORY}
          itemList={this.props.categoryList}
          onItemSelected={this.itemSelectedHandler}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ categories }) => {
  return {
    categoryList: categories.list,
    selectedCategory: categories.selectedCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCategorySelect: id => dispatch(selectCategory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesScreen);
