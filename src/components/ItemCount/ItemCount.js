import { React, useState, useEffect, useContext } from 'react';
import {
    Button,
    Box,
    HStack,
    Text,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { CartContext } from '../../CartContext';

import { Link } from 'react-router-dom';


function ItemCount(data) {


    const [counter, setCounter] = useState(0);
    const stockmax = data.items[0].stock

    const [, , addProduct] = useContext(CartContext);

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
            console.log("....");
        }, 0);
    }, []);


    return (
        <>



            <Stack marginY={6} alignItems='center'>

                <Box fontSize="1xl" color={useColorModeValue('gray.800', 'white')}>
                    <Box color={useColorModeValue('gray.800', 'white')} fontSize="2xl">
                        Cantidad disponible {data.items[0].stock - counter}
                    </Box>
                </Box>
                <HStack marginY={6}>
                    <Button colorScheme="teal" variant="solid" size="sm" onClick={Increment}>+</Button>
                    <Text justifyContent="space-between" color={useColorModeValue('gray.800', 'white')} fontSize="lg" paddingX={2}>{counter}</Text>
                    <Button colorScheme="teal" variant="solid" size="sm" onClick={Decrement}>-</Button>
                </HStack>
                <HStack marginY={6}>
                    <Button colorScheme="teal" variant="outline" size="lg" onClick={() => {
                        addProduct(data.items.id, counter, data.items[0].price, data.items[0].title);
                    }} >Agregar</Button> </HStack>
                <HStack marginY={6}>
                    <Link to='/cart'> <Button marginX='auto' colorScheme="teal" variant="outline" size="lg"  >Ir al carrito</Button></Link>
                </HStack>
            </Stack>
        </>
    );
}

export default ItemCount;
