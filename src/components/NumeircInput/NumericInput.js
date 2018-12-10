import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const NumericInput = props => (
  <View style = {styles.container}>
    <TouchableOpacity onPress={()=>props.onValueChange(props.value - 1)} disabled = {props.value==0}>
      <View style={styles.button}>
        <Icon
          size={props.size? props.size:30}
          name={Platform.OS === "android" ? "md-remove" : "ios-remove"}
          color="#2dcaff"
        />
      </View>
    </TouchableOpacity>
    <Text style ={[styles.text,{fontSize: props.size? props.size:30}]}>{props.value}</Text>
    <TouchableOpacity onPress={()=>props.onValueChange(props.value + 1)}>
      <View style={styles.button}>
        <Icon
          size={props.size? props.size:30}
          name={Platform.OS === "android" ? "md-add" : "ios-add"}
          color="#2dcaff"
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    container: {    
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems: 'center',
    },
    text:{
      fontSize:30
    },
    button: {
      alignItems: "center",
      margin:12
    }
  });
  

export default NumericInput;
