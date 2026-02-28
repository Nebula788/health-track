"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

export default function FoodsPage() {
  const [foods, setFoods] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("foods").select(`
        id,
        name,
        calories,
        protein,
        carbs,
        fat,
        fiber,
        sugar,
        categories (
          name
        )
      `);

      setFoods(data || []);
    };

    load();
  }, []);

  const proteinFoods = foods.filter((f) => f.categories?.name === "protein");
  const fatFoods = foods.filter((f) => f.categories?.name === "fat");
  const carbFoods = foods.filter((f) => f.categories?.name === "carbs");

  const foodCards = [
    {
      title: ["Уураг", "агуулсан", "хүнс"],
      bg: "from-purple-500 to-pink-500",
      foods: proteinFoods,
    },
    {
      title: ["Өөх тос", "агуулсан", "хүнс"],
      bg: "from-orange-500 to-red-500",
      foods: fatFoods,
    },
    {
      title: ["Нүүрс ус", "агуулсан", "хүнс"],
      bg: "from-teal-500 to-cyan-500",
      foods: carbFoods,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-32 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Хүнсний шим тэжээл
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            100гр бүтээгдэхүүнд агуулагдах макро шим тэжээлийн мэдээлэл
          </p>
        </motion.div>

        {/* ================= CATEGORY CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {foodCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                onClick={() => setSelectedCard(index)}
                className="cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div
                  className={`bg-linear-to-br ${card.bg} p-10 text-white text-center`}
                >
                  {card.title.map((line, i) => (
                    <p key={i} className="font-bold text-xl">
                      {line}
                    </p>
                  ))}
                </div>

                <CardHeader className="p-6 flex justify-between items-center">
                  <span className="text-gray-600 text-sm">
                    {card.foods.length} төрлийн хүнс
                  </span>
                  <span className="text-lg">→</span>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedCard !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setSelectedCard(null)}
              />

              <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white w-full max-w-6xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                >
                  {/* HEADER */}
                  <div className="p-8 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {foodCards[selectedCard].title.join(" ")}
                    </h2>

                    <button
                      onClick={() => setSelectedCard(null)}
                      className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm hover:bg-gray-700 transition"
                    >
                      Close
                    </button>
                  </div>

                  {/* SCROLL AREA */}
                  <div className="p-8 overflow-y-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {foodCards[selectedCard].foods.map((food: any) => (
                        <div
                          key={food.id}
                          className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
                        >
                          <div className="text-xl font-semibold mb-6 text-gray-800">
                            {food.name}
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <Metric
                              label="Calories"
                              value={`${food.calories} ккал`}
                              gradient="from-gray-400 to-gray-500"
                            />
                            <Metric
                              label="Protein"
                              value={`${food.protein}гр`}
                              gradient="from-teal-500 to-cyan-500"
                            />
                            <Metric
                              label="Carbs"
                              value={`${food.carbs}гр`}
                              gradient="from-teal-400 to-teal-500"
                            />
                            <Metric
                              label="Fat"
                              value={`${food.fat}гр`}
                              gradient="from-emerald-400 to-emerald-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================= METRIC COMPONENT ================= */
function Metric({
  label,
  value,
  gradient,
}: {
  label: string;
  value: string;
  gradient: string;
}) {
  return (
    <div
      className={`rounded-2xl p-4 text-white shadow-md bg-linear-to-br ${gradient} hover:scale-105 transition`}
    >
      <div className="text-xs opacity-80">{label}</div>
      <div className="font-semibold text-base">{value}</div>
    </div>
  );
}
