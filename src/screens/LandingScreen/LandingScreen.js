import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import startTabs from '../../screens';
import { addAllCategory, addEmail } from '../../store/actions/index'
import { connect } from 'react-redux';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import axios from '../../utility/axios-config';
import { HEADER } from '../../utility/constants';
import validate from '../../utility/validation';
import DefaultLabel from '../../components/UI/DefaultLabel/DefaultLabel';

class LandingScreen extends Component {
    state = {
        controls: {
            email: {
                value: 'sebasmayorga7@gmail.com',
                valid: false,
                touched: false,
                validationRules: {
                    isEmail: {
                        isEmail: true
                    }
                }
            },
            numTable: {
                value: '5',
                valid: false,
                touched: false,
                validationRules: {
                    isNumeric: {    
                        isNumeric: true
                    }
                }
            }
        },
    }
    updateInputState = (key, value) =>{
        let connectedValue = {};
        this.setState(prevState => {
          return {
            controls: {
              ...prevState.controls,
              [key]: {
                ...prevState.controls[key],
                value: value,
                touched: true,
                valid: validate(
                  value,
                  prevState.controls[key].validationRules,
                  connectedValue
                )
              },
            }
          };
        });
    }
    constructor(props) {
        super(props);
    }

    obtainCategories=()=> {
        const endpoint = `/categories?admin=${this.state.controls.email.value}`;
        axios.get(endpoint, HEADER).then((response) => {
            if(response.data.length===0){
                alert('Ese usuario no tiene ninguna categoria asociada');
            }else{
                this.props.saveRestaurantAdminEmail(this.state.controls.email.value);
                this.props.addAllCategory(response.data);
                startTabs();
            }
        }).catch(function (error) {
            alert(error)
        })
    }
    render() {
        return (
            <ImageBackground source={require('../../images/HomeBackground.jpeg')} style={styles.imageContainer}>
                <View style={styles.container}>
                    <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                        <Text style={{ fontSize: 30, color: 'white' }}> Bienvenido a OrderOnline</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', marginLeft: 30 }}>
                        <DefaultLabel text = {'Correo Electrónico:'} style={styles.label}/>
                        <DefaultInput  
                            style={styles.input}
                            touched = {this.state.controls.email.touched}
                            onChangeText={(val) => this.updateInputState('email',val)}
                            value={this.state.controls.email.value}
                            valid = {this.state.controls.email.valid}/>
                        <DefaultLabel text = {'Numero de mesa:'} style={styles.label}/>
                        <DefaultInput  
                            style={styles.input}
                            touched = {this.state.controls.numTable.touched}
                            keyboardType = 'numeric'
                            onChangeText={(val) => this.updateInputState('numTable',val)}
                            value={this.state.controls.numTable.value}
                            valid = {this.state.controls.numTable.valid}/>
                        <Button title='Ingresar' onPress={this.obtainCategories} ></Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)' 
    },
    imageContainer: {
        width: '100%', height: '100%'
    },
    label:{
        marginBottom: 3, 
        color: 'white'
    },
    input:{
        height: 40, 
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10, 
        backgroundColor: 'white'
    }
  });

const mapStateToProps = (state) => {
    return {
        categories: state.categories.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addAllCategory: (categories) => dispatch(addAllCategory(categories)),
        saveRestaurantAdminEmail: (email) => dispatch(addEmail(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);