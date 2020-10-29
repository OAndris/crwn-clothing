import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className="CustomButton" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
