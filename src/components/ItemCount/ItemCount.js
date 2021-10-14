import { React, useState, useEffect } from 'react';

import {
    Button,
    Box,
    HStack,
    Text,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
    ModalFooter,
    ModalOverlay,
    useColorModeValue
} from '@chakra-ui/react';



function ItemCount(props) {

    const [counter, setCounter] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure()


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

                    <Button marginX='auto' colorScheme="teal" variant="outline" size="lg" onClick={onOpen} > Agregar</Button>

                </HStack>




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
                </Modal>
            </Box>
        </>







    );
}



export default ItemCount;
