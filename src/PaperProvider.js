import React from 'react';
import { Provider } from 'react-native-paper';
import { THEME } from "./constants";


export default function PaperProvider(props) {

   return (
        <Provider theme={THEME}>
            {props.children}
        </Provider>
    );
}
