import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Store from './store'
import RootNavigator from "./navigation/RootNavigator";
import PaperProvider from "./PaperProvider";

export default function App(props) {

    return (
        <Store>
            <PaperProvider>
                <RootNavigator />
            </PaperProvider>
        </Store>
    );
}

const styles = StyleSheet.create({
});
