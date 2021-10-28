import { React, useState, useEffect, useContext } from 'react';
import {
    Button,
    Box,
    HStack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { CartContext } from '../../CartContext';


function Cart(data) {


    const [cartproduct, setCartProduct, addProduct, removeProduct, clear, isInCart] = useContext(CartContext);


    useEffect(() => {
        setTimeout(() => {
            console.log("Loading' Data");

        }, 2000);
    }, []);

    console.log(cartproduct);

    return (
        <>
            <Box marginX='auto' marginY={6}>
                <HStack marginY={6}>

                </HStack>
                <HStack marginY={6}>


                    <Button marginX='auto' colorScheme="teal" variant="outline" size="lg" onClick={() => {


                    }} > Agregar</Button>
                </HStack>


            </Box>
        </>
    );
}

export default Cart;
