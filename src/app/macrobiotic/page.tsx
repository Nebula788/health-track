"use client";
import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import nutritionData from "@/lib/data/nutritionData";

const Macrobiotic = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="macrobiotic" className="px-6 py-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              Шим тэжээлийн үндэс
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-muted mb-4">
            Калори & Энергийн тухай
          </h2>
          <p className="text-muted-foreground/80 text-lg max-w-3xl mx-auto">
            Хоол хүнснээс биед орох энерги болон макро шим тэжээлийн үүрэг
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="border-gray-200 shadow-lg overflow-hidden">
            <div className="relative bg-linear-to-br from-primary to-secondary p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Калори гэж юу вэ?
                </h3>

                <div className="space-y-4 text-teal-50 text-base leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">
                      Калори (илчлэг)
                    </span>{" "}
                    гэдэг нь хоол хүнснээс хүний биед очих энергийг хэмжих нэгж
                    юм. Энгийнээр хэлбэл тухайн хоол хүнс бидэнд хэр хэмжээний
                    энерги өгч байгааг илэрхийлнэ.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      <span className="font-bold text-xl">
                        Уураг, нүүрс ус, өөх тос
                      </span>{" "}
                      гурвыг нийлүүлээд{" "}
                      <span className="font-bold text-xl">
                        макро шим тэжээл
                      </span>{" "}
                      гэж нэрлэдэг.
                    </p>
                  </div>

                  <p>
                    <span className="font-semibold text-white">Энерги</span> нь
                    хүний өдөр тутмын бүх үйл ажиллагаанд зайлшгүй хэрэгтэй.
                    Бидний эс дотор орших митохондри хэмээх бичил эрхтэнцэр
                    калори ашиглан энерги үйлдвэрлэдэг.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Macro Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {nutritionData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants as any}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Icon Header */}
                <div
                  className={`bg-linear-to-br ${item.gradient} p-6 relative`}
                >
                  {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div> */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-3xl">
                          {index === 0 ? "💪" : index === 1 ? "🥑" : "🌾"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm font-medium">
                        Энерги
                      </div>
                      <div className="text-white text-xl font-bold">
                        {item.energy.split("=")[1].trim()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl font-bold text-muted">
                    {item.title}
                  </CardTitle>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {item.duty && (
                    <div className="space-y-2 pt-2">
                      <div className="text-sm font-semibold text-muted">
                        Үндсэн үүрэг:
                      </div>
                      <ul className="space-y-2">
                        {item.duty.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground/80"
                          >
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div
                    className={`mt-4 pt-4 border-t border-gray-200 flex items-center justify-between`}
                  >
                    <span className="text-sm font-medium text-muted">
                      {item.energy}
                    </span>
                    <div
                      className={`px-3 py-1 bg-linear-to-r ${item.gradient} rounded-full`}
                    >
                      <span className="text-white text-xs font-semibold">
                        Дэлгэрэнгүй →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-muted mb-3">
              Өөрийн хоолны төлөвлөгөө гарга
            </h3>
            <p className="text-muted-foreground/80 mb-6 max-w-md">
              Эдгээр мэдээлэлд үндэслэн өөрийн биеийн онцлогт тохирсон хоолны
              төлөвлөгөө үүсгээрэй
            </p>
            <button className="bg-linear-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
              Төлөвлөгөө үүсгэх →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Macrobiotic;
