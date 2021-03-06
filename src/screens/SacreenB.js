import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import H1 from '../components/h1';

class ScreenB extends Component {
    constructor(props) {
        super(props);
    }
    render() {  
        const lista= this.props.todo.map((value)=><H1 key = {value.key} text ={value.text}/>);
        return ( 
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Pantalla B </Text>
                {lista}
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
      todo: state.todo.todo
    };
  };
const styles = StyleSheet.create({
    selectedTodo: {
        backgroundColor: '#73d67f'
    }
});
export default connect(mapStateToProps)(ScreenB);