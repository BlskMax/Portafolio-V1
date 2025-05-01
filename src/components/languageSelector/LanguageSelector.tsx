// 'use client';

// import { useRouter, usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

// export default function LanguageSelector() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng: 'en' | 'es') => {
//     const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '');
//     const newPath = lng === 'en' ? pathWithoutLocale : `/${lng}${pathWithoutLocale}`;
//     router.push(newPath);
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="flex gap-4">
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//     </div>
//   );
// }
