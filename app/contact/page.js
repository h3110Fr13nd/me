"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Send, AlertTriangle } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:vijay.kushwaha@example.com",
    username: "vijay.kushwaha@example.com"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/vijaykushwaha",
    username: "vijaykushwaha"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/vijaykushwaha",
    username: "vijaykushwaha"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/vijaykushwaha",
    username: "@vijaykushwaha"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [touched, setTouched] = useState({});
  
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters long" : null;
      case "email":
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
          ? "Invalid email address" 
          : null;
      case "message":
        return value.length < 10 ? "Message must be at least 10 characters long" : null;
      default:
        return null;
    }
  };

  const getErrors = () => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });
    return errors;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = getErrors();
    
    if (Object.keys(errors).length > 0) {
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setFormState(prev => ({ ...prev, error: "Please fix the errors in the form" }));
      return;
    }

    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: "Failed to send message. Please try again."
      });
    }
  };

  const errors = getErrors();
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out through any of these channels
            or use the contact form.
          </p>

          <div className="space-y-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/10 transition-colors"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&aposll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-md border ${
                      touched.name && errors.name ? 'border-destructive' : 'border-input'
                    } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-md border ${
                      touched.email && errors.email ? 'border-destructive' : 'border-input'
                    } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="your.email@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="What&apos;s this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    className={`w-full rounded-md border ${
                      touched.message && errors.message ? 'border-destructive' : 'border-input'
                    } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    placeholder="Your message..."
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                className="w-full"
                onClick={handleSubmit}
                disabled={formState.isSubmitting || (!isFormValid && Object.keys(touched).length > 0)}
              >
                {formState.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <AnimatePresence>
                {formState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full p-3 rounded-md bg-destructive/10 text-destructive text-sm flex items-center"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    {formState.error}
                  </motion.div>
                )}

                {formState.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full p-3 rounded-md bg-green-500/10 text-green-500 text-sm flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}