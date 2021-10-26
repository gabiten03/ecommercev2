import React, { useState, createContext } from 'react';

export const CartContext = createContext();
let qty;
export const CartProvider = ({ children }) => {

    const [cartproduct, setCartProduct] = useState();

    const clearState = () => {
        setCartProduct([]);
    };

    const addProduct = (id, quantity, price, title) => {

        console.log(`${id} ${quantity} ${price} ${title}`)

        if (qty !== quantity) {

            setCartProduct([{ id, quantity, price, title }

            ]);
            qty = quantity
        }
    }

    const removeProduct = (id) => { }
    const clear = () => {
        setCartProduct([]);
    };

    const isInCart = (id) => {
        var item = cartproduct.find(item => item.id === id);

    }


    return (
        <CartContext.Provider value={[cartproduct, setCartProduct, addProduct, removeProduct, clear,]}>
            {children}
        </CartContext.Provider>
    );
}