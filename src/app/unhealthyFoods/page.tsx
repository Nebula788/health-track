
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import modernDietData from "@/lib/data/eatingHabits";

export default function ModernDiet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-red-50 border border-red-200 rounded-full mb-8 shadow-sm">
            <span className="text-red-600 text-sm font-semibold tracking-wide">
              ⚠ Анхааруулга
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Буруу хооллолт
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Өдөр тутмын буруу хооллолт болон тэдгээрийн сөрөг нөлөөллийг
            ойлгож, эрүүл амьдралын хэв маягийг сонгоцгооё.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {modernDietData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full flex flex-col border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl bg-white">

                {/* HEADER */}
                <div className={`bg-gradient-to-br ${item.color} p-8`}>
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 flex items-center justify-center text-5xl"
                    >
                      {item.emoji}
                    </motion.div>
                  </div>
                </div>

                {/* CONTENT */}
                <CardContent className="flex flex-col flex-1 p-8">
                  <CardTitle className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </CardTitle>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-semibold text-gray-800">
                      Сөрөг нөлөө:
                    </div>

                    <ul className="space-y-2">
                      {item.duty.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-red-500 mt-0.5">✗</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-start gap-3 bg-red-50 rounded-xl p-4">
                      <span className="text-red-500 text-xl shrink-0">⚠️</span>
                      <p className="text-sm font-medium text-red-700 leading-relaxed">
                        {item.energy}
                      </p>
                    </div>
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* ================= TIPS SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-14 border border-gray-200 shadow-xl"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="text-green-600 text-sm font-semibold">
                ✓ Зөвлөгөө
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Эрүүл хооллолтын зааварчилгаа
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Эрүүл хооллолтын энгийн боловч чухал зуршлуудыг хэвшүүлэх нь
              урт хугацаанд эрүүл мэндэд эерэг нөлөө үзүүлнэ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🥗",
                title: "Ногоо, жимс их идэх",
                desc: "Өдөрт дор хаяж 5 порц ногоо жимс хэрэглэх.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "💧",
                title: "Ус их уух",
                desc: "Өдөрт 2-3 литр цэвэр ус уух.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🍽️",
                title: "Тогтмол хооллох",
                desc: "Өдөрт 3-5 удаа бага хэмжээгээр идэх.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🏃",
                title: "Хөдөлгөөн хийх",
                desc: "Долоо хоногт 150 минут дасгал хөдөлгөөн хийх.",
                color: "from-purple-500 to-pink-500",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${tip.color} rounded-2xl flex items-center justify-center text-2xl text-white shrink-0`}
                >
                  {tip.icon}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}