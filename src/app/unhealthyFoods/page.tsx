"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import modernDietData from "@/lib/data/eatingHabits";

export default function ModernDiet() {
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
            className="inline-block px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6"
          >
            <span className="text-red-700 text-sm font-medium">
              Анхааруулга
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4">
            Буруу хооллолт
          </h1>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
            Өдөр тутмын буруу хооллолт болон тэдгээрийн сөрөг нөлөөлөл
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {modernDietData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Icon Header */}
                <div className={`bg-linear-to-br ${item.color} p-6 relative`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center"
                    >
                      <div className="text-5xl">{item.emoji}</div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl font-bold text-muted">
                    {item.title}
                  </CardTitle>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-sm font-semibold text-muted">
                      Сөрөг нөлөө:
                    </div>
                    <ul className="space-y-2">
                      {item.duty.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground/80"
                        >
                          <span className="text-red-500 mt-0.5">✗</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-2 bg-red-50 rounded-lg p-3">
                      <span className="text-red-500 text-lg shrink-0">⚠️</span>
                      <p className="text-sm font-medium text-red-700">
                        {item.energy}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg mb-20"
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
              <span className="text-green-700 text-sm font-medium">
                Зөвлөгөө
              </span>
            </div>
            <h2 className="text-3xl font-bold text-muted mb-3">
              Эрүүл хооллолтын зааварчилгаа
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🥗",
                title: "Ногоо, жимс их идэх",
                desc: "Өдөрт 5 порц ногоо жимс хэрэглэх",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "💧",
                title: "Ус их уух",
                desc: "Өдөрт 2-3 литр цэвэр ус уух",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🍽️",
                title: "Тогтмол хооллох",
                desc: "Өдөрт 3-5 удаа жижиг хэмжээгээр идэх",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🏃",
                title: "Хөдөлгөөн хийх",
                desc: "Долоо хоногт 150 минут дасгал хийх",
                color: "from-purple-500 to-pink-500",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${tip.color} rounded-xl flex items-center justify-center shrink-0 text-2xl`}
                >
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-bold text-muted mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground/80">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
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
              Эрүүл хооллолт эхлүүлэх үү?
            </h2>
            <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
              Мэргэжлийн зөвлөгөө авч, өөрт тохирсон хоолны төлөвлөгөө гарга
            </p>
            <button className="px-10 py-6 bg-white hover:bg-gray-100 text-primary text-lg font-bold shadow-xl hover:shadow-2xl transition-all rounded-lg">
              Төлөвлөгөө үүсгэх →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
