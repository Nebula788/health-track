"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import foodCards from "@/lib/data/foodCards";

export default function FoodsPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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
            <span className="text-teal-700 text-sm font-medium">
              Хоол хүнс & Төлөвлөгөө
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-muted mb-4">
            Хүнсний шим тэжээл
          </h1>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto">
            Өөрт тохирсон хоолны төлөвлөгөө болон шим тэжээлийн мэдээлэл
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                onClick={() => setSelectedCard(index)}
                className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`bg-linear-to-br ${card.bg} p-6 relative`}>
                  {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div> */}

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center mb-4"
                    >
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-4xl">
                        {index === 0
                          ? "💪"
                          : index === 1
                            ? "🥑"
                            : index === 2
                              ? "🌾"
                              : index === 3
                                ? "📈"
                                : index === 4
                                  ? "⚖️"
                                  : "📉"}
                      </div>
                    </motion.div>

                    <div className="text-center">
                      {card.title.map((line, i) => (
                        <p key={i} className="text-white text-lg font-bold">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground/80">
                      {card.foods
                        ? `${card.foods.length} төрлийн хүнс`
                        : "Төлөвлөгөө"}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCard !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-white rounded-3xl shadow-2xl z-50 overflow-auto"
              >
                {/* Modal Header */}
                <div
                  className={`bg-linear-to-br ${foodCards[selectedCard].bg} p-8 relative top-0 z-10`}
                >
                  {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div> */}

                  <div className="relative z-10 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">
                      {foodCards[selectedCard].title.join(" ")}
                    </h2>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Foods Section */}
                  {foodCards[selectedCard].foods && (
                    <>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
                        <span className="text-teal-700 text-sm font-medium">
                          ⚖️ 100гр бүтээгдэхүүнд агуулагдах шим тэжээл
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {foodCards[selectedCard].foods!.map((food, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            <div className="text-4xl">{food.emoji}</div>
                            <div className="flex-1">
                              <p className="font-semibold text-muted">
                                {food.name}
                              </p>
                              <p className="text-sm text-muted-foreground/80">
                                {food.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Plans Section */}
                  {foodCards[selectedCard].plans && (
                    <div className="space-y-6">
                      {foodCards[selectedCard].plans!.map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 rounded-2xl p-6"
                        >
                          <h3 className="text-xl font-bold text-muted mb-6">
                            {plan.name}
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-xl p-4 text-white">
                              <div className="text-sm font-medium mb-2">
                                🔥 Илчлэг
                              </div>
                              <div className="text-2xl font-bold">
                                {plan.nutrition.calories}
                              </div>
                            </div>

                            <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white">
                              <div className="text-sm font-medium mb-2">
                                💪 Уураг
                              </div>
                              <div className="text-2xl font-bold">
                                {plan.nutrition.protein}
                              </div>
                            </div>

                            <div className="bg-linear-to-br from-teal-500 to-cyan-500 rounded-xl p-4 text-white">
                              <div className="text-sm font-medium mb-2">
                                🌾 Нүүрс ус
                              </div>
                              <div className="text-2xl font-bold">
                                {plan.nutrition.carbs}
                              </div>
                            </div>

                            <div className="bg-linear-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                              <div className="text-sm font-medium mb-2">
                                🥑 Өөх тос
                              </div>
                              <div className="text-2xl font-bold">
                                {plan.nutrition.fat}
                              </div>
                            </div>
                          </div>

                          {plan.advice && (
                            <div className="space-y-4">
                              {plan.advice.map((block, i) => (
                                <div
                                  key={i}
                                  className="bg-teal-50 border border-teal-200 rounded-xl p-5"
                                >
                                  <h4 className="font-bold text-teal-800 mb-3">
                                    {block.title}
                                  </h4>
                                  <ul className="list-disc pl-5 space-y-1 text-teal-700 text-sm">
                                    {block.items.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
