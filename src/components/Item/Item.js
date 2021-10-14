import {
    Flex,
    Box,
    Image,
    useDisclosure,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


function Item(props) {
    let data = props.props
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                marginX={6}
                marginY={4}
                alignItems="center"

                borderWidth="1px"
                rounded="lg"
                shadow="lg"
            >

                <Tooltip
                    label={data.title}
                    bg="white"
                    verticalAlign='center'
                    alignItems='inherit'
                    placement="auto-start"
                    display='flex'
                    color={'gray.800'}
                    fontSize={'1.2em'}

                >
                    <Image
                        src={data.image}
                        borderRadius="full"
                        alt={`Imagen ${data.name}`}
                        height={150}
                        width={150}
                        marginTop={5}

                        marginX='auto'

                    />
                </Tooltip>
                <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            lineHeight="tight"
                            isTruncated>
                            <Box as="span" fontSize="lg">
                                {data.title}
                            </Box>

                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">

                        <Box fontSize="2xl" >
                            <Box as="span" fontSize="lg">
                                $ {data.price}
                            </Box>
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Button onClick={onOpen} >Ver mas</Button>
                    </Flex>


                </Box>
            </Box >
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Producto: {data.title}</ModalHeader>
                    <ModalCloseButton />

                    <ItemDetailContainer item={data.id} />



                </ModalContent>
            </Modal>
        </>



    );
}



export default Item;


