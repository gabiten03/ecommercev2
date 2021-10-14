import { React, useEffect, useState } from 'react'

import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';

import { Heading, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail';
const baseURL = 'https://fakestoreapi.com/products'

function ItemDetailContainer(idItem) {



    const [DetailItem, setDetailItem] = useState(null);
    const urlall = baseURL + '/' + idItem.item

    useEffect(() => {
        setTimeout(function () {
            axios.get(urlall).then((response) => {
                setDetailItem(response.data);

            });
        }, 0);

    }, []);

    console.log(DetailItem)

    if (!DetailItem) return (
        <Flex alignItems='center' width='100%' height='50vh' justifyContent='center'
        >

            <Spinner thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                alignItems='center'> </Spinner>

            <Heading

                paddingLeft={12}
                fontWeight={300}
                fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                lineHeight={'110%'}
                textAlign='center'>
                Cargando...

            </Heading >

        </Flex>
    );
    return (
        <ItemDetail itemid={DetailItem} />
    );


}

export default ItemDetailContainer