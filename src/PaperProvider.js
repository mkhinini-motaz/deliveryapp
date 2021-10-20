import React from 'react';
import { Provider } from 'react-redux';
import { Provider, DefaultTheme } from 'react-native-paper';


export default function PaperProvider(props) {
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: '#3498db',
            accent: '#f1c40f',
        },
    };

   return (
        <Provider theme={theme}>
            {props.children}
        </Provider>
    );
}
