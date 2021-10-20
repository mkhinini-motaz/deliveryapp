import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from "react-redux";
import {attemptShopUserLogin} from "../store/actions";

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [phone, setPhone] = React.useState('+21611111111');
    const [password, setPassword] = React.useState('azerty');

    return (
        <View style={styles.screen}>
            <View style={styles.section}>
                <TextInput
                    label="Phone"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>
            <View style={styles.section}>
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.section}>
                <Button mode="contained" onPress={() => dispatch(attemptShopUserLogin({ phone, password }))}>
                    Login
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    section: {
        flex: 1,
        width: '80%'
    }
});
