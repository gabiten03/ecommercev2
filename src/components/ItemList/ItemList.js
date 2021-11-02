import React from 'react'

import Item from '../Item/Item'
import { Spinner } from '@chakra-ui/spinner'
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

const urlProducts = '/item/';

function ItemList(items) {

    return (

        <SimpleGrid isTruncated paddingx={6} paddingTop={6} bg={useColorModeValue('white', 'gray.800')} columns={[1, 1, 2, 4, 5]}>

            {Object.keys(items.items).length ? (


                items.items.map((elements) => <Link to={`${urlProducts}${elements.id}`}  > <Item props={elements} key={elements.id} /></Link>)) : (<Spinner animation="border" role="status"> </Spinner>)

            }


        </SimpleGrid >

    )
}

export default ItemList
