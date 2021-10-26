import { React, useState, useEffect, useContext } from 'react';

import {
    Button,
    Box,
    HStack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { CartContext } from '../../CartContext';


function ItemCount(data) {

    const [counter, setCounter] = useState(0);
    const stockmax = 10

    const [cartproduct, setCartProduct, addProduct, removeProduct, clear] = useContext(CartContext);


    const Increment = () => {

        if ((counter < parseInt(stockmax))) {
            setCounter(counter + 1);
        }
    };

    const Decrement = () => {

        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            console.log("Loading' Data");

        }, 2000);
    }, []);

    return (

        <>
            <Box marginX='auto' marginY={6}>


                <HStack marginY={6}>
                    <Button colorScheme="teal" variant="solid" size="sm" onClick={Increment}>+</Button>
                    <Text justifyContent="space-between" color={useColorModeValue('gray.800', 'white')} fontSize="lg" paddingX={2}>{counter}</Text>

                    <Button colorScheme="teal" variant="solid" size="sm" onClick={Decrement}>-</Button>
                </HStack>
                <HStack marginY={6}>

                    <Button marginX='auto' colorScheme="teal" variant="outline" size="lg" onAdd={addProduct(data.items.id, counter, data.items.price, data.items.title)} > Agregar</Button>

                </HStack>

            </Box>
        </>







    );
}



export default ItemCount;
