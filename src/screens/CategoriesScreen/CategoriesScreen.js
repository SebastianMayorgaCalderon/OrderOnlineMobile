import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { selectCategory } from "../../store/actions/index";
import CategoryList from "../../components/CategoryList/CategoryList";
import PropTypes from 'prop-types';
import { Navigation } from "react-native-navigation";
class CategoriesScreen extends Component {

  itemSelectedHandler = id => {
    
    this.props.onCategorySelect(id);
    const category = this.props.categoryList.find((item)=>item.id===id);
 
    Navigation.push(this.props.componentId, {
      component: {
        name: 'OrderOnlineScreen.DishesScreen',
        passProps: {
          text: category
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
        <CategoryList
          categoryList={this.props.categoryList}
          onItemSelected={this.itemSelectedHandler}
        />
        <Text>
          {this.props.selectedCategory
            ? this.props.selectedCategory.name
            : null}
        </Text>
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
