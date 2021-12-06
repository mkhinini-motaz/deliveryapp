import React, {useCallback} from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Linking } from "react-native";
import { Divider, Text, Chip } from 'react-native-paper';
import { formatPhone, optionGroupsOutput } from "../../utils";
import {translateFromObject} from "../../i18n";
import Icon from 'react-native-vector-icons/FontAwesome';
import MoneyFormatter from "../common/MoneyFormatter";
import OrderStatus from "./OrderStatus";

export default function OrderListItem(props) {
    const { products, client, status, total_price: totalPrice } = props.order;
    const productsLastIndex = products.length - 1;
    const onPhoneClick = useCallback(() => Linking.openURL(`tel:${client.phone}`), [ client.phone ]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.name}>{client.first_name + ' ' + client.last_name}</Text>
                <View style={styles.secondLineContainer}>
                    <TouchableWithoutFeedback onPress={onPhoneClick}>
                        <View style={styles.clientPhoneContainer}>
                            <Icon name={'phone'} size={25} color={'green'} />
                            <Text style={styles.clientPhone}>{formatPhone(client.phone)}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <OrderStatus status={status} />
                </View>
            </View>

            {products.map((product, index) =>
                <View key={'product_' + product.id} style={styles.listItemProduct}>
                    <Text style={styles.listItemProductName}>{product.product_count} - {translateFromObject(product.name, 'fr')}</Text>
                    {productsLastIndex === index ? <></> : <Divider/>}
                </View>
            )}

            <View style={styles.productPriceContainer}>
                <MoneyFormatter style={styles.productPrice} value={totalPrice}/>
            </View>
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
    secondLineContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
    },
    name: {
        fontSize: 20,
    },
    clientPhoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    clientPhone: {
        fontSize: 20,
        marginHorizontal: 8,
    },
    listItemProduct: {
        flex: 1,
        marginVertical: 5
    },
    listItemProductName: {
        fontSize: 20,
        marginBottom: 5,
    },
    productPriceContainer: {

    },
    productPrice: {
        fontSize: 25,
        marginTop: 5,
    }
});
