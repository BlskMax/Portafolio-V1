'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type NavContextType = {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNav debe usarse dentro de un NavProvider');
  }
  return context;
}
