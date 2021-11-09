import { React, useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner';
import { Heading, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../Firebase/Firebase'
import { collection, getDocs } from '@firebase/firestore'


function ItemDetailContainer({ match }) {

    const [DetailItem, setDetailItem] = useState(null);
    const doc = [];

    useEffect(() => {
        const requestData = async () => {
            const items = await getDocs(collection(db, 'products'))
            items.forEach((document) => {
                if (document.id === match.params.id) {
                    doc.push(document.data())
                    doc.id = match.params.id
                }
            });
            setDetailItem(doc)
        }
        requestData()
    }, [])


    if (!DetailItem) return (
        <Flex alignItems='center' width='100%' height='50vh' justifyContent='center'
        >

            <Spinner thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                alignItems='center'> </Spinner>

            <Heading
                paddingLeft={12}
                fontWeight={300}
                fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                lineHeight={'110%'}
                textAlign='center'>
                Cargando...

            </Heading >
        </Flex>
    );
    return (
        <ItemDetail itemid={DetailItem} />
    );
}

export default ItemDetailContainer