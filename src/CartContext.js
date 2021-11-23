import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    useEffect(() => {
        console.log('...');
    }
        , []);

    const [cartproduct, setCartProduct] = useState();
    const [keyword, setKeyword] = useState('');

    console.log(keyword)
    const addProduct = (id, quantity, price, title) => {

        console.log(cartproduct);
        if ((cartproduct === undefined) || (typeof (cartproduct) === 'number')) {
            setCartProduct([{ id, quantity, price, title }])
        } else {
            if (isInCart(id) === true) {
                let newCartProduct = cartproduct.map(item => {
                    if (item.id === id) {
                        item.quantity = quantity;
                    }
                    return item;
                });
                setCartProduct(newCartProduct);

            } else {
                setCartProduct([...cartproduct, { id, quantity, price, title }])
            }
        }

    }

    const addOneProduct = (id, quantity, price, title) => {

        console.log(cartproduct);
        if ((cartproduct === undefined) || (typeof (cartproduct) === 'number')) {
            setCartProduct([{ id, quantity, price, title }])
        } else {
            if (isInCart(id) === true) {
                let newCartProduct = cartproduct.map(item => {
                    if (item.id === id) {
                        item.quantity = item.quantity + 1;
                    }
                    return item;
                });
                setCartProduct(newCartProduct);

            } else {
                setCartProduct([...cartproduct, { id, quantity, price, title }])
            }
        }
        console.log(cartproduct);
    }


    const isInCart = (id) => {
        if (typeof cartproduct === 'number') {
            setCartProduct([]);
        } else {
            if (cartproduct !== undefined) {
                let isInCart = false;
                cartproduct.map((val) => {
                    if (val.id === id) {
                        isInCart = true;

                    }
                    return isInCart;
                })
                return isInCart;
            }
        }
    }
    return (
        <CartContext.Provider value={[cartproduct, setCartProduct, addProduct, isInCart, keyword, setKeyword, addOneProduct]}>
            {children}
        </CartContext.Provider>
    );
}