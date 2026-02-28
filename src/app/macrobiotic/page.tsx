"use client";

import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import nutritionData from "@/lib/data/nutritionData";

export default function Macrobiotic() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 bg-teal-50 border border-teal-200 rounded-full mb-8 shadow-sm">
            <span className="text-teal-600 text-sm font-semibold tracking-wide">
              Шим тэжээлийн үндэс
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Калори & Энергийн тухай
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Хоол хүнснээс биед орох энерги болон макро шим тэжээлийн үүрэг,
            тэдгээрийн ач холбогдол.
          </p>
        </motion.div>

        {/* ================= INTRO CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-28"
        >
          <Card className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-10 md:p-14 text-white relative">

              <div className="text-6xl mb-6">🔥</div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Калори гэж юу вэ?
              </h3>

              <p className="text-white/90 leading-relaxed mb-6">
                <span className="font-semibold text-white">
                  Калори (илчлэг)
                </span>{" "}
                гэдэг нь хоол хүнснээс хүний биед очих энергийг хэмжих нэгж юм.
                Тухайн хүнс бидэнд хэр хэмжээний энерги өгч байгааг илэрхийлнэ.
              </p>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 mb-6">
                <p className="text-lg font-semibold">
                  Уураг + Нүүрс ус + Өөх тос =
                  <span className="text-white font-bold ml-2">
                    Макро шим тэжээл
                  </span>
                </p>
              </div>

              <p className="text-white/90 leading-relaxed">
                Энерги нь хүний өдөр тутмын бүх үйл ажиллагаанд шаардлагатай.
                Митохондри нь калори ашиглан энерги үйлдвэрлэдэг.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* ================= MACRO CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {nutritionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full flex flex-col rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white overflow-hidden">

                {/* HEADER */}
                <div className={`bg-gradient-to-br ${item.gradient} p-8`}>
                  <div className="flex items-center justify-between">

                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center text-3xl">
                      {index === 0 ? "💪" : index === 1 ? "🥑" : "🌾"}
                    </div>

                    <div className="text-right text-white">
                      <div className="text-sm opacity-80">Энерги</div>
                      <div className="text-2xl font-bold">
                        {item.energy.split("=")[1].trim()}
                      </div>
                    </div>
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

                  {item.duty && (
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-gray-800">
                        Үндсэн үүрэг:
                      </div>

                      <ul className="space-y-2">
                        {item.duty.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* FOOTER */}
                  <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {item.energy}
                    </span>

                    <button
                      className={`px-5 py-2 bg-gradient-to-r ${item.gradient} rounded-full text-white text-sm font-semibold shadow hover:opacity-90 transition`}
                    >
                      Дэлгэрэнгүй →
                    </button>
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}