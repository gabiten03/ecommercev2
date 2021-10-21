import { React, useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';

import { Heading, Box, Flex, Divider } from '@chakra-ui/react'


function ItemListContainer({ match }) {

    var title;
    const baseURL = 'https://fakestoreapi.com/products'
    const category = '/category/'

    const [ListItems, setListItems] = useState(null);

    let useUrl;

    if (match === undefined) {

        title = 'Productos'
        useUrl = baseURL
    }
    else {

        title = `${match.params.id}`
        useUrl = `${baseURL}${category}${match.params.id}`
    }

    useEffect(() => {
        setTimeout(function () {
            axios.get(useUrl).then((response) => {
                setListItems(response.data);
            });
        }, 2000);

    }, [useUrl]);

    if (!ListItems) return (
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

        <Box paddingX={24} paddingTop={12}>

            <Heading
                fontWeight={400}
                fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                lineHeight={'110%'}
                textAlign='center'
                textTransform='uppercase'>

                {title}
                <Divider paddingTop={8} width='40%' marginX='auto' size='lg' />
                <ItemList items={ListItems} />
            </Heading >
        </Box >





    )
}

export default ItemListContainer
