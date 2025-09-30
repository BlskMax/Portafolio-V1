'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bebas_Neue } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      
      <nav className="fixed w-screen top-0 z-20 bg-black text-white">
        <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:items-center">
            <div className="flex-shrink-0 flex items-center">
              <button
                type="button"
                onClick={() => router.push('/')}
                className={`${bebas.variable} font-sans text-2xl md:text-4xl font-bold`}
              >
                BLSKMAX
              </button>
            </div>

            
            <div className="hidden md:flex space-x-4">
              {pathname === '/video' ? (
                <button
                  type="button"
                  onClick={() => router.push('/video')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  VIDEO
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/video')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  VIDEO
                </button>
              )}

              {pathname === '/graphicDesign' ? (
                <button
                  type="button"
                  onClick={() => router.push('/graphicDesign')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  DESIGN
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/graphicDesign')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  DESIGN
                </button>
              )}

              {pathname === '/softwareDev' ? (
                <button
                  type="button"
                  onClick={() => router.push('/softwareDev')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  WEB
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/softwareDev')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  WEB
                </button>
              )}

              {pathname === '/contactPage' ? (
                <button
                  type="button"
                  onClick={() => router.push('/contactPage')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  CONTACT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/contactPage')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  CONTACT
                </button>
              )}
            </div>

            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-white focus:outline-none"
              >
                {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        
        {navOpen && (
          <div className="md:hidden">
            <div className="flex space-x-[4vw] content-between bg-black bg-opacity-70 p-4">
              {pathname === '/' ? (
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  ABOUT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  ABOUT
                </button>
              )}

              {pathname === '/video' ? (
                <button
                  type="button"
                  onClick={() => router.push('/video')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  VIDEO
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/video')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  VIDEO
                </button>
              )}

              {pathname === '/graphicDesign' ? (
                <button
                  type="button"
                  onClick={() => router.push('/graphicDesign')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  DESIGN
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/graphicDesign')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  DESIGN
                </button>
              )}

              {pathname === '/softwareDev' ? (
                <button
                  type="button"
                  onClick={() => router.push('/softwareDev')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  SOFTWARE
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/softwareDev')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  SOFTWARE
                </button>
              )}

              {pathname === '/contactPage' ? (
                <button
                  type="button"
                  onClick={() => router.push('/contactPage')}
                  className={`${bebas.variable} font-sans text-2xl font-bold text-red-800`}
                >
                  CONTACT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push('/contactPage')}
                  className={`${bebas.variable} font-sans text-2xl font-bold hover:text-red-600`}
                >
                  CONTACT
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      
      <div   className={`transition-all duration-500 ease-in-out  ${navOpen ? 'mt-40' : 'mt-16'}`}>
        {children}
      </div>
    </>
  );
}
