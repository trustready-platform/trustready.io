"use client";

const services = [
  {
    icon: Shield,
    title: "SOC 2 Compliance",
    description:
      "Comprehensive SOC 2 Type I and Type II readiness with automated evidence collection and continuous monitoring.",
    features: [
      "Automated evidence collection",
      "Pre-audit readiness assessment",
      "Ongoing monitoring",
      "Expert guidance",
    ],
    timeline: "3-6 months",
    popular: true,
  },
  {
    icon: Globe,
    title: "ISO 27001 Certification",
    description:
      "Complete ISO 27001 implementation with risk assessment, policy development, and certification support.",
    features: [
      "Risk assessment",
      "ISMS implementation",
      "Policy templates",
      "Certification support",
    ],
    timeline: "6-12 months",
    popular: false,
  },
  {
    icon: Heart,
    title: "HIPAA Compliance",
    description:
      "Healthcare-focused compliance with comprehensive BAA management and security controls.",
    features: [
      "BAA management",
      "Risk assessments",
      "Security controls",
      "Training programs",
    ],
    timeline: "2-4 months",
    popular: false,
  },
  {
    icon: Users,
    title: "GDPR Compliance",
    description:
      "European privacy regulation compliance with data mapping, consent management, and breach procedures.",
    features: [
      "Data mapping",
      "Consent management",
      "Breach procedures",
      "DPIA templates",
    ],
    timeline: "4-8 months",
    popular: false,
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
    icon: FileCheck,
    title: "Multi-Framework Management",
    description:
      "Manage multiple compliance frameworks from a single platform with shared controls and evidence.",
    features: [
      "Unified dashboard",
      "Shared evidence",
      "Cross-framework mapping",
      "Efficiency optimization",
    ],
    timeline: "Ongoing",
    popular: false,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Assessment",
    description:
      "We evaluate your current compliance posture and identify gaps.",
  },
  {
    step: "2",
    title: "Planning",
    description:
      "Custom roadmap with timelines, milestones, and resource requirements.",
  },
  {
    step: "3",
    title: "Implementation",
    description:
      "Guided implementation with automated tools and 24/7 expert support.",
  },
  {
    step: "4",
    title: "Monitoring",
    description:
      "Continuous monitoring and maintenance to ensure ongoing compliance.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "80% Faster",
    description: "Reduce compliance preparation time with automation",
  },
  {
    icon: Target,
    title: "99.8% Success Rate",
    description: "Industry-leading audit success rate",
  },
  {
    icon: Shield,
    title: "Expert Support",
    description: "24/7 access to compliance professionals",
  },
];

export default function SeevicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
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

          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From SOC 2 to ISO 27001, we provide comprehensive compliance
            solutions that scale with your business. Automated, expert-guided,
            and designed for modern companies.
          </p>
        </motion.div>
      </section>
      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Our Offerings</h2>
          <p className="max-w-2xl mx-auto text-xl">
            Comprehensive compliance solutions tailored to your industry and
            business needs. Book a meeting with us to find out more.
          </p>
          <Button
            size="lg"
            className="gap-2 text-xl px-10 py-7 mt-8" /* bigger text + more padding */
            asChild
          >
            <Link href="https://tidycal.com/m4j7k9m/trustready">Book</Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full ${service.popular ? "ring" : ""}`}>
                {service.popular && (
                  <Badge className="absolute -top-2 left-4">Most Popular</Badge>
                )}
                <CardHeader>
                  <service.icon className="w-10 h-10 mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Process carousel */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="max-w-2xl mx-auto">
            A proven methodology that ensures successful compliance outcomes
            every time.
          </p>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {processSteps.map((step) => (
              <CarouselItem
                key={step.step}
                className="md:basis-1/2 lg:basis-1/3" /* 1 / 2 / 3 cards per view */
              >
                <div className="p-4">
                  <Card className="h-full flex flex-col items-center justify-center text-center p-8 shadow-md">
                    <span className="text-5xl font-extrabold text-primary mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="mx-auto">
        <div className="flex gap-5 justify-center px-10">
          <Button
            size="lg"
            className="gap-2 text-xl px-10 py-7" /* bigger text + more padding */
            asChild
          >
            <Link href="/contact">Join Our Early Access Program</Link>
          </Button>
        </div>
      </section>{" "}
      <Footer />
    </main>
  );
}

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileCheck,
  Users,
  Globe,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
