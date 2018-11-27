import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { addTodo } from '../store/actions/index';
import { connect } from 'react-redux';


class ScreenA extends Component {
    state = {
        text: ''
    }
    addTodo = () => {
        this.props.onAdd(this.state.text);
    }
    render() {
        return (
            <View>
                <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button title="Add" onPress={()=>this.addTodo()}></Button>

            </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (text) => dispatch(addTodo(text))
    };
};
export default connect(null, mapDispatchToProps)(ScreenA);