import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownPropTypes, DropDownDefaultProps } from './props';


const DropdownComponent = ({
    data = [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' }

    ],
    placeholderValue = 'Enter your gender'
}
) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemsStyle}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={value ? value : placeholderValue}
            value={value}
            onFocus={() => setIsFocus(true)}
            onChange={item => {
                setValue(item.label);
            }}

        />
    );
};

export default DropdownComponent;

DropdownComponent.proptypes = DropDownPropTypes
DropdownComponent.proptypes = DropDownDefaultProps


const styles = StyleSheet.create({
    dropdown: {
        marginVertical: 15,
        height: 50,
        width: 250,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    },

    placeholderStyle: {
        fontSize: 20,
        color: 'blue',
    },

    selectedTextStyle: {
        fontSize: 20,
        color: 'blue',
    },

    itemsStyle: {
        fontSize: 16,
        color: 'black',
    },

});