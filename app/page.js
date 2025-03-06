"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vijaykushwaha",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vijaykushwaha",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:vijay.kushwaha@example.com",
    icon: Mail,
  },
];

const technologies = [
  "Python", "TensorFlow", "PyTorch", "React", 
  "Next.js", "Node.js", "AWS", "Docker"
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-primary">Vijay Kushwaha</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Machine Learning Engineer & Full Stack Developer
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Technologies */}
        <div className="absolute bottom-0 w-full overflow-hidden py-8 bg-gradient-to-t from-background to-transparent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center flex-wrap gap-4 px-4"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Globe className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>
    </div>
  );
}
