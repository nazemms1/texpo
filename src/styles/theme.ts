'use client';

import { createTheme, type MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#e8f4ff',
  '#cce4ff',
  '#99c8ff',
  '#66aaff',
  '#3d90ff',
  '#1a7aff',
  '#0062e6',
  '#004db8',
  '#003a8a',
  '#00285c',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: { brand },
  fontFamily: 'var(--font-geist-sans), Inter, sans-serif',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
  },
});
