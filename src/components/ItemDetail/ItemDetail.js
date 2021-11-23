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
                        <Link to={`/`} >
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
                    width='60%'
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
            {/*             <Flex
                bg={useColorModeValue("#F9FAFB", "gray.600")}
                p={50}
                w="full"
                minW="full"
                alignItems="center"
                justifyContent="center"
            >
                <Flex


                    bg={useColorModeValue("white", "gray.800")}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                    minW={800}
                    minH={800}
                >
                    <Box
                        w={1 / 3}
                        bgSize="cover"
                        style={{
                            backgroundImage:
                                `url(${data.image})`,
                        }}
                    ></Box>

                    <Box w={2 / 3} p={{ base: 4, md: 4 }} >
                        <chakra.h1
                            fontSize="2xl"
                            fontWeight="bold"
                            paddingTop={40}
                            color={useColorModeValue("gray.800", "white")}
                        >
                            {data.title}
                        </chakra.h1>

                        <chakra.p
                            mt={2}
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {data.description}
                        </chakra.p>

                        <HStack spacing={1} display="flex" alignItems="center" mt={2}>
                            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
                            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
                            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
                            <StarIcon color="gray.500" />
                            <StarIcon color="gray.500" />
                        </HStack>

                        <Flex mt={3} justifyContent="space-between" paddingBottom={1}>
                            <chakra.h1 color="white" fontWeight="bold" fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
                                $ {data.price}
                            </chakra.h1>
                            <chakra.button
                                px={2}
                                py={1}

                                bg="white"
                                fontSize="xs"
                                color="gray.900"
                                fontWeight="bold"
                                rounded="lg"
                                textTransform="uppercase"
                                _hover={{
                                    bg: "gray.200",
                                }}
                                _focus={{
                                    bg: "gray.400",
                                }}
                            >
                                Add to cart
                            </chakra.button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex> */}

        </>
    );
}

export default ItemDetail;
