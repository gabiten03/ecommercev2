import { React, useContext, useEffect } from 'react';
import {
    Button,
    Box,
    Text,
    Table,
    Thead,
    Tfoot,
    Tr,
    Th,

} from "@chakra-ui/react"

import { CartContext } from '../../CartContext';



function Cart() {


    const [cartproduct, setCartProduct,] = useContext(CartContext);
    const totalPrice = () => {
        let total = 0;
        if (cartproduct !== undefined) {
            cartproduct.map((val) => {
                total += parseInt(val.quantity) * parseFloat(val.price);
            })

        }
        return total.toFixed(2);
    }
    const removeProduct = (id) => {

        const newCartProduct = cartproduct.filter(item => item.id !== id);
        setCartProduct(newCartProduct);

    }
    useEffect(() => {
        setTimeout(() => {
            console.log("Loading' Data");

        }, 2000);
    }, []);

    console.log(cartproduct);
    if ((cartproduct === undefined) || (typeof cartproduct === 'number') || (totalPrice() == 0)) {

        return (
            <Box padding={20} justifyContent='center'>
                <Text>No hay productos en el carrito</Text>
            </Box>
        )
    } else {
        return (
            <Box marginX='auto' marginY={6}>

                <Table variant="simple">

                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th isNumeric>Precio Unitario</Th>
                            <Th isNumeric>Total</Th>
                            <Th ></Th>
                        </Tr>

                        {cartproduct.map((item, index) => {
                            return (
                                <Tr key={index}>
                                    <Th>{item.title}</Th>
                                    <Th>{item.quantity}</Th>
                                    <Th>{item.price}</Th>
                                    <Th >{(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</Th>
                                    <Button onClick={() => removeProduct(item.id)}>Eliminar</Button>
                                </Tr>

                            )
                        })
                        }


                    </Thead>

                    <Tfoot>
                        <Tr>
                            <Th> </Th>
                            <Th> </Th>
                            <Th isNumeric>Precio Total </Th>
                            <Th>{totalPrice()}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </Box>
        );
    }
}

export default Cart;
