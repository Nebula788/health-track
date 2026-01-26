// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// // Header Component
// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   const navLinks = [
//     { href: "/", label: "Нүүр хуудас" },
//     { href: "/bmi", label: "БЖИ-тооцоолуур" },
//     { href: "/macrobiotic", label: "Макро шим тэжээл" },
//     { href: "/foods", label: "Хоол хүнс" },
//     { href: "/unhealthyFoods", label: "Хооллолт" },
//     { href: "/contact", label: "Холбоо барих" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 z-50"
//     >
//       <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <a href="/" className="flex items-center gap-2 group">
//               <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
//                 <span className="text-white text-xl font-bold">H</span>
//               </div>
//               <span className="text-xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                 HealthTracker
//               </span>
//             </a>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => {
//               const isActive = activeLink === link.href;
//               return (
//                 <motion.a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setActiveLink(link.href)}
//                   className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
//                   whileHover={{ y: -2 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {link.label}
//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-teal-600 to-cyan-600 transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </motion.a>
//               );
//             })}
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             {/* <Button
//               variant="ghost"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Нэвтрэх
//             </Button> */}
//             <Link href={"/signup"}>
            
//             <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md hover:shadow-lg transition-all">
//               Бүртгүүлэх
//             </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lg:hidden bg-white border-t border-gray-200"
//             >
//               <nav className="px-6 py-4 space-y-1">
//                 {navLinks.map((link) => {
//                   const isActive = activeLink === link.href;
//                   return (
//                     <a
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => {
//                         setActiveLink(link.href);
//                         setMobileMenuOpen(false);
//                       }}
//                       className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                         isActive
//                           ? "bg-teal-50 text-teal-700"
//                           : "text-gray-700 hover:bg-gray-50"
//                       }`}
//                     >
//                       {link.label}
//                     </a>
//                   );
//                 })}
//                 <div className="pt-4 space-y-2">
//                   {/* <Button variant="outline" className="w-full">
//                     Нэвтрэх
//                   </Button> */}
//                   <Link href={"/signup"}>
//                     <Button className="w-full bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
//                       Бүртгүүлэх
//                     </Button>
//                   </Link>
//                 </div>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// };
// export default Header;
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ real active route

  const navLinks = [
    { href: "/", label: "Нүүр хуудас" },
    { href: "/bmi", label: "БЖИ-тооцоолуур" },
    { href: "/macrobiotic", label: "Макро шим тэжээл" },
    { href: "/foods", label: "Хоол хүнс" },
    { href: "/unhealthyFoods", label: "Хооллолт" },
    { href: "/contact", label: "Холбоо барих" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">H</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                HealthTracker
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-teal-600 to-cyan-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/signup">
              <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md">
                Бүртгүүлэх
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <nav className="px-6 py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                        isActive
                          ? "bg-teal-50 text-teal-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="pt-4">
                  <Link href="/signup">
                    <Button className="w-full bg-linear-to-r from-teal-600 to-cyan-600 text-white">
                      Бүртгүүлэх
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
