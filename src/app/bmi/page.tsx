// "use client";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import TypingText from "@/components/ui/shadcn-io/typing-text";
// import { Button } from "@/components/ui/button";

// type AccordionData = {
//   value: string;
//   title: string;
//   text: string[];
//   typingSpeed?: number;
//   pauseDuration?: number;
//   variableSpeed?: { min: number; max: number };
// };

// type Gender = "male" | "female";

// const accordionItems: AccordionData[] = [
//   {
//     value: "item-1",
//     title: "БЖИ гэж юу вэ?",
//     text: [
//       "БЖИ буюу биеийн жингийн индекс нь таны биеийн жинг өндөртэй харьцуулсан хэмжүүр юм. " +
//         "БЖИ хэмжилтийг нялх хүүхэд, өсвөр насныхан, насанд хүрэгчид хүртэл ямар ч насныханд хэрэглэж болно. " +
//         "Хүмүүсийг тураалтай, хэвийн жинтэй, илүүдэл жинтэй гэж ангилах энэхүү хэмжүүрээр таны одоогийн биеийн тохиромжгүй эсвэл эрүүл бус жинтэй эсэхийг тодорхойлох боломжтой.",
//     ],
//   },
//   {
//     value: "item-2",
//     title: "БЖИ-ийг хэрхэн тооцоолох вэ?",
//     text: [
//       "БЖИ = Биеийн жин / (Өндөр x Өндөр) = кг / м². БЖИ-ийг тухайн хүний килограммаар илэрхийлсэн биеийн жинг, метрээр илэрхийлсэн өндрийн квадрат утгад хувааж олно. " +
//         "Биеийн жингийн үнэлгээ: 18.5 хүртэл туранхай, 18.5-24.9 хэвийн жин, 25.0-29.9 илүүдэл жинтэй, 30.0-34.9 Таргалалт I зэрэг, 35.0-39.9 Таргалалт II зэрэг, 40.0 дээш Таргалалт III зэрэг гэж үзнэ.",
//     ],
//   },
//   {
//     value: "item-3",
//     title: "БЖИ хэт өндөр болон бага байвал яах вэ?",
//     text: [
//       "БЖИ өндөр байвал эрүүл мэндийн байдал хүндэрч болзошгүй. Таргалалт нь хүний ​​биеийн хөдөлгөөнийг хязгаарлаад зогсохгүй хоёрдогч өвчин тусах магадлалыг нэмэгдүүлдэг. " +
//         "Таргалалт нь чихрийн шижин өвчний эрсдэлийг нэмэгдүүлж, цусны даралт ихсэх, дислипидеми болон цусан дахь липидийн хэмжээ ихсэхэд хүргэдэг. " +
//         "БЖИ 30, бүр 40-өөс дээш байвал зүрхний шигдээс, цус харвалтаар өвдөх эрсдэл эрс нэмэгддэг. ",
//     ],
//     variableSpeed: { min: 0, max: 30 },
//   },
// ];

// export default function BMICalculator() {
//   const [gender, setGender] = useState<Gender>("male");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBmi] = useState<number | null>(null);
//   const [category, setCategory] = useState("");

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
//     const threshholds = gender === "male" ? [18.5, 25, 30] : [18, 24, 30];
//     if (bmiValue < threshholds[0]) setCategory("Тураалтай");
//     else if (bmiValue < threshholds[1]) setCategory("Хэвийн");
//     else if (bmiValue < threshholds[2]) setCategory("Илүүдэл жинтэй");
//     else setCategory("Таргалалт");
//   };

//   return (
//     <div className="w-full flex pt-30 relative bg-foreground min-h-screen">
//       {/* BMI Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         id="bmi"
//         className="w-full flex items-start justify-center text-gray-900"
//       >
//         <div className="w-full max-w-md p-6 rounded-2xl bg-white shadow-xl border border-gray-200">
//           <h1 className="text-2xl font-bold text-center mb-6">
//             БЖИ Тооцоолуур
//           </h1>

//           {/* Gender Selection */}
//           <div className="flex gap-4 mb-6">
//             <button
//               onClick={() => setGender("male")}
//               className={cn(
//                 "flex-1 p-3 rounded-xl border transition cursor-pointer",
//                 gender === "male"
//                   ? "bg-blue-100 border-blue-400"
//                   : "bg-gray-50 border-gray-200 hover:bg-gray-100",
//               )}
//               // className={`flex-1 p-3 rounded-xl border transition cursor-pointer
//               // ${
//               //   gender === "male"
//               //     ? "bg-blue-100 border-blue-400"
//               //     : "bg-gray-50 border-gray-200 hover:bg-gray-100"
//               // }`}
//             >
//               <img src="/men-icon.png" className="mx-auto rounded-full" />
//             </button>

//             <button
//               onClick={() => setGender("female")}
//               className={`flex-1 p-3 rounded-xl border transition cursor-pointer
//               ${
//                 gender === "female"
//                   ? "bg-pink-100 border-pink-400"
//                   : "bg-gray-50 border-gray-200 hover:bg-gray-100"
//               }`}
//             >
//               <img src="/women-icon.png" className="mx-auto rounded-full" />
//             </button>
//           </div>

//           {/* Inputs */}
//           <div className="space-y-4">
//             <input
//               type="number"
//               placeholder="Өндөр (см)"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="number"
//               placeholder="Жин (кг)"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <Button onClick={calculateBMI}>Тооцоолох</Button>
//           </div>

//           {/* Result */}
//           {bmi && (
//             <div className="mt-6 text-center">
//               <p className="text-xl">
//                 БЖИ: <span className="font-bold">{bmi}</span>
//               </p>
//               <p className="text-lg font-semibold text-green-600">{category}</p>
//             </div>
//           )}
//         </div>
//       </motion.div>

//       {/* Accordion Section */}
//       <motion.div
//         className="w-full p-6 md:p-10 flex flex-col gap-6 text-white justify-center"
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: {},
//           show: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         <Accordion type="multiple">
//           {accordionItems.map((item) => (
//             <motion.div
//               key={item.value}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//               <AccordionItem value={item.value}>
//                 <AccordionTrigger>
//                   <span className="text-2xl font-bold text-black">
//                     {item.title}
//                   </span>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <TypingText
//                     text={item.text}
//                     typingSpeed={item.typingSpeed || 75}
//                     pauseDuration={item.pauseDuration || 1500}
//                     showCursor={true}
//                     cursorCharacter="|"
//                     variableSpeed={item.variableSpeed || { min: 0, max: 20 }}
//                     className="text-black"
//                   />
//                 </AccordionContent>
//               </AccordionItem>
//             </motion.div>
//           ))}
//         </Accordion>
//       </motion.div>
//     </div>
//   );
// }
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      "БЖИ буюу биеийн жингийн индекс нь таны биеийн жинг өндөртэй харьцуулсан хэмжүүр юм. БЖИ хэмжилтийг нялх хүүхэд, өсвөр насныхан, насанд хүрэгчид хүртэл ямар ч насныханд хэрэглэж болно.",
      "Хүмүүсийг тураалтай, хэвийн жинтэй, илүүдэл жинтэй гэж ангилах энэхүү хэмжүүрээр таны одоогийн биеийн тохиромжгүй эсвэл эрүүл бус жинтэй эсэхийг тодорхойлох боломжтой."
    ],
  },
  {
    value: "item-2",
    title: "БЖИ-ийг хэрхэн тооцоолох вэ?",
    icon: "🧮",
    text: [
      "БЖИ = Биеийн жин / (Өндөр x Өндөр) = кг / м². БЖИ-ийг тухайн хүний килограммаар илэрхийлсэн биеийн жинг, метрээр илэрхийлсэн өндрийн квадрат утгад хувааж олно.",
      "Биеийн жингийн үнэлгээ: 18.5 хүртэл туранхай, 18.5-24.9 хэвийн жин, 25.0-29.9 илүүдэл жинтэй, 30.0-34.9 Таргалалт I зэрэг, 35.0-39.9 Таргалалт II зэрэг, 40.0 дээш Таргалалт III зэрэг гэж үзнэ."
    ],
  },
  {
    value: "item-3",
    title: "БЖИ хэт өндөр болон бага байвал яах вэ?",
    icon: "⚠️",
    text: [
      "БЖИ өндөр байвал эрүүл мэндийн байдал хүндэрч болзошгүй. Таргалалт нь хүний ​​биеийн хөдөлгөөнийг хязгаарлаад зогсохгүй хоёрдогч өвчин тусах магадлалыг нэмэгдүүлдэг.",
      "Таргалалт нь чихрийн шижин өвчний эрсдэлийг нэмэгдүүлж, цусны даралт ихсэх, дислипидеми болон цусан дахь липидийн хэмжээ ихсэхэд хүргэдэг. БЖИ 30, бүр 40-өөс дээш байвал зүрхний шигдээс, цус харвалтаар өвдөх эрсдэл эрс нэмэгддэг."
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

    if (!h || !w) {
      setBmi(null);
      setCategory("");
      return;
    }

    const bmiValue = w / (h * h);
    setBmi(parseFloat(bmiValue.toFixed(1)));
    const thresholds = gender === "male" ? [18.5, 25, 30] : [18, 24, 30];
    if (bmiValue < thresholds[0]) setCategory("Тураалтай");
    else if (bmiValue < thresholds[1]) setCategory("Хэвийн");
    else if (bmiValue < thresholds[2]) setCategory("Илүүдэл жинтэй");
    else setCategory("Таргалалт");
  };

  const getCategoryColor = () => {
    if (category === "Хэвийн") return "from-green-500 to-emerald-500";
    if (category === "Тураалтай") return "from-yellow-500 to-orange-500";
    if (category === "Илүүдэл жинтэй") return "from-orange-500 to-red-500";
    if (category === "Таргалалт") return "from-red-500 to-rose-600";
    return "from-gray-400 to-gray-500";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6"
          >
            <span className="text-teal-700 text-sm font-medium">Биеийн жингийн индекс</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4">
            БЖИ Тооцоолуур
          </h1>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
            Өөрийн биеийн жингийн индексээ тооцоолж, эрүүл мэндийн байдлаа үнэлээрэй
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-200 shadow-lg sticky top-28">
              <CardHeader>
                <CardTitle className="text-2xl text-muted">Тооцоолох</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Gender Selection */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Хүйс сонгох
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setGender("male")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        gender === "male"
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="text-4xl mb-2">👨</div>
                      <div className="text-sm font-medium text-muted">Эрэгтэй</div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setGender("female")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        gender === "female"
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="text-4xl mb-2">👩</div>
                      <div className="text-sm font-medium text-muted">Эмэгтэй</div>
                    </motion.button>
                  </div>
                </div>

                {/* Height Input */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Өндөр (см)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      см
                    </span>
                  </div>
                </div>

                {/* Weight Input */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Жин (кг)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      кг
                    </span>
                  </div>
                </div>

                {/* Calculate Button */}
                <Button
                  onClick={calculateBMI}
                  className="w-full bg-linear-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white py-6 text-lg shadow-md hover:shadow-lg transition-all"
                >
                  Тооцоолох →
                </Button>

                {/* Result */}
                <AnimatePresence>
                  {bmi && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <div className={`bg-linear-to-br ${getCategoryColor()} rounded-2xl p-6 text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                        
                        <div className="relative z-10">
                          <div className="text-sm font-medium mb-2 text-white/90">
                            Таны БЖИ
                          </div>
                          <div className="text-5xl font-bold mb-4">{bmi}</div>
                          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="font-semibold text-lg">{category}</span>
                          </div>
                        </div>
                      </div>

                      {/* BMI Scale */}
                      <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                        <div className="text-xs font-medium text-muted-foreground mb-3">БЖИ-ийн хэмжүүр:</div>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-r from-yellow-500 to-orange-500"></div>
                            <span className="text-muted-foreground">&lt; 18.5 - Тураалтай</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-r from-green-500 to-emerald-500"></div>
                            <span className="text-muted-foreground">18.5 - 24.9 - Хэвийн</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-r from-orange-500 to-red-500"></div>
                            <span className="text-muted-foreground">25.0 - 29.9 - Илүүдэл жинтэй</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-r from-red-500 to-rose-600"></div>
                            <span className="text-muted-foreground">≥ 30.0 - Таргалалт</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.value}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-gray-200 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  <div
                    onClick={() => setExpandedItem(expandedItem === item.value ? null : item.value)}
                    className="p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-muted">{item.title}</h3>
                          <motion.div
                            animate={{ rotate: expandedItem === item.value ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                        
                        <AnimatePresence>
                          {expandedItem === item.value && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-3 text-muted-foreground/80 leading-relaxed"
                            >
                              {item.text.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div> */}
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Хувь хүний төлөвлөгөө хэрэгтэй юу?
            </h2>
            <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
              Мэргэжлийн зөвлөгөө авч, өөрт тохирсон хоолны болон дасгалын төлөвлөгөө гарга
            </p>
            <Button className="px-10 py-6 bg-white hover:bg-gray-100 text-primary text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
              Төлөвлөгөө үүсгэх →
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}