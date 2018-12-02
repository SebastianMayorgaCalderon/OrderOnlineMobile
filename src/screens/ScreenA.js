import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';


class ScreenA extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <View>
                <Text>Screen A</Text>
            </View>
        )
    }
}

export default connect(null, null)(ScreenA);