import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startTabs from '../screens';

class LandingScreen extends Component {
    state = {
        RestaurantEmail: '',
        NumTable: ''
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
        return (
            <ImageBackground source={require('../images/HomeBackground.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style = {{flex:1, justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <View style = {{ alignItems:'flex-end', marginRight: 20}}>
                        <Text style = {{fontSize: 30, color: 'white'}}> Bienvenido a OrderOnline</Text>
                    </View>
                    <View style = {{ alignItems :'flex-start', marginLeft: 30}}>
                        <Text style={{marginBottom: 3, color: 'white'}}>Correo Electrónico:</Text>
                        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, backgroundColor: 'white' }}
                                onChangeText={(text) => this.setState({ RestaurantEmail })}
                                value={this.state.text}/>
                        <Text style={{marginBottom: 3, color: 'white'}}>Ingrese el número de mesa:</Text>    
                        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, backgroundColor: 'white' }}
                                onChangeText={(text) => this.setState({ NumTable })}
                                value={this.state.text}/>
                        <Button title="Ingresar" onPress={startTabs}></Button>
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}
export default LandingScreen;