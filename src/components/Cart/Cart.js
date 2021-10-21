import React from 'react'

import { Text, Container, Stack, Heading } from '@chakra-ui/react'

function Cart() {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>

                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                    >
                        Carrito
                    </Text>


                </Heading>

            </Stack>
        </Container>
    )
}

export default Cart
