import React, { useContext } from 'react'
import { IconButton } from '@chakra-ui/button'

import { BiShoppingBag } from 'react-icons/bi'
import { HStack, Link, Text } from '@chakra-ui/layout'
import { CartContext } from '../../CartContext';
//for each element in cartproduct    count the quantity of each product and sum the total of products   


function CartWidget() {
    let total = 0
    const [cartproduct, setCartProduct, addProduct, removeProduct, clear, isInCart] = useContext(CartContext);
    console.log(cartproduct)
    if (cartproduct !== undefined) {
        cartproduct.forEach((item) => {
            console.log(item)
            total += item.quantity

        })
    }
    console.log(total)

    return (
        <>
            <Link href='/cart' >
                <HStack >
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
                    <Text display={{ base: 'none', md: 'inline-flex' }} marginLeft={12} zIndex='999' color='black'> {total}
                    </Text>
                </HStack>

            </Link>
        </>
    )

}
export default CartWidget
