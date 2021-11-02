import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    /* useEffect(() => {
        console.log(cartproduct);
    }
        , []); */

    const [cartproduct, setCartProduct] = useState();

    const clearState = () => {
        setCartProduct([]);
    };

    const addProduct = (id, quantity, price, title) => {
        console.log(`${id} ${quantity} ${price} ${title}`)

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
                console.log('not in cart')
                setCartProduct([...cartproduct, { id, quantity, price, title }])
            }
        }
    }


    const removeProduct = (id) => {

        const newCartProduct = cartproduct.filter(item => item.id !== id);
        setCartProduct(newCartProduct);
        console.log(newCartProduct)

    }

    const clear = () => {
        setCartProduct([]);
    };
    const totalItems = () => {
        let total = 0;
        if ((cartproduct !== undefined) && (typeof cartproduct !== 'number')) {
            cartproduct.map((val) => {
                total += val.quantity;
            })

        }
        return total;
    }

    const totalPrice = () => {
        let total = 0;
        if (cartproduct !== undefined) {
            cartproduct.map((val) => {
                total += parseInt(val.quantity) * parseFloat(val.price);
            })

        }
        return total;
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
                })
                return isInCart;
            }
        }

    }


    return (
        <CartContext.Provider value={[cartproduct, setCartProduct, addProduct, removeProduct, clear, isInCart, totalItems, totalPrice]}>
            {children}
        </CartContext.Provider>
    );
}