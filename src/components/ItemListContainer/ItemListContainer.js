import { React, useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Spinner } from '@chakra-ui/spinner';
import { Heading, Box, Flex, Divider } from '@chakra-ui/react'
import { db } from '../Firebase/Firebase'
import { getDocs, collection } from '@firebase/firestore';

import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { objectKeys } from '@chakra-ui/styled-system/node_modules/@chakra-ui/utils';

let title = ''
function ItemListContainer({ match }) {
    const [cartproduct, setCartProduct, addProduct, isInCart, keyword, setKeyword] = useContext(CartContext);

    const [ListItems, setListItems] = useState(null);
    const [FilteredItems, setFilteredItems] = useState(null);
    const docs = []
    useEffect(() => {
        const requestData = async () => {
            const items = await getDocs(collection(db, 'products'))
            if (keyword === '') {
                items.forEach((document) => {
                    if (match === undefined) {
                        docs.push({
                            ...document.data(), id: document.id
                        })
                        title = ''
                    } else {
                        title = `Categoria:   ${match.params.id}`
                        if (document.data().category === match.params.id) {
                            docs.push({
                                ...document.data(), id: document.id
                            })
                        }
                    }
                });
                setListItems(docs)
            } else {
                const docsKey = []
                title = 'Resultado busqueda '
                items.forEach((document) => {
                    if (document.data().title.toLowerCase().includes(keyword.toLowerCase())) {
                        docsKey.push({
                            ...document.data(), id: document.id
                        })
                    }
                });

                setFilteredItems(docsKey)
            }
        }
        requestData()
    }, [keyword, match])

    if (!ListItems) {
        return (
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
    }

    if (FilteredItems) {
        return (
            <Box paddingX={24} marginTop={42}>

                <Heading
                    fontWeight={300}
                    fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}
                    textAlign='center'
                    textTransform='uppercase'>
                    {title}

                    {objectKeys(FilteredItems).length > 0 ? <ItemList items={FilteredItems} /> : 'No se encontraron articulos'}         </Heading >
            </Box >
        );
    }



    return (
        <Box paddingX={24} marginTop={42}>
            <Heading
                fontWeight={400}
                fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                lineHeight={'110%'}
                textAlign='center'
                textTransform='uppercase'>
                Tienda Virtual


            </Heading >
            <Heading
                fontWeight={300}
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
