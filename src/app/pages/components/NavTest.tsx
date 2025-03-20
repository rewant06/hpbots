// // 'use client'; // Indicates that this component is a client-side component in Next.js.

// // import { useState } from 'react';
// // import { Dialog } from '@headlessui/react'; // Importing the `Dialog` component for creating modal dialogs.
// // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons for the menu toggle button.
// // import Image from 'next/image'; // Importing the `Image` component for optimized image rendering in Next.js.
// // import Link from 'next/link'; // Importing the `Link` component for client-side navigation in Next.js.

// // const navigation = [
// //   { name: 'Product', href: '#' },
// //   { name: 'Features', href: '#' },
// //   { name: 'Marketplace', href: '#' },
// //   { name: 'Company', href: '#' },
// //   { name: 'About Us', href: '/about' }, 
// // ];

// // export default function Navbar() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track whether the mobile menu is open.

// //   return (
// //     <html lang="en">
// //       <body>
// //         <div className="bg-white">
// //           <header className="absolute inset-x-0 top-0 z-50">
// //             <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
// //               <div className="flex lg:flex-1">
// //                 <Link href="/" legacyBehavior>
// //                   <a className="-m-1.5 p-1.5">
// //                     <span className="sr-only">Helping Bots</span>
// //                     <Image
// //                       alt="Company Logo"
// //                       src="/logo.png"
// //                       width={32}
// //                       height={32}
// //                       className="h-8 w-auto"
// //                     />
// //                   </a>
// //                 </Link>
// //               </div>
// //               <div className="flex lg:hidden">
// //                 <button
// //                   type="button"
// //                   onClick={() => setMobileMenuOpen(true)}
// //                   className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
// //                 >
// //                   <span className="sr-only">Open main menu</span>
// //                   <Bars3Icon aria-hidden="true" className="h-6 w-6" />
// //                 </button>
// //               </div>
// //               <div className="hidden lg:flex lg:gap-x-12">
// //                 {navigation.map((item) => (
// //                   <Link key={item.name} href={item.href} legacyBehavior>
// //                     <a className="text-sm leading-6 font-semibold text-white">
// //                       {item.name}
// //                     </a>
// //                   </Link>
// //                 ))}
// //               </div>
// //               <div className="hidden lg:flex lg:flex-1 lg:justify-end">
// //                 <Link href="/login" legacyBehavior>
// //                   <a className="text-sm leading-6 font-semibold text-white">
// //                     Log in <span aria-hidden="true">&rarr;</span>
// //                   </a>
// //                 </Link>
// //               </div>
// //             </nav>
// //             {/* Mobile Menu */}
// //             <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
// //               <div className="fixed inset-0 bg-black opacity-30" />
// //               <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
// //                 <div className="flex items-center justify-between">
// //                   <Link href="/" legacyBehavior>
// //                     <a className="-m-1.5 p-1.5">
// //                       <span className="sr-only">Helping Bots</span>
// //                       <Image
// //                         alt="Company Logo"
// //                         src="/logo.png"
// //                         width={32}
// //                         height={32}
// //                         className="h-8 w-auto"
// //                       />
// //                     </a>
// //                   </Link>
// //                   <button
// //                     type="button"
// //                     onClick={() => setMobileMenuOpen(false)}
// //                     className="-m-2.5 rounded-md p-2.5 text-gray-700"
// //                   >
// //                     <span className="sr-only">Close menu</span>
// //                     <XMarkIcon aria-hidden="true" className="h-6 w-6" />
// //                   </button>
// //                 </div>
// //                 <div className="mt-6 flow-root">
// //                   <div className="-my-6 divide-y divide-gray-500/10">
// //                     <div className="space-y-2 py-6">
// //                       {navigation.map((item) => (
// //                         <Link key={item.name} href={item.href} legacyBehavior>
// //                           <a className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
// //                             {item.name}
// //                           </a>
// //                         </Link>
// //                       ))}
// //                     </div>
// //                     <div className="py-6">
// //                       <Link href="/login" legacyBehavior>
// //                         <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
// //                           Log in
// //                         </a>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Dialog.Panel>
// //             </Dialog>
// //           </header>
// //         </div>
// //       </body>
// //     </html>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import Link from 'next/link';

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
//   { name: 'About Us', href: '/about' },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav
//           aria-label="Global"
//           className="flex items-center justify-between p-6 lg:px-8"
//         >
//           {/* Logo aligned to the left */}
//           <div className="flex lg:flex-1">
//             <Link href="/" legacyBehavior>
//               <a className="-m-1.5 p-1.5">
//                 <span className="sr-only">Helping Bots</span>
//                 <Image
//                   alt="Company Logo"
//                   src="/logo.png"
//                   width={32}
//                   height={32}
//                   className="h-8 w-auto"
//                 />
//               </a>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Desktop Navigation aligned to the center */}
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <Link key={item.name} href={item.href} legacyBehavior>
//                 <a className="text-sm leading-6 font-semibold text-gray-900 hover:text-gray-700">
//                   {item.name}
//                 </a>
//               </Link>
//             ))}
//           </div>

//           {/* Log in aligned to the right */}
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <Link href="/login" legacyBehavior>
//               <a className="text-sm leading-6 font-semibold text-gray-900 hover:text-gray-700">
//                 Log in <span aria-hidden="true">&rarr;</span>
//               </a>
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <Dialog
//           open={mobileMenuOpen}
//           onClose={() => setMobileMenuOpen(false)}
//           className="lg:hidden"
//         >
//           <div className="fixed inset-0 bg-black opacity-30" />
//           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <Link href="/" legacyBehavior>
//                 <a className="-m-1.5 p-1.5">
//                   <span className="sr-only">Helping Bots</span>
//                   <Image
//                     alt="Company Logo"
//                     src="/logo.png"
//                     width={32}
//                     height={32}
//                     className="h-8 w-auto"
//                   />
//                 </a>
//               </Link>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <Link key={item.name} href={item.href} legacyBehavior>
//                       <a className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
//                         {item.name}
//                       </a>
//                     </Link>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <Link href="/login" legacyBehavior>
//                     <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
//                       Log in
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Dialog>
//       </header>
//     </div>
//   );
// }

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNavbar = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        hideNavbar();
      }
    };

    if (isNavVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavVisible]);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo aligned to the left */}
        <div className="flex lg:flex-1">
          <Link href="/" legacyBehavior>
            <a className="-m-1.5 p-1.5">
              <Image
                alt="Company Logo"
                src="/logo.png"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </a>
          </Link>
        </div>

        {/* Desktop Navigation aligned to the right */}
        <nav className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a className="text-sm leading-6 font-semibold text-white hover:text-gray-300">
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/login" legacyBehavior>
            <a className="text-sm leading-6 font-semibold text-white hover:text-gray-300">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={toggleNavbar}
        >
          {isNavVisible ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavVisible && (
        <div
          ref={navRef}
          className="lg:hidden bg-black bg-opacity-80 shadow-md absolute top-full left-0 w-full"
        >
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a className="text-sm font-semibold text-white hover:text-gray-300">
                  {item.name}
                </a>
              </Link>
            ))}
            <Link href="/login" legacyBehavior>
              <a className="text-sm font-semibold text-white hover:text-gray-300">Log in</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}