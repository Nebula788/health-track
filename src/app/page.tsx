"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Link from "next/link";
// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&h=900&fit=crop"
          alt="Healthy food background"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-/85 to-background/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6"
          >
            <span className="text-teal-700 text-sm font-medium">
              Эрүүл мэндийн шинэ түвшин
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-muted leading-tight mb-6"
          >
            Эрүүл амьдралын
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              хэв маяг
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed mb-8"
          >
            Биеийн жингийн индекс, хоолны төлөвлөгөө, дасгал хөдөлгөөний хяналт
            - бүгдийг нэг дороос. Өөрийн эрүүл мэндийн зорилгодоо хүрэхэд тань
            туслах бүрэн шийдэл.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/bmi">
              <Button className="bg-linear-to-r from-primary to-secondary hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                BMI тооцоолох →
              </Button>
            </Link>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-gray-400"
            >
              Дэлгэрэнгүй
            </Button>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "10K+", label: "Хэрэглэгчид" },
              { value: "50K+", label: "Дасгалууд" },
              { value: "98%", label: "Сэтгэл ханамж" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-muted">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Component
export default function HealthLandingPage() {
  const features = [
    {
      icon: "📊",
      title: "BMI тооцоолуур",
      description:
        "Биеийн жингийн индексээ хурдан тооцоолж, эрүүл мэндийн үнэлгээ аваарай",
      gradient: "from-teal-500 to-cyan-500",
      href: "/bmi",
    },
    {
      icon: "🍽️",
      title: "Хоолны төлөвлөгөө",
      description:
        "Хувь хүнд тохирсон хоолны төлөвлөгөө боловсруулж, эрүүл хооллолтоо хянаарай",
      gradient: "from-orange-500 to-red-500",
      href: "/foods",
    },
    {
      icon: "💪",
      title: "Дасгал хөдөлгөөн",
      description:
        "Өөрийн зорилгод нийцсэн дасгалын төлөвлөгөө гаргаж, ахиц дэвшлээ хянаарай",
      gradient: "from-purple-500 to-pink-500",
      href: "/exercises",
    },
    {
      icon: "📈",
      title: "Ахиц хянах",
      description:
        "Жингийн өөрчлөлт, калорийн хэрэглээ болон бусад үзүүлэлтээ хадгалаарай",
      gradient: "from-green-500 to-emerald-500",
      href: "/progress",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-muted mb-4">
              Бүх зүйл нэг дороос
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Эрүүл мэнд, хоол тэжээл, дасгал хөдөлгөөнөө хянах бүрэн багц
              боломжууд
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={feature.href} className="block h-full">
                  <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <CardHeader>
                      <div
                        className={`inline-flex p-4 bg-linear-to-br ${feature.gradient} 
              rounded-xl mb-4 text-white shadow-md text-4xl w-fit 
              group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>

                      <CardTitle className="text-2xl group-hover:text-teal-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>

                      <div className="mt-6 flex items-center text-teal-600 font-medium group-hover:translate-x-1 transition-transform">
                        <span className="text-sm">Дэлгэрэнгүй үзэх</span>
                        <span className="ml-2">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-linear-to-r from-primary to-secondary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Өнөөдөр эхлэх бэлэн үү?
            </h2>
            <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
              Өөрийн эрүүл мэндийн аяллыг эхлүүлж, зорилгодоо хүрэхэд тань
              туслая
            </p>
            <Button className="px-10 py-6 bg-white hover:bg-gray-100 text-primary text-lg font-bold shadow-xl hover:shadow-2xl transition">
              Үнэгүй эхлэх
            </Button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
