import React from 'react';
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { attemptShopUserLogin } from "../store/actions";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants";

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [phone, setPhone] = React.useState('+21611111111');
    const [password, setPassword] = React.useState('azerty');
    const shopUserLoginIsLoading = useSelector(state => state.UserReducer.shopUserLoginIsLoading);

    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <View style={styles.section}>
                    {/* TODO: translate label */}
                    <TextInput
                        label="Phone"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <View style={styles.section}>
                    {/* TODO: translate label */}
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.section}>
                    <Button mode="contained" onPress={() => dispatch(attemptShopUserLogin({ phone, password }))}>
                        {/* TODO: translate */}
                        {! shopUserLoginIsLoading ? 'Login' : <ActivityIndicator animating={true} color={SECONDARY_COLOR} />}
                    </Button>
                </View>
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
    container: {
        width: '100%',
        height: 250,
        alignItems: 'center',
    },
    section: {
        flex: 1,
        width: '80%'
    }
});
