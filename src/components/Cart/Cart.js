import { React, useContext } from 'react';
import {
    Button,
    Box,
    HStack,
    Text,
    Table,
    Thead,

    Tfoot,
    Tr,
    Th,

    TableCaption,
} from "@chakra-ui/react"

import { CartContext } from '../../CartContext';



function Cart() {


    const [cartproduct, removeProduct] = useContext(CartContext);


    /*   useEffect(() => {
          setTimeout(() => {
              console.log("Loading' Data");
  
          }, 2000);
      }, []); */

    console.log(cartproduct);
    if ((cartproduct === undefined) || (typeof cartproduct === 'number')) {

        return (
            <Box padding={20} justifyContent='center'>
                <Text>No hay productos en el carrito</Text>
            </Box>
        )
    } else {
        return (
            <Box marginX='auto' marginY={6}>

                <Table variant="simple">
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th isNumeric>Precio Unitario</Th>
                            <Th isNumeric>Total</Th>
                        </Tr>

                        {cartproduct.map((item, index) => {
                            return (

                                <>
                                    <Tr key={index}>
                                        <Th>{item.title}</Th>
                                        <Th>{item.quantity}</Th>
                                        <Th>{item.price}</Th>
                                        <Th >{parseFloat(item.price) * parseInt(item.quantity)}</Th>
                                        <Button id={index} onClick={() => removeProduct(item.id)}>Eliminar</Button>
                                    </Tr>
                                    {console.log(cartproduct)}

                                </>

                            )
                        })
                        }






                    </Thead>

                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th isNumeric>Precio Total </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </Box>
        );
    }
}

export default Cart;
