import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Tooltip,
    Grid,
    VStack,
    HStack

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


function ItemDetail(props) {

    let data = props.itemid[0]
    const categoriasUrl = '/categorias/'
    return (
        <>
            <Flex justifyContent='center' >
                <Grid templateColumns="repeat(2, 1fr)" >
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        width='100%'
                    >
                        <Link to={"/"} >
                            <Flex >
                                <Box color={'gray.400'} textTransform='uppercase' >
                                    Inicio
                                </Box>
                                <Box color={'gray.400'} textTransform='uppercase' >
                                    /
                                </Box>
                            </Flex>
                        </Link>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        width='100%'
                    >
                        <Link to={`${categoriasUrl}${data.category}`} >
                            <Flex >
                                <Box color={'gray.400'} textTransform='uppercase' >
                                    {data.category}
                                </Box>

                            </Flex>
                        </Link>
                    </Box>
                </Grid>
            </Flex>

            <Flex justifyContent='center' paddingTop={10}>
                <HStack
                    alignItems="center"
                    bg={useColorModeValue('white', 'gray.800')}
                    width={{ base: '80%', sd: '80%' }}
                    justifyContent="center"

                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                >

                    <Tooltip
                        label={data.title}
                        bg="white"
                        verticalAlign='center'
                        alignItems='inherit'
                        placement="auto-start"
                        display='flex'
                        color={'gray.800'}
                        fontSize={'1.2em'}
                    >
                        <Image
                            src={data.image}
                            borderRadius="full"
                            alt={`Imagen ${data.image}`}
                            width={500}
                            marginX='auto'
                        />
                    </Tooltip>
                    <VStack >

                        <Flex mt="1" justifyContent="center" alignContent="center">
                            <Box color={useColorModeValue('gray.800', 'white')} fontWeight='bold' fontSize={26}>
                                {data.title}
                            </Box>
                        </Flex>
                        <Flex mt="1" justifyContent="center" alignContent="center">
                            <Box color={useColorModeValue('gray.800', 'white')} fontSize="3x1">
                                {data.description}
                            </Box>
                        </Flex>
                        <Flex justifyContent="center" alignContent="center">
                            <Box fontSize="4xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box color={useColorModeValue('gray.800', 'white')} fontSize="4xl">
                                    $ {data.price}
                                </Box>
                            </Box>
                        </Flex>

                        <Flex justifyContent="center" alignContent="center">
                            <ItemCount items={props.itemid} />  </Flex>
                    </VStack>
                </HStack>

            </Flex >

        </>
    );
}

export default ItemDetail;
