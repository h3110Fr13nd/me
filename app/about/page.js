"use client";

import { motion } from "framer-motion";
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const experience = [
    {
      title: "Senior ML Engineer",
      company: "AI Solutions Inc.",
      period: "2021 - Present",
      description: "Leading the development of computer vision and NLP solutions for enterprise clients. Implemented state-of-the-art deep learning models resulting in 40% improvement in accuracy.",
    },
    {
      title: "Software Developer",
      company: "Tech Innovations Ltd.",
      period: "2019 - 2021",
      description: "Full-stack development using React, Node.js, and Python. Built scalable microservices and REST APIs serving millions of requests daily.",
    },
    {
      title: "ML Research Assistant",
      company: "University Research Lab",
      period: "2018 - 2019",
      description: "Conducted research in deep learning and computer vision. Published 2 papers in top-tier conferences.",
    },
  ];

  const education = [
    {
      degree: "M.S. in Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      focus: "Machine Learning and Artificial Intelligence",
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Indian Institute of Technology",
      period: "2013 - 2017",
      focus: "Computer Science and Engineering",
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Bio Section */}
        <motion.div variants={fadeIn} className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              I&apos;m a Machine Learning Engineer and Software Developer with over 5 years of experience
              building AI-powered solutions and scalable applications. My expertise spans computer vision,
              natural language processing, and full-stack development.
            </p>
            <p className="text-lg text-muted-foreground">
              I&apos;m passionate about applying cutting-edge machine learning techniques to solve real-world
              problems and create impactful solutions that make a difference.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section variants={fadeIn} className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="grid gap-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section variants={fadeIn} className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.school}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}