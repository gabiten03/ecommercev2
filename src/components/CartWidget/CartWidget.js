import React, { useContext } from 'react'
import { IconButton } from '@chakra-ui/button'

import { BiShoppingBag } from 'react-icons/bi'
import { HStack, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext';
//for each element in cartproduct    count the quantity of each product and sum the total of products   


function CartWidget() {

    const [cartproduct, setCartProduct, addProduct, removeProduct, clear, isInCart, totalItems] = useContext(CartContext);



    return (
        <>
            <Link to='/cart' >
                <HStack >
                    <IconButton icon={<BiShoppingBag />} isRound='true'
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}

                        _hover={{
                            bg: 'pink.300',
                        }}>

                    </IconButton>
                    <Text display={{ base: 'none', md: 'inline-flex' }} marginLeft={12} zIndex='999' color='black'> {totalItems()}
                    </Text>
                </HStack>

            </Link>
        </>
    )

}
export default CartWidget
