import React, {useCallback} from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Linking } from "react-native";
import { Divider, Text } from 'react-native-paper';
import {optionGroupsOutput} from "../utils";
import {translateFromObject} from "../i18n";

export default function OrderListItem(props) {
    const { products, client } = props.order;
    const productsLastIndex = products.length - 1;

    const onPhoneClick = useCallback(() => Linking.openURL(`tel:${client.phone}`), [ client.phone ]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>{client.first_name + ' ' + client.last_name}</Text>
                <TouchableWithoutFeedback onPress={onPhoneClick}>
                    <Text>{client.phone}</Text>
                </TouchableWithoutFeedback>
            </View>
            {
                products.map((product, index) => <View key={'product_' + product.id} style={styles.listItemDescription}>
                    <Text>{product.product_count} - {translateFromObject(product.name, 'fr')}</Text>
                    {! product.option_groups || product.option_groups.length === 0 ? <></> :
                        <Text style={styles.optionGroups}>{optionGroupsOutput(product.option_groups)}</Text>
                    }
                    {productsLastIndex === index ? <></> : <Divider/>}
                </View>)
            }
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
        borderColor: "black",
        borderRadius: 15,
    },
    title: {
        flex: 1,
    },
    listItemDescription: {
        flex: 1,
    },
    optionGroups: {
        paddingHorizontal: 15,
    }
});
