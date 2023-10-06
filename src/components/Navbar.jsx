import React from 'react'
import CartWidget from './CartWidget'
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>

<Flex>

  <Box p='4' bg='red.400'>
     {/* brand */}
     <h1>60815</h1>
  </Box>

<Spacer/>
<Box>
<Menu>
  <MenuButton>
    Categorias 
  </MenuButton>
  <MenuList>
    <MenuItem>Categoria A</MenuItem>
    <MenuItem>Categoria B</MenuItem>
    <MenuItem>Categoria C</MenuItem>
    <MenuItem>Categoria D</MenuItem>
    <MenuItem>Categoria E</MenuItem>
  </MenuList>
</Menu>
</Box>
  
  <Spacer />
  <Box p='4' bg='green.400'>
    {/* Carrito */}
    <CartWidget />
  </Box>
</Flex>





     
      
      
      </div>
  )
}

export default Navbar