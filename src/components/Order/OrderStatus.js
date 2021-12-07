import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, Checkbox } from "react-native-paper";
import { PRIMARY_COLOR } from "../../constants";
import { translate } from "../../i18n";
import { ORDER } from "../../constants";

export default function OrderStatus(props) {
    const { status, withCheck, isSelected, onPress = () => {} } = props;
    return (
        <View>
            <Chip style={{ ...styles.chip, backgroundColor: ORDER.STATUSES_COLORS[status]}} textStyle={styles.chipText} onPress={onPress}>
                {translate('order:status:' + status, 'fr') /*TODO: dynamic lang*/}
            </Chip>
            {! withCheck ? null : <Checkbox status={isSelected ? 'checked' : 'unchecked'} color={PRIMARY_COLOR} />}
        </View>

    );
};

const styles = StyleSheet.create({
    chip: {
        backgroundColor: PRIMARY_COLOR,
    },
    chipText: {
        fontSize: 20,
    },
});
