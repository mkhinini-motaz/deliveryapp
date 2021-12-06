import React from 'react';

import { Text } from "react-native-paper";

export default function MoneyFormatter(props) {
    return (
        <Text style={props.style}>{
            props.value.toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
                .replace(/( \d{3})$/, ',$1')
                + ' TND'
        }</Text>
    );
}
