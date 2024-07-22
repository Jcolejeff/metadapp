'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { ReactNode } from 'react';

import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps & { children: ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
