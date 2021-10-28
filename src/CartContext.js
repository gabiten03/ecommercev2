import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartproduct, setCartProduct] = useState();

    const clearState = () => {
        setCartProduct([]);
    };

    const addProduct = (id, quantity, price, title) => {
        console.log(`${id} ${quantity} ${price} ${title}`)
        setCartProduct([{ id, quantity, price, title }
        ]);
        return true

    }

    const removeProduct = (id) => { }
    const clear = () => {
        setCartProduct([]);
    };

    const isInCart = (id) => {
        let i;
        console.log(cartproduct)
        cartproduct.some((val) => {
            if (val.id === id) { i = true } else { i = false }
            console.log(i)
            return i;
        });

    }


    return (
        <CartContext.Provider value={[cartproduct, setCartProduct, addProduct, removeProduct, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    );
}