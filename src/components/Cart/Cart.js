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
    HStack,
    Grid,
    IconButton,
    Flex,
    Heading,
    SimpleGrid,
    GridItem,
    useColorModeValue,
    useToast

} from "@chakra-ui/react"
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,

} from "formik-chakra-ui";
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import * as Yup from "yup";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../Firebase/Firebase';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



const initialValues = {
    name: "",



};
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),

    email: Yup.string().email('Mail Invalido').required('Requerido'),

});



function Cart() {
    const [cartproduct, setCartProduct,] = useContext(CartContext);
    const toast = useToast()
    const totalPrice = () => {
        let total = 0;
        if (cartproduct !== undefined) {
            cartproduct.map((val) => {
                total += parseInt(val.quantity) * parseFloat(val.price);
            })

        }
        return total.toFixed(2);
    }

    const onSubmit = async (values) => {

        const docRef = await addDoc(collection(db, "ordenes"), {
            name: values.name,
            mail: values.email,
            products: cartproduct,
            total: totalPrice(),
            date: Timestamp.now(),

        });
        console.log("Document written with ID: ", docRef.id);

        if (docRef.id) {
            setCartProduct([]);
            let res = toast({
                title: "Compra realizada", description: `Comprobante N° ${docRef.id}`, status: "success",
                duration: 6000,
                isClosable: true,
                position: "top-right",
            })


        }

        console.log(values)
    };

    const removeProduct = (id) => {
        const newCartProduct = cartproduct.filter(item => item.id !== id);
        setCartProduct(newCartProduct);
    }
    useEffect(() => {
        setTimeout(() => {
            console.log("...");

        }, 2000);
    }, []);

    console.log(cartproduct);
    if ((cartproduct === undefined) || (typeof cartproduct === 'number') || (totalPrice() == 0)) {
        return (
            <Grid display={'flex'} padding={20} justifyContent='center'>
                <HStack> <Text fontSize={'xl'} >Carrito vacío</Text><Link to='/'> <Button>Volver a la tienda</Button></Link> </HStack>
            </Grid>
        )
    } else {
        return (

            <Box      >
                <Box m={20}

                >
                    <SimpleGrid
                        display={{ base: "initial", md: "grid" }}
                        columns={{ md: 3 }}
                        spacing={{ md: 6 }}


                    >
                        <GridItem colSpan={{ md: 2 }} py={20}>
                            <Box px={[4, 0]} borderWidth="1px"
                            >
                                <Table variant="simple" marginX='auto' w='100 %' minHeight={200}>
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

                                                    <IconButton icon={<FaRegTrashAlt />} onClick={() => removeProduct(item.id)}>Eliminar</IconButton>
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
                        </GridItem>
                        <GridItem mt={[3, null, 0]} colSpan={{ md: 1 }} marginX={10}>
                            <Box px={[2, 0]} borderWidth="1px"
                                rounded="lg"
                                shadow="lg">
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    validationSchema={validationSchema}
                                >
                                    {({ handleSubmit, values, errors }) => (
                                        <Box
                                            maxWidth={800}
                                            p={6}
                                            m="10px auto"
                                            as="form"
                                            onSubmit={handleSubmit}
                                        >
                                            <Text>Ingresa tus datos para confirmar la compra</Text>
                                            <InputControl marginY={3} name="name" label="Nombre" />
                                            <InputControl marginY={3} name="email" label="Email" />


                                            <SubmitButton colorScheme="green" marginY={8} >Confirmar Comprar</SubmitButton>





                                        </Box>
                                    )}
                                </Formik>
                            </Box>
                        </GridItem>

                    </SimpleGrid>
                </Box>
            </Box>


        );
    }
}

export default Cart;
