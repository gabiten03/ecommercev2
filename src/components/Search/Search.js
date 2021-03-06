import { HStack, InputGroup, InputLeftElement, Input, } from '@chakra-ui/react'
import {
    AiOutlineSearch,

} from "react-icons/ai";
import { useContext } from 'react';
import { CartContext } from '../../CartContext';


import { Link } from 'react-router-dom'

function Search(value) {
    const [, , , , , setKeyword] = useContext(CartContext);


    function deleteKeyword(e) {
        e.target.value = ""
        console.log(e.target)
        setKeyword("")
    }
    return (

        <HStack
            spacing={3}
            display="flex"
            alignItems="center"

        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch color='green' />}
                />
                <Link to='/tienda' >
                    <Input flex={{ base: 1, md: 0 }} id="inputKeyword" paddingLeft={10} type="tel" placeholder="Buscar..." w={150} onBlur={(e) => { deleteKeyword(e) }} onChange={(e) => {
                        let key = e.target.value;
                        setKeyword(key)

                    }} />
                </Link>
            </InputGroup>
        </HStack >
    )
}

export default Search
