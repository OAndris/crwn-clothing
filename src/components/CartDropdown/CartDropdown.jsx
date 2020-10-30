import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CartDropdown;
