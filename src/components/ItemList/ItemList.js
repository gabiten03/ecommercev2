import React from 'react'
import Item from '../Item/Item'
import { Spinner } from '@chakra-ui/spinner'
import { SimpleGrid, useColorModeValue, Flex, Heading } from '@chakra-ui/react'


function ItemList(items) {
    return (
        <SimpleGrid isTruncated paddingx={6} paddingTop={6} bg={useColorModeValue('white', 'gray.800')} columns={[1, 1, 2, 4, 5]}>
            {Object.keys(items.items).length ? (
                items.items.map((elements) => <Item props={elements} key={elements.id} />)) : (<Flex alignItems='center' width='100%' height='50vh' justifyContent='center'
                ><Spinner thickness="4px"
                    speed="0.65s"

                    color="green.500"
                    size="xl"
                    alignItems='center'> </Spinner> <Heading
                        paddingLeft={12}
                        fontWeight={300}
                        fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                        lineHeight={'110%'}
                        textAlign='center'>
                        Cargando...
                    </Heading ></Flex>)
            }
        </SimpleGrid >
    )
}

export default ItemList
