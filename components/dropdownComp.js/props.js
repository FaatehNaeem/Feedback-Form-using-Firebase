import PropTypes from 'prop-types';


export const DropDownPropTypes = {
    data: PropTypes.array,
    placeholderValue: PropTypes.string
}

export const DropDownDefaultProps = {
    data: [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },

    ],

    placeholderValue: 'Enter'
};
