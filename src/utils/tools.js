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
