"use client";
const services = [
  {
    icon: Shield,
    title: "SOC 2 Compliance",
    features: [
      "Automated evidence collection",
      "Pre-audit readiness assessment",
      "Ongoing monitoring",
      "Expert guidance",
    ],
    popular: true,
  },
  {
    icon: Zap,
    title: "Compliance Automation",
    description:
      "Automated compliance monitoring with real-time dashboards and intelligent alerting systems.",
    features: [
      "Real-time monitoring",
      "Automated reporting",
      "Risk scoring",
      "Integration APIs",
    ],
    timeline: "1-2 months",
    popular: true,
  },
  {
    icon: Globe,
    title: "ISO 27001 Certification",
    features: [
      "Risk assessment",
      "ISMS implementation",
      "Policy templates",
      "Certification support",
    ],
    popular: false,
  },

  {
    icon: FileCheck,
    title: "Multi-Framework Management",
    features: [
      "Unified dashboard",
      "Shared evidence",
      "Cross-framework mapping",
      "Efficiency optimization",
    ],
    popular: false,
  },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email"),
  company: z.string().optional(),
  phone: z
    .string()
    .refine(
      (val) => !val || validator.isMobilePhone(val),
      "Invalid phone number",
    ),
  query: z.string().min(2, "Query must be at least 2 characters"),
});

type FormData = z.infer<typeof formSchema>;

function ComplianceMadeEasy() {
  return (
    <>
      <div className="py-1">
        <h3 className="justify-bottom text-3xl mb-4">
          Rapid Compliance for Startups
        </h3>
        <div className="flex justify-center">
          <ComplianceBadges />
        </div>
      </div>
    </>
  );
}

function SupportedFrameworks() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 py-10">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: index * 0.1 }}
          className="relative" /* keep badge positioning */
        >
          <Card
            className={`h-full transition-transform duration-300 hover:scale-[1.03] ${
              service.popular ? "ring" : ""
            }`}
          >
            {service.popular && (
              <Badge className="absolute -top-2 left-4">Most Popular</Badge>
            )}
            <CardHeader>
              <service.icon className="w-10 h-10 mb-2" />
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", phone: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error("Email send failed");
      }
    } catch (err) {
      console.error("Request failed", err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Link href="/" className="group">
        <h1
          className="text-7xl font-extrabold text-center py-5 mb-6
                 text-black dark:text-white
                 /* use the OKLCH value that is already defined */
                 group-hover:text-[oklch(0.6171_0.1375_39.0427)]
                 dark:group-hover:text-[oklch(0.6724_0.1308_38.7559)]
                 transition-colors duration-300"
        >
          Trustready
        </h1>
      </Link>

      <ComplianceMadeEasy />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SupportedFrameworks />
        </div>
        <div>
          <section className="w-full max-w-lg py-0 px-6">
            <h3 className="text-4xl font-bold text-center mb-6">
              Get Early Access
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your contact number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Query</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          className="resize-y w-full"
                          placeholder="A detailed description of your inquiry and the compliance framework you're interested in."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-green-600 font-medium"
                >
                  Thanks! We’ll reach out soon.
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { ComplianceBadges } from "@/components/compliance-badges";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import validator from "validator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Shield, FileCheck, CheckCircle, Globe, Zap } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
