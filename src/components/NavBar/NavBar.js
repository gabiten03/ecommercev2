
import Logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import Search from '../Search/Search';
import { useColorMode } from "@chakra-ui/color-mode";
import { Link } from 'react-router-dom'
import { Icon } from '@chakra-ui/accordion/node_modules/@chakra-ui/icon';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaSun, FaMoon, } from 'react-icons/fa'


import {
    Box,
    Flex,
    Text,
    Stack,
    Collapse,
    Image,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    PopoverContent,
    popoverContentBgColor,

    useDisclosure,
    IconButton,
    ModalOverlay,
    ModalCloseButton,
    ModalBody, ModalContent,
    Modal,
    ModalFooter,
    Heading,
    Button
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,

} from '@chakra-ui/icons';
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl
} from "formik-chakra-ui";

import * as Yup from "yup";



const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const initialValues = {
    name: "",


    notes: "",

};
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),
    notes: Yup.string()
        .max(250, 'Demasiado Largo!')
        .required('Requerido'),
    email: Yup.string().email('Mail Invalido').required('Requerido'),

});

export default function NavBar() {


    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen: isOpenReportModal,

        onClose: onCloseReportModal } = useDisclosure()

    return (
        <Box className="navbar" marginX={8} marginTop={6} >
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link to={{ pathname: "/" }}> <Image
                        width={85}
                        src={Logo}>
                    </Image>
                    </Link>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>


                <Stack
                    flex={{ base: 1, md: 0 }}
                    marginLeft={15}
                    direction={'row'}
                    spacing={6}>
                    <Search />
                    <CartWidget />

                    <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>

            <Modal isOpen={isOpenReportModal} onClose={onCloseReportModal} size="full"  >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton size="lg" color="#4e4edd" />
                    <ModalBody marginTop={20}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {({ handleSubmit, values, errors }) => (
                                <Box
                                    maxWidth={800}
                                    p={6}
                                    m="10px auto"
                                    as="form"
                                    onSubmit={handleSubmit}
                                >
                                    <Heading>Nos encantar??a escuchar de vos !!!</Heading>
                                    <InputControl marginY={3} name="name" label="Nombre" />
                                    <InputControl marginY={3} name="email" label="Email" />
                                    <TextareaControl marginY={3} name="notes" label="Mensaje" />
                                    <ModalFooter>
                                        <SubmitButton colorScheme="blue" marginY={8} marginX={6}>Enviar</SubmitButton>

                                        <Button colorScheme="blue" onClick={onCloseReportModal} variant="outline">Cerrar</Button>

                                    </ModalFooter>

                                </Box>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>


        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');


    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>

                            <Link to={navItem.href ?? '#'}>
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={'sd'}
                                    padding={2}
                                    color={linkColor}
                                    textTransform={'uppercase'}
                                    _hover={{ color: linkHoverColor }}
                                >
                                    {navItem.label}
                                </Text>
                            </Link>

                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}

                    </Popover>
                </Box>
            ))}

        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link to={href ?? '#'}>
            <Text
                fontWeight={'bold'}
                fontSize={'lg'}

            >
                {label}
            </Text>
        </Link>

    );
};
const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    console.log(href)

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link to={href ?? '#'}>
                <Flex
                    py={2}

                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition={'all .25s ease-in-out'}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6}
                        />
                    )}
                </Flex>
            </Link>
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} to={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Tienda',
        href: '/tienda',
    },
    {
        label: 'Categorias',
        children: [
            {
                label: 'Almacen',
                href: '/categorias/Almacen',
            },
            {
                label: 'Verduleria',
                href: '/categorias/Verduleria',
            },
            {
                label: 'Limpieza-Cosmetica',
                href: '/categorias/Limpieza-Cosmetica',
            },
        ],
    },
];