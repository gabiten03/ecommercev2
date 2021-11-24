import { React, useContext, useState, useRef, } from 'react';
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

    Stack,
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
import { collection, addDoc, Timestamp, } from "firebase/firestore";
import { db } from '../Firebase/Firebase';


const initialValues = {
    name: "",
    email: "",


};



const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),

    email: Yup.string().email('Mail Invalido').required('Requerido'),

});



function Cart() {
    const toast = useToast()
    const toastIdRef = useRef()
    const [cartproduct, setCartProduct,] = useContext(CartContext);
    const [isaSuccess, setIsaSuccess] = useState(false);


    const totalPrice = () => {
        let total = 0;
        if (cartproduct !== undefined) {
            cartproduct.map((val) => {
                total += parseInt(val.quantity) * parseFloat(val.price);
                return total;
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
        console.log(cartproduct)
        if (docRef.id) {

            setIsaSuccess(true);
            toastIdRef.current = toast({
                title: `Orden N° ${docRef.id} Enviada`,
                description: "Gracias por tu compra",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top",

            });

            setCartProduct([]);

        }

    };


    const removeProduct = (id) => {
        const newCartProduct = cartproduct.filter(item => item.id !== id);
        setCartProduct(newCartProduct);
    }




    if ((cartproduct === undefined) || (typeof cartproduct === 'number') || (totalPrice() === 0) || (isaSuccess === true)) {
        return (
            <Grid display={'flex'} padding={20} justifyContent='center'>
                <HStack> <Text fontSize={'xl'} >Carrito vacío</Text><Link to='/'> <Button>Volver a la tienda</Button></Link> </HStack>
            </Grid>
        )
    } else {
        return (


            <Stack direction={["column", "row"]} spacing="24px" paddingTop={10}>



                <Box px={5} width={{ base: "100%", md: "100%", lg: "70%", xl: "70%" }}>

                    <Table variant="simple" marginX='auto' minHeight={200}>
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

                                        <Th ><IconButton icon={<FaRegTrashAlt />} onClick={() => removeProduct(item.id)}>Eliminar</IconButton></Th>
                                    </Tr>
                                )
                            })
                            }
                        </Thead>
                        <Tfoot>
                            <Tr>

                                <Th></Th>
                                <Th></Th>
                                <Th isNumeric>Precio Total </Th>
                                <Th>{totalPrice()}</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </Box>



                <Box marginX={50} px={10} width={{ base: "100%", md: "100%", lg: "30%", xl: "30%" }} borderWidth="1px"
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


            </Stack >




        );
    }
}

export default Cart;
