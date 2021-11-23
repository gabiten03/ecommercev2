import {
    Flex,
    Box,
    Image,
    Tooltip,
    IconButton
} from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { BsSearch } from 'react-icons/bs'

import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const urlProducts = '/item/';


function Item(props) {
    const [, , , , , , addOneProduct] = useContext(CartContext);
    let data = props.props
    let url = urlProducts + data.id


    return (
        <>
            <Box
                marginX={6}
                marginY={4}
                alignItems="center"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >
                <Tooltip
                    label='Ver detalles'
                    bg="white"
                    placement='top'
                    display='flex'
                    color={'gray.800'}
                    fontSize={'1.2em'}

                >
                    <Link to={url || '#'} >


                        < Image
                            src={data.image}
                            borderRadius="full"
                            alt={`Imagen ${data.name}`}
                            height={250}
                            width={250}
                            marginTop={5}
                            marginX='auto'
                        />
                    </Link>
                </Tooltip>
                <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            lineHeight="tight"
                            isTruncated>
                            <Box as="span" fontSize="lg" textDecoration='none' >
                                {data.title}
                            </Box>

                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl" >
                            <Box as="span" fontSize="lg" textDecoration='none'>
                                $ {data.price}
                            </Box>
                        </Box>

                        <Box fontSize="4xl" >
                            <Link to={url || '#'}>
                                <IconButton marginX='auto' colorScheme="teal" variant="ghost" size={8} icon={<BsSearch />} />
                            </Link>

                        </Box>
                        <Box fontSize="2xl" >
                            <Tooltip
                                label='Agregar'
                                bg="white"

                                placement='bottom'
                                display='flex'
                                color={'gray.800'}
                                fontSize={'1.0em'}

                            >
                                <IconButton alt={'Agregar al carrito'} marginX='auto' colorScheme="teal" variant="ghost" size={4} icon={<BiShoppingBag />} onClick={() => {
                                    addOneProduct(data.id, 1, data.price, data.title)
                                }} > Agregar</IconButton>
                            </Tooltip>
                        </Box>
                    </Flex>
                </Box>
            </Box >
        </>
    );
}



export default Item;


