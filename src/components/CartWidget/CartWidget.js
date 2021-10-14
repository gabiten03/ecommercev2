import React from 'react'
import { IconButton } from '@chakra-ui/button'

import { BiShoppingBag } from 'react-icons/bi'

function CartWidget() {
    return (
        <>
            <IconButton icon={<BiShoppingBag />} isRound='true'
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                    bg: 'pink.300',
                }}>

            </IconButton>
        </>
    )
}

export default CartWidget
