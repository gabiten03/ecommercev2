import {
    Flex,
    Box,
    Image,

    Tooltip,

} from '@chakra-ui/react';

function Item(props) {
    let data = props.props
    return (
        <>            <Box
            marginX={6}
            marginY={4}
            alignItems="center"

            borderWidth="1px"
            rounded="lg"
            shadow="lg"
        >

            {/*                 <Flex justifyContent="center" alignContent="center" width='60%'>

                    <Box fontSize="2xl" >
                        <Box as="span" fontSize="lg" color={'gray.400'} textTransform='uppercase' textDecoration='none'>
                            {data.category}
                        </Box>
                    </Box>
                </Flex> */}

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
                        <Box as="span" fontSize="lg" textDecoration='none' >
                            {data.title}
                        </Box>

                    </Box>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">

                    <Box fontSize="2xl" >
                        <Box as="span" fontSize="lg" textDecoration='none'>
                            $ {data.price}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box >
        </>
    );
}



export default Item;


