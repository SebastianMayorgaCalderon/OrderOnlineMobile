import React from "react";
import { Text } from "react-native";

const DefaultLabel = (props) => (
    <Text style = {props.style} >{props.text}</Text>
);

export default DefaultLabel;
