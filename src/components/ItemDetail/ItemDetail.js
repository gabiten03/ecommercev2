import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Tooltip
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail(props) {

    console.log(props)
    let data = props.itemid
    return (
        <Flex justifyContent='center'>
            <Box marginX={6}
                marginY={4}
                alignItems="center"
                bg={useColorModeValue('white', 'gray.800')}
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
                        height={150}
                        width={150}
                        marginTop={5}

                        marginX='auto'

                    />
                </Tooltip>
                <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            lineHeight="tight"
                            isTruncated>
                            <Box as="span" color={useColorModeValue('gray.800', 'white')} fontSize="lg">
                                {data.title}
                            </Box>

                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">

                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={useColorModeValue('gray.800', 'white')} fontSize="lg">
                                $ {data.price}
                            </Box>
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <ItemCount items={data} />
                    </Flex>
                </Box>
            </Box>

        </Flex>
    );
}

export default ItemDetail;
