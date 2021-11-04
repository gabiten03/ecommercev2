import { React, useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Spinner } from '@chakra-ui/spinner';
import { Heading, Box, Flex, Divider } from '@chakra-ui/react'
import { db } from '../Firebase/Firebase'
import { getDocs, collection } from '@firebase/firestore';

let title = ''
function ItemListContainer({ match }) {
    console.log(match)
    const category = '/category/'
    const [ListItems, setListItems] = useState(null);
    const docs = []
    useEffect(() => {
        const requestData = async () => {
            const items = await getDocs(collection(db, 'products'))

            items.forEach((document) => {
                if (match === undefined) {
                    docs.push({
                        ...document.data(), id: document.id
                    })
                    title = ''

                } else {
                    title = `Categoria:   ${match.params.id}`
                    if (document.data().category === match.params.id) {
                        docs.push({
                            ...document.data(), id: document.id
                        })

                    }

                }
            });
            setListItems(docs)
        }

        requestData()

    }, [])
    console.log(title)
    if (!ListItems) return (
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

        <Box paddingX={24} paddingTop={12}>

            <Heading
                fontWeight={400}
                fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
                lineHeight={'110%'}
                textAlign='center'
                textTransform='uppercase'>
                {title}


                <Divider paddingTop={8} width='40%' marginX='auto' size='lg' />
                <ItemList items={ListItems} />
            </Heading >
        </Box >





    )
}

export default ItemListContainer
