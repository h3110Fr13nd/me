"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Image Recognition System",
    description: "Deep learning model for real-time object detection and classification using TensorFlow and OpenCV.",
    tags: ["Machine Learning", "Python", "TensorFlow", "OpenCV"],
    image: "/project1.jpg",
    github: "https://github.com/vijaykushwaha/ai-image-recognition",
    demo: "https://demo.example.com/ai-vision",
    category: "Machine Learning"
  },
  {
    title: "Smart Document Parser",
    description: "NLP-based system for extracting and categorizing information from unstructured documents.",
    tags: ["NLP", "Python", "spaCy", "FastAPI"],
    image: "/project2.jpg",
    github: "https://github.com/vijaykushwaha/document-parser",
    category: "Machine Learning"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/project3.jpg",
    github: "https://github.com/vijaykushwaha/portfolio",
    demo: "https://vijaykushwaha.com",
    category: "Web Development"
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for tracking sales, inventory, and customer behavior.",
    tags: ["React", "Node.js", "MongoDB", "D3.js"],
    image: "/project4.jpg",
    github: "https://github.com/vijaykushwaha/analytics-dashboard",
    demo: "https://demo.example.com/dashboard",
    category: "Web Development"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for automating AWS cloud deployments.",
    tags: ["AWS", "Terraform", "Python", "Docker"],
    image: "/project5.jpg",
    github: "https://github.com/vijaykushwaha/cloud-automation",
    category: "DevOps"
  },
  {
    title: "Microservices Monitoring System",
    description: "Comprehensive monitoring solution for distributed microservices architecture.",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Go"],
    image: "/project6.jpg",
    github: "https://github.com/vijaykushwaha/monitoring-system",
    category: "DevOps"
  }
];

const categories = ["All", "Machine Learning", "Web Development", "DevOps"];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in machine learning, web development, and DevOps.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setIsAnimating(true);
                setSelectedCategory(category);
              }}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}