// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// type Gender = "male" | "female";

// type AccordionData = {
//   value: string;
//   title: string;
//   text: string[];
//   icon: string;
// };

// const accordionItems: AccordionData[] = [
//   {
//     value: "item-1",
//     title: "БЖИ гэж юу вэ?",
//     icon: "❓",
//     text: [
//       "БЖИ буюу биеийн жингийн индекс нь таны биеийн жинг өндөртэй харьцуулсан хэмжүүр юм. БЖИ хэмжилтийг нялх хүүхэд, өсвөр насныхан, насанд хүрэгчид хүртэл ямар ч насныханд хэрэглэж болно.",
//       "Хүмүүсийг тураалтай, хэвийн жинтэй, илүүдэл жинтэй гэж ангилах энэхүү хэмжүүрээр таны одоогийн биеийн тохиромжгүй эсвэл эрүүл бус жинтэй эсэхийг тодорхойлох боломжтой."
//     ],
//   },
//   {
//     value: "item-2",
//     title: "БЖИ-ийг хэрхэн тооцоолох вэ?",
//     icon: "🧮",
//     text: [
//       "БЖИ = Биеийн жин / (Өндөр x Өндөр) = кг / м². БЖИ-ийг тухайн хүний килограммаар илэрхийлсэн биеийн жинг, метрээр илэрхийлсэн өндрийн квадрат утгад хувааж олно.",
//       "Биеийн жингийн үнэлгээ: 18.5 хүртэл туранхай, 18.5-24.9 хэвийн жин, 25.0-29.9 илүүдэл жинтэй, 30.0-34.9 Таргалалт I зэрэг, 35.0-39.9 Таргалалт II зэрэг, 40.0 дээш Таргалалт III зэрэг гэж үзнэ."
//     ],
//   },
//   {
//     value: "item-3",
//     title: "БЖИ хэт өндөр болон бага байвал яах вэ?",
//     icon: "⚠️",
//     text: [
//       "БЖИ өндөр байвал эрүүл мэндийн байдал хүндэрч болзошгүй. Таргалалт нь хүний ​​биеийн хөдөлгөөнийг хязгаарлаад зогсохгүй хоёрдогч өвчин тусах магадлалыг нэмэгдүүлдэг.",
//       "Таргалалт нь чихрийн шижин өвчний эрсдэлийг нэмэгдүүлж, цусны даралт ихсэх, дислипидеми болон цусан дахь липидийн хэмжээ ихсэхэд хүргэдэг. БЖИ 30, бүр 40-өөс дээш байвал зүрхний шигдээс, цус харвалтаар өвдөх эрсдэл эрс нэмэгддэг."
//     ],
//   },
// ];

// export default function BMICalculator() {
//   const [gender, setGender] = useState<Gender>("male");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBmi] = useState<number | null>(null);
//   const [category, setCategory] = useState("");
//   const [expandedItem, setExpandedItem] = useState<string | null>(null);

//   const calculateBMI = () => {
//     const h = parseFloat(height) / 100;
//     const w = parseFloat(weight);

//     if (!h || !w) {
//       setBmi(null);
//       setCategory("");
//       return;
//     }

//     const bmiValue = w / (h * h);
//     setBmi(parseFloat(bmiValue.toFixed(1)));
//     const thresholds = gender === "male" ? [18.5, 25, 30] : [18, 24, 30];
//     if (bmiValue < thresholds[0]) setCategory("Тураалтай");
//     else if (bmiValue < thresholds[1]) setCategory("Хэвийн");
//     else if (bmiValue < thresholds[2]) setCategory("Илүүдэл жинтэй");
//     else setCategory("Таргалалт");
//   };

//   const getCategoryColor = () => {
//     if (category === "Хэвийн") return "from-green-500 to-emerald-500";
//     if (category === "Тураалтай") return "from-yellow-500 to-orange-500";
//     if (category === "Илүүдэл жинтэй") return "from-orange-500 to-red-500";
//     if (category === "Таргалалт") return "from-red-500 to-rose-600";
//     return "from-gray-400 to-gray-500";
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

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
//             <span className="text-teal-700 text-sm font-medium">Биеийн жингийн индекс</span>
//           </motion.div>

//           <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4">
//             БЖИ Тооцоолуур
//           </h1>
//           <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
//             Өөрийн биеийн жингийн индексээ тооцоолж, эрүүл мэндийн байдлаа үнэлээрэй
//           </p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-20">
//           {/* Calculator Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="border-gray-200 shadow-lg sticky top-28">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-muted">Тооцоолох</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {/* Gender Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-muted-foreground mb-3">
//                     Хүйс сонгох
//                   </label>
//                   <div className="grid grid-cols-2 gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setGender("male")}
//                       className={`p-4 rounded-xl border-2 transition-all ${
//                         gender === "male"
//                           ? "border-teal-500 bg-teal-50"
//                           : "border-gray-200 bg-white hover:border-gray-300"
//                       }`}
//                     >
//                       <div className="text-4xl mb-2">👨</div>
//                       <div className="text-sm font-medium text-muted">Эрэгтэй</div>
//                     </motion.button>

//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setGender("female")}
//                       className={`p-4 rounded-xl border-2 transition-all ${
//                         gender === "female"
//                           ? "border-pink-500 bg-pink-50"
//                           : "border-gray-200 bg-white hover:border-gray-300"
//                       }`}
//                     >
//                       <div className="text-4xl mb-2">👩</div>
//                       <div className="text-sm font-medium text-muted">Эмэгтэй</div>
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Height Input */}
//                 <div>
//                   <label className="block text-sm font-medium text-muted-foreground mb-2">
//                     Өндөр (см)
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="number"
//                       placeholder="175"
//                       value={height}
//                       onChange={(e) => setHeight(e.target.value)}
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                     />
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//                       см
//                     </span>
//                   </div>
//                 </div>

//                 {/* Weight Input */}
//                 <div>
//                   <label className="block text-sm font-medium text-muted-foreground mb-2">
//                     Жин (кг)
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="number"
//                       placeholder="70"
//                       value={weight}
//                       onChange={(e) => setWeight(e.target.value)}
//                       className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
//                     />
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//                       кг
//                     </span>
//                   </div>
//                 </div>

//                 {/* Calculate Button */}
//                 <Button
//                   onClick={calculateBMI}
//                   className="w-full bg-linear-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white py-6 text-lg shadow-md hover:shadow-lg transition-all"
//                 >
//                   Тооцоолох →
//                 </Button>

//                 {/* Result */}
//                 <AnimatePresence>
//                   {bmi && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-6"
//                     >
//                       <div className={`bg-linear-to-br ${getCategoryColor()} rounded-2xl p-6 text-white relative overflow-hidden`}>
//                         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

//                         <div className="relative z-10">
//                           <div className="text-sm font-medium mb-2 text-white/90">
//                             Таны БЖИ
//                           </div>
//                           <div className="text-5xl font-bold mb-4">{bmi}</div>
//                           <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
//                             <span className="font-semibold text-lg">{category}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* BMI Scale */}
//                       <div className="mt-4 p-4 bg-gray-50 rounded-xl">
//                         <div className="text-xs font-medium text-muted-foreground mb-3">БЖИ-ийн хэмжүүр:</div>
//                         <div className="space-y-2 text-xs">
//                           <div className="flex items-center gap-2">
//                             <div className="w-3 h-3 rounded-full bg-linear-to-r from-yellow-500 to-orange-500"></div>
//                             <span className="text-muted-foreground">&lt; 18.5 - Тураалтай</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="w-3 h-3 rounded-full bg-linear-to-r from-green-500 to-emerald-500"></div>
//                             <span className="text-muted-foreground">18.5 - 24.9 - Хэвийн</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="w-3 h-3 rounded-full bg-linear-to-r from-orange-500 to-red-500"></div>
//                             <span className="text-muted-foreground">25.0 - 29.9 - Илүүдэл жинтэй</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="w-3 h-3 rounded-full bg-linear-to-r from-red-500 to-rose-600"></div>
//                             <span className="text-muted-foreground">≥ 30.0 - Таргалалт</span>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* FAQ Section */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-4"
//           >
//             {accordionItems.map((item, index) => (
//               <motion.div
//                 key={item.value}
//                 variants={itemVariants}
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Card className="border-gray-200 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
//                   <div
//                     onClick={() => setExpandedItem(expandedItem === item.value ? null : item.value)}
//                     className="p-6"
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shrink-0">
//                         {item.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <h3 className="text-xl font-bold text-muted">{item.title}</h3>
//                           <motion.div
//                             animate={{ rotate: expandedItem === item.value ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                           >
//                             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                           </motion.div>
//                         </div>

//                         <AnimatePresence>
//                           {expandedItem === item.value && (
//                             <motion.div
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: "auto" }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.3 }}
//                               className="mt-4 space-y-3 text-muted-foreground/80 leading-relaxed"
//                             >
//                               {item.text.map((paragraph, idx) => (
//                                 <p key={idx}>{paragraph}</p>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Gender = "male" | "female";

type AccordionData = {
  value: string;
  title: string;
  text: string[];
  icon: string;
};

const accordionItems: AccordionData[] = [
  {
    value: "item-1",
    title: "БЖИ гэж юу вэ?",
    icon: "❓",
    text: [
      "БЖИ буюу биеийн жингийн индекс нь таны биеийн жинг өндөртэй харьцуулсан хэмжүүр юм.",
      "Таны одоогийн биеийн жин эрүүл эсэхийг тодорхойлоход ашиглагдана."
    ],
  },
  {
    value: "item-2",
    title: "БЖИ-ийг хэрхэн тооцоолох вэ?",
    icon: "🧮",
    text: [
      "БЖИ = кг / м²",
      "18.5 хүртэл — Тураалтай, 18.5-24.9 — Хэвийн, 25-29.9 — Илүүдэл жинтэй, 30+ — Таргалалт."
    ],
  },
  {
    value: "item-3",
    title: "БЖИ өндөр байвал яах вэ?",
    icon: "⚠️",
    text: [
      "Таргалалт нь чихрийн шижин, даралт ихсэх, зүрхний өвчний эрсдэлийг нэмэгдүүлдэг.",
      "Эрүүл хооллолт, тогтмол дасгал хөдөлгөөн хийх нь чухал."
    ],
  },
];

export default function BMICalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;

    const value = w / (h * h);
    const rounded = parseFloat(value.toFixed(1));
    setBmi(rounded);

    if (rounded < 18.5) setCategory("Тураалтай");
    else if (rounded < 25) setCategory("Хэвийн");
    else if (rounded < 30) setCategory("Илүүдэл жинтэй");
    else setCategory("Таргалалт");
  };

  const getGradient = () => {
    if (category === "Хэвийн") return "from-green-500 to-emerald-500";
    if (category === "Тураалтай") return "from-yellow-500 to-orange-500";
    if (category === "Илүүдэл жинтэй") return "from-orange-500 to-red-500";
    if (category === "Таргалалт") return "from-red-500 to-rose-600";
    return "from-gray-400 to-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-teal-50 border border-teal-200 rounded-full mb-8 shadow-sm">
            <span className="text-teal-600 text-sm font-semibold">
              Биеийн жингийн индекс
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            БЖИ Тооцоолуур
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Өөрийн БЖИ-г тооцоолж эрүүл мэндийн байдлаа үнэлээрэй.
          </p>
        </motion.div>

        {/* CALCULATOR */}
        <div className="max-w-xl mx-auto mb-28">
          <Card className="rounded-3xl shadow-2xl border border-gray-200">
            <CardContent className="p-10 space-y-8">

              {/* Gender */}
              <div className="grid grid-cols-2 gap-6">
                {["male", "female"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g as Gender)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      gender === g
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="text-4xl mb-3">
                      {g === "male" ? "👨" : "👩"}
                    </div>
                    <div className="font-semibold">
                      {g === "male" ? "Эрэгтэй" : "Эмэгтэй"}
                    </div>
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Өндөр (см)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 outline-none transition"
              />

              <input
                type="number"
                placeholder="Жин (кг)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 outline-none transition"
              />

              <Button
                onClick={calculateBMI}
                className="w-full py-6 text-lg rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg"
              >
                Тооцоолох →
              </Button>

              {/* RESULT */}
              <AnimatePresence>
                {bmi && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`rounded-3xl p-10 text-white bg-gradient-to-br ${getGradient()} shadow-xl`}
                  >
                    <div className="text-sm opacity-80 mb-2">
                      Таны БЖИ
                    </div>
                    <div className="text-6xl font-bold mb-6">{bmi}</div>
                    <div className="inline-block px-6 py-3 bg-white/20 rounded-full border border-white/30">
                      {category}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </CardContent>
          </Card>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto space-y-6">
          {accordionItems.map((item) => (
            <Card key={item.value} className="rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div
                onClick={() =>
                  setExpandedItem(
                    expandedItem === item.value ? null : item.value
                  )
                }
                className="p-8 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedItem === item.value ? 180 : 0 }}
                    className="text-gray-400"
                  >
                    ▼
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedItem === item.value && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 space-y-4 text-gray-600 leading-relaxed"
                    >
                      {item.text.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}