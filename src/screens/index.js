import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startTabs from '../screens';

class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
        return (
            <View style = {{flex:1, justifyContent:'center', alignItems :'center'}}>
                <Button title="Hola mundo" onPress={startTabs}></Button>
            </View>
        );
    }
}
export default LandingScreen;