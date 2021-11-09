import React, { useContext, } from 'react'
import { IconButton, chakra, HStack, } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
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
        <Link to='/cart' >
            <HStack >
                <chakra.span pos="relative" display="inline-block">
                    <IconButton icon={<BiShoppingBag />} isRound='true'
                        flex={{ base: 1, md: 0 }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                    </IconButton>
                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        px={2}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="red.100"
                        transform="translate(50%,-50%)"
                        bg="red.600"
                        rounded="full"
                    >
                        {totalItems()}
                    </chakra.span>
                </chakra.span>

            </HStack>
        </Link>
    );
}

export default CartWidget