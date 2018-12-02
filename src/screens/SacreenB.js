import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


class ScreenB extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Pantalla B </Text>
            </View>
        );
    }
}
const mapStateToProps = ({auth}) => {
    return {
        email: auth.email
    };
};
const styles = StyleSheet.create({
    selectedTodo: {
        backgroundColor: '#73d67f'
    }
});
export default connect(mapStateToProps)(ScreenB);