import React, { useContext } from 'react'
import { IconButton } from '@chakra-ui/button'
import { BiShoppingBag } from 'react-icons/bi'
import { HStack, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext';

function CartWidget() {

    const [cartproduct] = useContext(CartContext);

    const totalItems = () => {
        let total = 0;
        if ((cartproduct !== undefined) && (typeof cartproduct !== 'number')) {
            cartproduct.map((val) => {
                total += val.quantity;
            })

        }
        return total;
    }

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
                    <Text display={{ base: 'none', md: 'inline-flex' }} marginLeft={12} zIndex='999' color='black'>
                        {totalItems()}
                    </Text>
                </HStack>
            </Link>
        </>
    )

}
export default CartWidget
