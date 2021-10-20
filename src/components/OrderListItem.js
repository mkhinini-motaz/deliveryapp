import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { List } from 'react-native-paper';
import {optionGroupsOutput} from "../utils";
import {translateFromObject} from "../i18n";

export default function OrderListItem(props) {
    const { products, client } = props.order;
    return (
        <View style={styles.container}>
            <Text>aaa</Text>
            <View style={styles.title}>
                <Text>{client.first_name + ' ' + client.last_name}</Text>
            </View>
            {
                products.map(product => <View style={styles.listItemDescription}>
                    <Text>{product.product_count}</Text>
                    <Text>{translateFromObject(product.name, 'fr')}</Text>
                    <Text>{optionGroupsOutput(product.option_groups)}</Text>
                </View>)
            }

            <Text>bbb</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
    },
    listItemDescription: {

    },
});
