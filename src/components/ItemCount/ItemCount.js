import { React, useState, useEffect } from 'react';

import {
    Button,
    Box,
    HStack,
    Text,
    /*          Modal,
            ModalBody,
            ModalContent,
            ModalHeader,
            ModalCloseButton,
            ModalFooter,
            ModalOverlay, 
        useDisclosure, */

    useColorModeValue
} from '@chakra-ui/react';



function ItemCount(data) {

    const [counter, setCounter] = useState(0);
    const stockmax = 10
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

    const OnClick = () => {
        data.onAdd(counter)
    }

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

                    <Button marginX='auto' colorScheme="teal" variant="outline" size="lg" onClick={OnClick} > Agregar</Button>

                </HStack>



                {/* 
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{props.items.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            Compraste {counter}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="teal" variant="outline" size="sm" onClick={onClose}>
                                Cerrar
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal> */}
            </Box>
        </>







    );
}



export default ItemCount;
