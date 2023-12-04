import React from 'react';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="center" position="absolute" right="30px" top="10px">
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
