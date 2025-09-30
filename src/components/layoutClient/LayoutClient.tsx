    'use client';

import { useNav } from '@/context/NavContext';
import Navbar from '@/components/navbar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { navOpen } = useNav();

  return (
    <>
      <Navbar />
      <div className={navOpen ? "mt-40" : "mt-16"}>
        {children}
      </div>
    </>
  );
}
