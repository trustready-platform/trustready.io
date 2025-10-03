"use client";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize the security of your data and systems above all else.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Your compliance success is our success. We're with you every step.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate, thorough, and reliable compliance solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            About{" "}
            <Link
              href="/"
              className="text-inherit hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              Trustready
            </Link>
          </h1>{" "}
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We help fast-growing companies achieve compliance without the
            hassle. From audit preparation to ongoing monitoring, our platform
            ensures you stay compliant while focusing on growth. Built for
            startups and enterprises alike, we make trust your competitive
            advantage.
          </p>
        </motion.div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* --- Our Story --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl text-center font-bold mb-6">Our Story</h1>
            <div className="space-y-4">
              <p className="text-xl">
                Founded in 2025, Trustready emerged from a simple observation:
                compliance shouldn&apos;t be a barrier to growth. Our founder,
                having spent years in cybersecurity and audit roles, witnessed
                countless companies struggle with manual, time-consuming
                compliance processes.
              </p>
              <p className="text-xl">
                We built Trustready to change that narrative. By combining deep
                compliance expertise with cutting-edge automation technology,
                we&apos;ve created a platform that makes achieving and
                maintaining compliance as straightforward as possible.
              </p>
              <p className="text-xl">
                Today, we help several companies across industries navigate
                complex regulatory landscapes, from startups seeking their first
                SOC 2 to enterprises managing multiple frameworks
                simultaneously.
              </p>
            </div>
          </motion.div>

          {/* --- Our Values --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center ">Our Values</h2>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-4">
                    <CardContent className="pt-4">
                      <value.icon className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl p-12 text-center"
        >
          <section className="mx-auto">
		  <div className="grid lg:grid-cols-2 gap-10 items-start">
		  	  <div>
			  <h1 className="text-4xl text-center font-bold mb-6">Waiting List</h1>
	              <Button
                size="lg"
                className="gap-2 text-xl px-10 py-7" /* bigger text + more padding */
                asChild
              >
                <Link href="/contact">Join</Link>
              </Button>
			  </div>
			  <div>
			  <h1 className="text-4xl text-center font-bold mb-6">Meeting</h1>
	              <Button
                size="lg"
                className="gap-2 text-xl px-10 py-7" /* bigger text + more padding */
                asChild
              >
                <Link href="https://tidycal.com/m4j7k9m/trustready">Book</Link>
              </Button>
			  </div>
            </div>
          </section>{" "}
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}

import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Target, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
