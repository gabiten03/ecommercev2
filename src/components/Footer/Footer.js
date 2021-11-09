import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    IconButton,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Image } from '@chakra-ui/image';

import Logo from '../../assets/img/logo.png';



export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            marginTop={40}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Image src={Logo} width={85} />
                <Text>© 2021 Todos los derechos reservados</Text>
                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </IconButton>
                    <IconButton isRound='true' label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </IconButton>
                    <IconButton isRound='true' label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    );
}