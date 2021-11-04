import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Tooltip,

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'




function ItemDetail(props) {

    const itemId = props.itemid.id
    let data = props.itemid[0]

    const categoriasUrl = '/categorias/'

    return (
        <Flex justifyContent='center' paddingTop={10}>
            <Box

                alignItems="center"
                bg={useColorModeValue('white', 'gray.800')}
                width='60%'
                justifyContent="center"
            >
                <Link to={`${categoriasUrl}${data.category}`} className='menu-categories'>
                    <Flex justifyContent="center" alignContent="center"  >

                        <Box fontSize="2xl" >
                            <Box as="span" fontSize="lg" color={'gray.400'} textTransform='uppercase' >
                                {data.category}
                            </Box>
                        </Box>
                    </Flex>
                </Link>

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
                        alt={`Imagen ${data.image} `}

                        width={300}

                        marginX='auto'
                    />
                </Tooltip>
                <Box p="6">
                    <Flex mt="1" justifyContent="center" alignContent="center">

                        <Box as="span" color={useColorModeValue('gray.800', 'white')} fontSize="lg">
                            {data.description}
                        </Box>
                    </Flex>
                    <Flex justifyContent="center" alignContent="center">

                        <Box fontSize="4xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={useColorModeValue('gray.800', 'white')} fontSize="4xl">
                                $ {data.price}
                            </Box>
                        </Box>
                    </Flex>
                    <Flex justifyContent="center" alignContent="center">

                        <ItemCount items={props.itemid} />  </Flex>
                </Box>
            </Box>

        </Flex >
    );
}

export default ItemDetail;
