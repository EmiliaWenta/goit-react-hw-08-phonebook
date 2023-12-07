import React from 'react';

import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
