// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function SignIn() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // 🔐 SIGN IN
// const signInUser = async () => {
//   const res = await fetch("/api/auth/signin", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: formData.email,
//       password: formData.password,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     alert(data.message);
//     return;
//   }

//   alert("Амжилттай нэвтэрлээ");
// };

// // 📝 SIGN UP
// const signUpUser = async () => {
//   const res = await fetch("/api/auth/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     alert(data.message);
//     return;
//   }

//   alert("Амжилттай бүртгэгдлээ");
// };


//   const handleSubmit = () => {
//   if (isSignUp) {
//     signUpUser();
//   } else {
//     signInUser();
//   }
// };


//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Hero Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hidden lg:block"
//           >
//             <div className="relative">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6"
//               >
//                 <span className="text-teal-700 text-sm font-medium">
//                   Эрүүл амьдралын хэв маяг
//                 </span>
//               </motion.div>

//               <h1 className="text-5xl font-bold text-muted leading-tight mb-6">
//                 Эрүүл мэндийн
//                 <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                   {" "}
//                   аялалд
//                 </span>
//                 <br />
//                 тавтай морил
//               </h1>

//               <p className="text-xl text-muted-foreground leading-relaxed mb-8">
//                 БЖИ тооцоолуур, хоолны төлөвлөгөө, дасгал хөдөлгөөний хяналт -
//                 бүгдийг нэг дороос
//               </p>

//               {/* Features */}
//               <div className="space-y-4">
//                 {[
//                   { icon: "✓", text: "Хувь хүнд тохирсон хоолны төлөвлөгөө" },
//                   { icon: "✓", text: "БЖИ болон эрүүл мэндийн хяналт" },
//                   { icon: "✓", text: "Мэргэжлийн зөвлөгөө" },
//                   { icon: "✓", text: "Ахиц дэвшлийн хадгалалт" },
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
//                       <span className="text-primary text-sm font-bold">
//                         {feature.icon}
//                       </span>
//                     </div>
//                     <span className="text-muted-foreground">
//                       {feature.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Stats */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
//               >
//                 {[
//                   { value: "10K+", label: "Хэрэглэгчид" },
//                   { value: "50K+", label: "Дасгалууд" },
//                   { value: "98%", label: "Сэтгэл ханамж" },
//                 ].map((stat, index) => (
//                   <div key={index}>
//                     <div className="text-3xl font-bold text-muted">
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-muted-foreground/80 mt-1">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Side - Auth Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="border-gray-200 shadow-2xl overflow-hidden">
//               {/* Card Header */}
//               <div className="bg-linear-to-br from-primary to-secondary p-8 relative">
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

//                 <div className="relative z-10 text-center">
//                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center mx-auto mb-4">
//                     <span className="text-white text-3xl font-bold">H</span>
//                   </div>
//                   <h2 className="text-3xl font-bold text-white mb-2">
//                     {isSignUp ? "Бүртгүүлэх" : "Нэвтрэх"}
//                   </h2>
//                   <p className="text-teal-50">
//                     {isSignUp ? "Шинэ данс үүсгэх" : "Өөрийн данс руу нэвтрэх"}
//                   </p>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-8">
//                 {/* Social Login */}
//                 <div className="space-y-3 mb-6">
//                   <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors">
//                     <span className="text-xl">🔵</span>
//                     <span className="font-medium text-muted-foreground">
//                       Facebook-аар нэвтрэх
//                     </span>
//                   </button>
//                   <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors">
//                     <span className="text-xl">🔴</span>
//                     <span className="font-medium text-muted-foreground">
//                       Google-аар нэвтрэх
//                     </span>
//                   </button>
//                 </div>

//                 {/* Divider */}
//                 <div className="relative mb-6">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-gray-200"></div>
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-4 bg-white text-gray-500">эсвэл</span>
//                   </div>
//                 </div>

//                 {/* Form Fields */}
//                 <div className="space-y-4">
//                   {isSignUp && (
//                     <div>
//                       <label className="block text-sm font-medium text-muted-foreground mb-2">
//                         Нэр
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData({ ...formData, name: e.target.value })
//                         }
//                         placeholder="Нэрээ оруулна уу"
//                         className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                       />
//                     </div>
//                   )}

//                   <div>
//                     <label className="block text-sm font-medium text-muted-foreground mb-2">
//                       Имэйл хаяг
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       placeholder="example@email.com"
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-muted-foreground mb-2">
//                       Нууц үг
//                     </label>
//                     <input
//                       type="password"
//                       value={formData.password}
//                       onChange={(e) =>
//                         setFormData({ ...formData, password: e.target.value })
//                       }
//                       placeholder="••••••••"
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                     />
//                   </div>

//                   {isSignUp && (
//                     <div>
//                       <label className="block text-sm font-medium text-muted-foreground mb-2">
//                         Нууц үг дахин оруулах
//                       </label>
//                       <input
//                         type="password"
//                         value={formData.confirmPassword}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             confirmPassword: e.target.value,
//                           })
//                         }
//                         placeholder="••••••••"
//                         className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                       />
//                     </div>
//                   )}

//                   {!isSignUp && (
//                     <div className="flex items-center justify-between text-sm">
//                       <label className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           className="w-4 h-4 text-teal-600 rounded"
//                         />
//                         <span className="text-muted-foreground/80">
//                           Намайг сана
//                         </span>
//                       </label>
//                       <a
//                         href="#"
//                         className="text-primary hover:text-teal-700 font-medium"
//                       >
//                         Нууц үг мартсан?
//                       </a>
//                     </div>
//                   )}

//                   <Button
//                     onClick={handleSubmit}
//                     className="w-full bg-linear-to-r from-primary to-secondary hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg shadow-md hover:shadow-lg transition-all"
//                   >
//                     {isSignUp ? "Бүртгүүлэх" : "Нэвтрэх"} →
//                   </Button>
//                 </div>

//                 {/* Toggle Sign In/Up */}
//                 <div className="mt-6 text-center">
//                   <p className="text-muted-foreground/80">
//                     {isSignUp
//                       ? "Аль хэдийн бүртгэлтэй юу?"
//                       : "Шинэ хэрэглэгч үү?"}{" "}
//                     <button
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       className="text-primary hover:text-teal-700 font-semibold"
//                     >
//                       {isSignUp ? "Нэвтрэх" : "Бүртгүүлэх"}
//                     </button>
//                   </p>
//                 </div>

//                 {/* Terms */}
//                 {isSignUp && (
//                   <p className="mt-4 text-xs text-center text-gray-500">
//                     Бүртгүүлснээр та манай{" "}
//                     <a href="#" className="text-primary hover:underline">
//                       Үйлчилгээний нөхцөл
//                     </a>{" "}
//                     болон{" "}
//                     <a href="#" className="text-primary hover:underline">
//                       Нууцлалын бодлого
//                     </a>
//                     -той зөвшөөрч байна
//                   </p>
//                 )}
//               </div>
//             </Card>

//             {/* Mobile Stats */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="lg:hidden grid grid-cols-3 gap-4 mt-8"
//             >
//               {[
//                 { value: "10K+", label: "Хэрэглэгчид" },
//                 { value: "50K+", label: "Дасгалууд" },
//                 { value: "98%", label: "Сэтгэл ханамж" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold text-muted">
//                     {stat.value}
//                   </div>
//                   <div className="text-xs text-muted-foreground/80 mt-1">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Trust Badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-20"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: "🔒", title: "Аюулгүй", desc: "256-bit шифрлэлт" },
//               { icon: "🛡️", title: "Найдвартай", desc: "Нууцлал хамгаалалт" },
//               { icon: "⚡", title: "Хурдан", desc: "Шуурхай хариу үйлдэл" },
//               { icon: "💚", title: "Үнэгүй", desc: "Үндсэн үйлчилгээ" },
//             ].map((badge, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -4 }}
//                 className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
//               >
//                 <div className="text-4xl mb-2">{badge.icon}</div>
//                 <div className="font-bold text-muted mb-1">{badge.title}</div>
//                 <div className="text-sm text-muted-foreground/80">
//                   {badge.desc}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/admin");
    }
  };

  const signup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created. Now login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow w-96 space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>

        <button
          onClick={signup}
          className="w-full bg-gray-200 py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}