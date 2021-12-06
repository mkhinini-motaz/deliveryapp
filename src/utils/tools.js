import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';

import { translateFromObject } from "../i18n";

/**
 * @param optionGroups {array}
 * @param selectedLang {string}
 */
export const optionGroupsOutput = (optionGroups, selectedLang) => {
    return optionGroups.map(optionGroup =>
        optionGroup.options.map(option => {
            return translateFromObject(option.name, selectedLang, true) +
                (! option.quantity ? '' : ' ' + '+'.repeat(option.quantity));
        }).join(', ')
    ).join(', ')
};

/**
 *
 * @param order {object}
 * @returns {{latitude: *, id: *, longitude: *}}
 */
export const orderToCoordinates = (order) => {
    return {
        id: order.id,
        latitude: parseFloat(order.delivery_latitude),
        longitude: parseFloat(order.delivery_longitude),
        name: order.client ? order.client.first_name + ' ' + order.client.last_name : ''
    };
};

/**
 *
 * @param phone {string}
 * @returns {string}
 */
export const formatPhone = (phone) => { // TODO: make international
    return phone.replace(/^(\+216)([0-9]{2})([0-9]{3})([0-9]{3})$/, '$1 $2 $3 $4');
};

export const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
        const auth = await Geolocation.requestAuthorization("always");
console.log({ios: auth})
        if(auth === "granted") {
            // do something if granted...
        }
    }

    if (Platform.OS === 'android') {
        const auth = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
console.log({android: auth})
    }
};
