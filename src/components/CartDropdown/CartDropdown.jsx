import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
