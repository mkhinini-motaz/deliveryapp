import React, {useCallback} from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Linking } from "react-native";
import { Divider, Text } from 'react-native-paper';
import {optionGroupsOutput} from "../utils";
import {translateFromObject} from "../i18n";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderListItem(props) {
    const { products, client } = props.order;
    const productsLastIndex = products.length - 1;

    const onPhoneClick = useCallback(() => Linking.openURL(`tel:${client.phone}`), [ client.phone ]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>{client.first_name + ' ' + client.last_name}</Text>
                <TouchableWithoutFeedback onPress={onPhoneClick}>
                    <View style={styles.clientPhoneContainer}>
                        <Icon name={'phone-square'} size={25} color={'green'} />
                        <Text style={styles.clientPhone}>{client.phone}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {products.map((product, index) =>
                <View key={'product_' + product.id} style={styles.listItemProduct}>
                    <Text style={styles.listItemProductName}>{product.product_count} - {translateFromObject(product.name, 'fr')}</Text>
                    {productsLastIndex === index ? <></> : <Divider/>}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#acacac",
        borderRadius: 15,
    },
    title: {
        flex: 1,
    },
    clientPhoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    clientPhone: {
        marginHorizontal: 8,
    },
    listItemProduct: {
        flex: 1,
        marginVertical: 5
    },
    listItemProductName: {
        marginBottom: 5,
    },
});
