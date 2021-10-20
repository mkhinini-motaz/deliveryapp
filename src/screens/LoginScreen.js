import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from "react-redux";
import {attemptShopUserLogin} from "../store/actions";

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.screen}>
            <KeyboardAwareScrollView>
                <View>
                    <TextInput
                        label="Phone"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <View>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Button mode="contained" onPress={() => dispatch(attemptShopUserLogin({ phone, password }))}>
                        Login
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
