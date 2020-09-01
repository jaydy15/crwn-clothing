import React from 'react';
import CustomButton from '../custon-button/CustomButton';
import './cart.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
