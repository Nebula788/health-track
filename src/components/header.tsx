// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/lib/supabase";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   const navLinks = [
//     { href: "/", label: "Нүүр хуудас" },
//     { href: "/bmi", label: "БЖИ-тооцоолуур" },
//     { href: "/macrobiotic", label: "Макро шим тэжээл" },
//     { href: "/foods", label: "Хоол хүнс" },
//     { href: "/unhealthyFoods", label: "Хооллолт" },
//     { href: "/contact", label: "Холбоо барих" },
//   ];

//   // 🔹 Load user + check admin
//   useEffect(() => {
//     const loadUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       if (data.user) {
//         setUser(data.user);

//         const { data: profile } = await supabase
//           .from("profiles")
//           .select("role")
//           .eq("id", data.user.id)
//           .single();

//         if (profile?.role === "admin") {
//           setIsAdmin(true);
//         }
//       }
//     };

//     loadUser();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       },
//     );

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   const logout = async () => {
//     await supabase.auth.signOut();
//     router.push("/");
//     router.refresh();
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 right-0 z-50"
//     >
//       <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
//               <span className="text-white text-xl font-bold">H</span>
//             </div>
//             <span className="text-xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//               HealthTracker
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`px-4 py-2 text-sm font-medium relative ${
//                     isActive ? "text-teal-600" : "text-gray-700"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//             {user && (
//               <Link href="/profile" className="px-4 py-2 text-sm">
//                 Profile
//               </Link>
//             )}

//             {/* Admin link */}
//             {isAdmin && (
//               <Link
//                 href="/admin"
//                 className="px-4 py-2 text-sm font-semibold text-purple-600"
//               >
//                 Admin
//               </Link>
//             )}
//           </nav>

//           {/* Desktop Right Section */}
//           <div className="hidden lg:flex items-center gap-3">
//             {!user && (
//               <Link href="/signup">
//                 <Button className="bg-linear-to-r from-teal-600 to-cyan-600 text-white">
//                   Бүртгүүлэх
//                 </Button>
//               </Link>
//             )}

//             {user && (
//               <Button
//                 onClick={logout}
//                 className="bg-red-500 hover:bg-red-600 text-white"
//               >
//                 Logout
//               </Button>
//             )}
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden bg-white border-t"
//             >
//               <nav className="px-6 py-4 space-y-2">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block py-2"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 {user && (
//                   <Link
//                     href="/profile"
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block px-4 py-3 text-sm"
//                   >
//                     Profile
//                   </Link>
//                 )}

//                 {isAdmin && (
//                   <Link href="/admin" className="block py-2 text-purple-600">
//                     Admin
//                   </Link>
//                 )}

//                 {!user && (
//                   <Link href="/signup">
//                     <Button className="w-full mt-3 bg-teal-600 text-white">
//                       Бүртгүүлэх
//                     </Button>
//                   </Link>
//                 )}

//                 {user && (
//                   <div className="flex items-center gap-4">
//                     <span className="text-sm text-gray-600">{user.email}</span>
//                     <Button
//                       onClick={logout}
//                       className="w-full mt-3 bg-red-500 text-white"
//                     >
//                       Logout
//                     </Button>
//                   </div>
//                 )}
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Нүүр" },
    { href: "/bmi", label: "БЖИ" },
    { href: "/macrobiotic", label: "Макро" },
    { href: "/foods", label: "Хүнс" },
    { href: "/unhealthyFoods", label: "Хооллолт" },
    { href: "/contact", label: "Холбоо" },
  ];

  // ================= LOAD USER =================
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);

        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

        setIsAdmin(profile?.role === "admin");
      }
    };

    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold">H</span>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            HealthTracker
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 hover:text-teal-600 transition"
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-600 rounded"
                  />
                )}
              </Link>
            );
          })}

          {user && (
            <Link
              href="/profile"
              className="text-sm text-gray-600 hover:text-teal-600"
            >
              {user.email}
            </Link>
          )}

          {isAdmin && (
            <Link
              href="/admin"
              className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600 font-semibold"
            >
              Admin
            </Link>
          )}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden lg:flex items-center gap-4">
          {!user && (
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md">
                Бүртгүүлэх
              </Button>
            </Link>
          )}

          {user && (
            <Button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </Button>
          )}
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-xl"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-4">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-gray-700"
                >
                  {link.label}
                </Link>
              ))}

              {user && (
                <div className="text-sm text-gray-500">
                  {user.email}
                </div>
              )}

              {isAdmin && (
                <Link
                  href="/admin"
                  className="block text-purple-600 font-semibold"
                >
                  Admin
                </Link>
              )}

              {!user && (
                <Link href="/signup">
                  <Button className="w-full bg-teal-600 text-white">
                    Бүртгүүлэх
                  </Button>
                </Link>
              )}

              {user && (
                <Button
                  onClick={logout}
                  className="w-full bg-red-500 text-white"
                >
                  Logout
                </Button>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
