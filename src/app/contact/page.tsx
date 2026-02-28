// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Facebook, Instagram, Twitter } from "lucide-react";
// import Link from "next/link";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission
//   };

//   const contactInfo = [
//     {
//       icon: "📍",
//       label: "Хаяг",
//       value: "Улаанбаатар хот, Монгол",
//       gradient: "from-teal-500 to-cyan-500",
//     },
//     {
//       icon: "📞",
//       label: "Утас",
//       value: "+976 9403-4884 , +976 8832-8224",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: "✉️",
//       label: "Имэйл",
//       value: "crystaleternal@example.com",
//       gradient: "from-orange-500 to-red-500",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6"
//           >
//             <span className="text-teal-700 text-sm font-medium">Холбогдох</span>
//           </motion.div>

//           <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4">
//             Холбоо барих
//           </h1>
//           <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
//             Бидэнтэй холбогдох, асуулт асуух эсвэл санал хүсэлт илгээх
//           </p>
//         </motion.div>

//         {/* Contact Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           {contactInfo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//             >
//               <Card
//                 className="h-full flex flex-col border-gray-200 
//                  hover:shadow-xl hover:-translate-y-1 
//                  transition-all duration-300 
//                  overflow-hidden rounded-2xl"
//               >
//                 <div
//                   className={`bg-linear-to-br ${item.gradient} 
//                 p-6 flex-1 flex items-center justify-center`}
//                 >
//                   <div className="text-center">
//                     {/* ICON */}
//                     <div
//                       className="w-16 h-16 mx-auto 
//                       bg-white/20 backdrop-blur-sm 
//                       rounded-2xl border border-white/30 
//                       flex items-center justify-center 
//                       text-3xl mb-4 
//                       transition-transform duration-300 
//                       group-hover:scale-110"
//                     >
//                       {item.icon}
//                     </div>

//                     {/* LABEL */}
//                     <div className="text-white/80 text-sm font-medium mb-1">
//                       {item.label}
//                     </div>

//                     {/* VALUE */}
//                     <div className="text-white text-lg font-bold text-center wrap-break-word max-w-55 mx-auto">
//                       {item.value}
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="border-gray-200 shadow-lg h-full">
//               <div className="p-8">
//                 <h2 className="text-2xl font-bold text-muted mb-2">
//                   Бидэнд бичих
//                 </h2>
//                 <p className="text-muted-foreground/80 mb-8">
//                   Та доорх маягтаар бидэнтэй холбогдоорой
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-muted-foreground mb-2">
//                       Таны нэр
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       placeholder="Нэрээ оруулна уу"
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-muted-foreground mb-2">
//                       Имэйл хаяг
//                     </label>
//                     <input
//                       type="email"
//                       required
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
//                       Зурвас
//                     </label>
//                     <textarea
//                       required
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       placeholder="Мэдээллээ энд бичнэ үү..."
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-linear-to-r from-primary to-secondary hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg shadow-md hover:shadow-lg transition-all"
//                   >
//                     Илгээх →
//                   </Button>
//                 </form>
//               </div>
//             </Card>
//           </motion.div>

//           {/* Map & Additional Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             {/* Map Card */}
//             <Card className="border-gray-200 shadow-lg overflow-hidden">
//               <div className="h-100">
//                 <iframe
//                   title="Google Map"
//                   src="https://www.google.com/maps?q=Ulaanbaatar,Mongolia&output=embed"
//                   width="100%"
//                   height="100%"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="border-0"
//                 />
//               </div>
//             </Card>

//             {/* Working Hours Card */}
//             <Card className="border-gray-200 shadow-lg">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   Ажлын цаг
//                 </h3>
//                 <div className="space-y-3">
//                   {[
//                     { day: "Даваа - Баасан", time: "09:00 - 18:00" },
//                     { day: "Бямба", time: "10:00 - 14:00" },
//                     { day: "Ням", time: "Амралт" },
//                   ].map((schedule, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
//                     >
//                       <span className="text-muted-foreground font-medium">
//                         {schedule.day}
//                       </span>
//                       <span
//                         className={`text-sm font-semibold ${
//                           schedule.time === "Амралт"
//                             ? "text-red-500"
//                             : "text-teal-600"
//                         }`}
//                       >
//                         {schedule.time}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Card>

//             {/* Social Links Card */}
//             <Card className="border-gray-200 shadow-lg">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-6">Биднийг дагах</h3>

//                 <div className="grid grid-cols-3 gap-4">
//                   <Link
//                     href="https://facebook.com/yourpage"
//                     target="_blank"
//                     className="group"
//                   >
//                     <div
//                       className="flex flex-col items-center justify-center 
//                         bg-linear-to-br from-blue-500 to-blue-600 
//                         p-5 rounded-2xl text-white 
//                         shadow-md hover:shadow-xl 
//                         transition-all duration-300 
//                         group-hover:-translate-y-1"
//                     >
//                       <Facebook className="w-7 h-7 mb-2" />
//                       <span className="text-sm font-medium">Facebook</span>
//                     </div>
//                   </Link>

//                   <Link
//                     href="https://instagram.com/yourpage"
//                     target="_blank"
//                     className="group"
//                   >
//                     <div
//                       className="flex flex-col items-center justify-center 
//                         bg-linear-to-br from-pink-500 to-purple-600 
//                         p-5 rounded-2xl text-white 
//                         shadow-md hover:shadow-xl 
//                         transition-all duration-300 
//                         group-hover:-translate-y-1"
//                     >
//                       <Instagram className="w-7 h-7 mb-2" />
//                       <span className="text-sm font-medium">Instagram</span>
//                     </div>
//                   </Link>

//                   <Link
//                     href="https://twitter.com/yourpage"
//                     target="_blank"
//                     className="group"
//                   >
//                     <div
//                       className="flex flex-col items-center justify-center 
//                         bg-linear-to-br from-sky-400 to-blue-500 
//                         p-5 rounded-2xl text-white 
//                         shadow-md hover:shadow-xl 
//                         transition-all duration-300 
//                         group-hover:-translate-y-1"
//                     >
//                       <Twitter className="w-7 h-7 mb-2" />
//                       <span className="text-sm font-medium">Twitter</span>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         </div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-muted mb-3">
//               Түгээмэл асуултууд
//             </h2>
//             <p className="text-gray-600">Асуух гэж байсан асуултууд</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 question: "Үйлчилгээний үнэ хэд вэ?",
//                 answer:
//                   "Үндсэн үйлчилгээ үнэгүй бөгөөд илүү боломжууд premium эрхтэй.",
//               },
//               {
//                 question: "Хариу хэдэн хугацаанд ирэх вэ?",
//                 answer: "Бид ажлын 24 цагийн дотор хариулт өгдөг.",
//               },
//               {
//                 question: "Апп татаж авах боломжтой юу?",
//                 answer: "Тийм, iOS болон Android дээр боломжтой.",
//               },
//               {
//                 question: "Хувийн мэдээлэл аюултай юу?",
//                 answer: "Бид таны мэдээллийг бүрэн нууцлалтай хадгална.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="border-gray-200 hover:shadow-lg transition-shadow p-6">
//                   <h4 className="font-bold text-muted mb-2">{faq.question}</h4>
//                   <p className="text-muted-foreground/80 text-sm">
//                     {faq.answer}
//                   </p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: "📍",
      label: "Хаяг",
      value: "Улаанбаатар хот, Монгол",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: "📞",
      label: "Утас",
      value: "+976 9403-4884 / +976 8832-8224",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "✉️",
      label: "Имэйл",
      value: "crystaleternal@example.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-teal-50 border border-teal-200 rounded-full mb-8 shadow-sm">
            <span className="text-teal-600 text-sm font-semibold">
              Холбогдох
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Холбоо барих
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Асуулт асуух, санал хүсэлт илгээх эсвэл бидэнтэй шууд холбогдоорой.
          </p>
        </motion.div>

        {/* ================= CONTACT INFO ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className={`bg-gradient-to-br ${item.gradient} p-10 text-center text-white`}>
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 flex items-center justify-center text-4xl mb-6">
                    {item.icon}
                  </div>

                  <div className="text-sm opacity-80 mb-2">{item.label}</div>

                  <div className="text-lg font-semibold break-words">
                    {item.value}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">

          {/* FORM */}
          <Card className="rounded-3xl shadow-xl border border-gray-200">
            <div className="p-10">
              <h2 className="text-3xl font-bold mb-4">Бидэнд бичих</h2>
              <p className="text-gray-600 mb-8">
                Доорх маягтаар бидэнтэй холбогдоорой.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Таны нэр"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 outline-none transition"
                />

                <input
                  type="email"
                  required
                  placeholder="Имэйл хаяг"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 outline-none transition"
                />

                <textarea
                  required
                  rows={5}
                  placeholder="Зурвас..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 outline-none transition resize-none"
                />

                <Button className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition shadow-lg">
                  Илгээх →
                </Button>
              </form>
            </div>
          </Card>

          {/* MAP */}
          <Card className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Ulaanbaatar,Mongolia&output=embed"
              className="w-full h-[450px] border-0"
              loading="lazy"
            />
          </Card>
        </div>

        {/* ================= SOCIAL ================= */}
        <Card className="rounded-3xl shadow-xl border border-gray-200 mb-24">
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Биднийг дагах
            </h3>

            <div className="flex justify-center gap-8">
              {[
                {
                  icon: <Facebook size={28} />,
                  color: "from-blue-500 to-blue-600",
                  link: "https://facebook.com",
                },
                {
                  icon: <Instagram size={28} />,
                  color: "from-pink-500 to-purple-600",
                  link: "https://instagram.com",
                },
                {
                  icon: <Twitter size={28} />,
                  color: "from-sky-400 to-blue-500",
                  link: "https://twitter.com",
                },
              ].map((social, i) => (
                <Link key={i} href={social.link} target="_blank">
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300`}
                  >
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}