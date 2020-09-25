import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import CartTotal from '../CartTotal/CartTotal.js';

export default function Cart(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
        return <CartItem feature={feature} idx={idx} selected={props.selected}/>
      });

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <CartTotal selected={props.selected}/>
        </section>
        );
}