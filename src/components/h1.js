import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
const H1 = (props)=> {
    return (
        <Text style = {styles.h1}> {props.text}</Text>
    )
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 50
    },   
});
export default H1;