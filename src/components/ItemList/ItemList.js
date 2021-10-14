import React from 'react'

import Item from '../Item/Item'
import { Spinner } from '@chakra-ui/spinner'
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'


function ItemList(items) {

    return (

        <SimpleGrid isTruncated paddingx={6} paddingTop={6} bg={useColorModeValue('white', 'gray.800')} columns={[1, 1, 2, 4, 5]}>

            {Object.keys(items.items).length ? (

                items.items.map((elements, idx) => <Item props={elements} key={idx} />)) : (<Spinner animation="border" role="status"> </Spinner>)

            }



        </SimpleGrid>

    )
}

export default ItemList
