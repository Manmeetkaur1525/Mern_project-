import React from 'react'
import { Flex , Container , Text, Button ,HStack, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {PlusSquareIcon} from '@chakra-ui/icons';
import{IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';
const Navbar = () => {
    const {colorMode , toggleColorMode} = useColorMode();
return (
    //  here we can also change the background colour for both the light mode and dark mode  , this is the heading part 
    <Container maxW = {"1140px"} px ={4}  >
        <Flex
            h = {16}
            alignItems = {"Center"}
            justifyContent = {"space-between"}
            flexDir = {{
                base:"column" ,
                sm: "row" ,

                }}
                
>
<Text
bgGradient={'linear(to-r, cyan.400, blue.500)'}
bgClip='text'
fontSize={{base: "22" , sm: "28"}}
textTransform = {"uppercase"}
textAlign={"center"}
fontWeight='extrabold'
>
<Link to ={"/"}>Product Store 🛒 </Link>
</Text>

{/* horizontal stack  */}

<HStack spacing = {2} alignItems= {"center"}>
    <Link to ={"/create"}>
    <Button>
        {/* Using react icon to use , create product button and light to dark toggle button */} 
        <PlusSquareIcon fontSize={20}>

        </PlusSquareIcon>
    </Button>
    
    
    </Link>
    <Button onClick={toggleColorMode}>
        {
            colorMode ==="light" ? <IoMoon/>: <LuSun size ="20"/>
        }
        
    </Button>

</HStack>

        </Flex>
    </Container>
)
}

export default Navbar;
