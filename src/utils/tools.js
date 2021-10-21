import React from 'react';
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
        name: order.client ? order.client.first_name + ' ' + order.client.last_name : '' };
};
