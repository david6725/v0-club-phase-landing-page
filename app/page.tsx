"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Globe, Zap, Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Student Council President",
      testimonial:
        "ClubPhase transformed our debate club from having just an Instagram account to a professional website that actually helps us recruit members and showcase our achievements.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Drama Club Vice President",
      testimonial:
        "Our ticket sales increased by 300% after launching our website. Parents and students can now easily find show information and connect with our community.",
    },
    {
      name: "Emma Thompson",
      role: "Environmental Club Leader",
      testimonial:
        "The website helped us organize our recycling drive and coordinate with other schools. We've never been more organized or made such a real impact!",
    },
    {
      name: "David Kim",
      role: "Robotics Team Captain",
      testimonial:
        "Sponsors take us seriously now that we have a professional website showcasing our achievements. It's made a real difference in our funding opportunities.",
    },
    {
      name: "Aisha Patel",
      role: "Art Club President",
      testimonial:
        "We can finally showcase our members' artwork properly and attract new artists to join our creative community. The transparency and dedication shows in every feature.",
    },
  ]

  const faqs = [
    {
      question: "What is ClubPhase?",
      answer: "ClubPhase helps high school clubs create a professional online presence with a custom website.",
    },
    {
      question: "How long does it take to get a site?",
      answer: "Most clubs get their site launched within a few days after submitting their info.",
    },
    {
      question: "Can we customize the design?",
      answer: "Yes! You can personalize colors, photos, and content to match your club's identity.",
    },
    {
      question: "Do you guys only do this for high school clubs?",
      answer:
        "Right now, yes! Our focus is on helping high school clubs stand out — but we plan to expand in the future.",
    },
    {
      question: "Do members need accounts?",
      answer: "No, members can access updates, photos, and events directly on the site — no logins required.",
    },
    {
      question: "What if our officers graduate?",
      answer: "You can easily transfer admin access to new officers so your club website stays active year after year.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Glassmorphism Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4 animate-fade-in">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-4xl shadow-xl my-1.5 py-1.5 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center mr-8">
              <img src="/clubphase-logo.png" alt="ClubPhase" className="h-16 w-auto leading-7" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                How It Works
              </a>
              <a
                href="#why-this-matters"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                Why This Matters
              </a>
              <a
                href="#showcase"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                Showcase
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                FAQ
              </a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" className="bg-transparent border-gray-300 text-gray-700">
                Contact
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-3">
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  How It Works
                </a>
                <a href="#why-this-matters" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Why This Matters
                </a>
                <a href="#showcase" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Showcase
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Testimonials
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Pricing
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  FAQ
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-3 border-t border-white/20">
                  <Button variant="outline" className="bg-transparent border-gray-300 text-gray-700">
                    Login
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient grid-pattern relative overflow-hidden pt-24 pb-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 mx-auto my-[-10px]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6 text-balance sm:text-8xl">
              Custom Websites for <span className="text-primary italic text-9xl">High School Clubs</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              Clubs deserve more than a forgotten Instagram page.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="cta-button text-white px-8 py-3 text-lg relative">
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
                Learn More
              </Button>
            </div>

            {/* Launch Offer Badge */}
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
              Launch Offer – Save 20% this month
            </Badge>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Scrolling Testimonials Section */}
      <div className="relative mt-16 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">What people say</p>
          <h3 className="text-2xl font-bold text-foreground">Real feedback from clubs</h3>
        </div>

        {/* Gradient fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

        {/* Top row - scrolling left to right */}
        <div className="flex animate-scroll-left mb-4 space-x-4">
          {[
            {
              name: "Sarah Chen",
              role: "Student Council",
              quote: "ClubPhase transformed our debate club from just an Instagram to a professional platform.",
              avatar: "SC",
            },
            {
              name: "Marcus Rodriguez",
              role: "Drama Club VP",
              quote: "Our ticket sales increased 300% after launching our website.",
              avatar: "MR",
            },
            {
              name: "Emma Thompson",
              role: "Environmental Club",
              quote: "We've never been more organized or made such a real impact!",
              avatar: "ET",
            },
            {
              name: "David Kim",
              role: "Robotics Captain",
              quote: "Sponsors take us seriously now with our professional website.",
              avatar: "DK",
            },
            {
              name: "Aisha Patel",
              role: "Art Club President",
              quote: "We can finally showcase our artwork properly and attract new artists.",
              avatar: "AP",
            },
            {
              name: "Jake Wilson",
              role: "Chess Club",
              quote: "Tournament organization became so much easier with our new site.",
              avatar: "JW",
            },
          ]
            .concat([
              {
                name: "Sarah Chen",
                role: "Student Council",
                quote: "ClubPhase transformed our debate club from just an Instagram to a professional platform.",
                avatar: "SC",
              },
              {
                name: "Marcus Rodriguez",
                role: "Drama Club VP",
                quote: "Our ticket sales increased 300% after launching our website.",
                avatar: "MR",
              },
              {
                name: "Emma Thompson",
                role: "Environmental Club",
                quote: "We've never been more organized or made such a real impact!",
                avatar: "ET",
              },
              {
                name: "David Kim",
                role: "Robotics Captain",
                quote: "Sponsors take us seriously now with our professional website.",
                avatar: "DK",
              },
              {
                name: "Aisha Patel",
                role: "Art Club President",
                quote: "We can finally showcase our artwork properly and attract new artists.",
                avatar: "AP",
              },
              {
                name: "Jake Wilson",
                role: "Chess Club",
                quote: "Tournament organization became so much easier with our new site.",
                avatar: "JW",
              },
            ])
            .map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs mb-2">{testimonial.role}</div>
                    <p className="text-gray-800 text-sm leading-relaxed">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom row - scrolling right to left */}
        <div className="flex animate-scroll-right space-x-4">
          {[
            {
              name: "Lisa Park",
              role: "Music Club",
              quote: "Our concert attendance doubled thanks to better event promotion.",
              avatar: "LP",
            },
            {
              name: "Ryan Foster",
              role: "Science Olympiad",
              quote: "Recruiting new members became effortless with our showcase page.",
              avatar: "RF",
            },
            {
              name: "Maya Singh",
              role: "Debate Team",
              quote: "Parents and teachers finally understand what we do and support us.",
              avatar: "MS",
            },
            {
              name: "Alex Chen",
              role: "Photography Club",
              quote: "Our portfolio gallery attracts amazing new talent every semester.",
              avatar: "AC",
            },
            {
              name: "Jordan Lee",
              role: "Volunteer Club",
              quote: "Coordinating community service projects is now seamless.",
              avatar: "JL",
            },
            {
              name: "Taylor Brown",
              role: "Book Club",
              quote: "Our reading discussions moved online and engagement skyrocketed.",
              avatar: "TB",
            },
          ]
            .concat([
              {
                name: "Lisa Park",
                role: "Music Club",
                quote: "Our concert attendance doubled thanks to better event promotion.",
                avatar: "LP",
              },
              {
                name: "Ryan Foster",
                role: "Science Olympiad",
                quote: "Recruiting new members became effortless with our showcase page.",
                avatar: "RF",
              },
              {
                name: "Maya Singh",
                role: "Debate Team",
                quote: "Parents and teachers finally understand what we do and support us.",
                avatar: "MS",
              },
              {
                name: "Alex Chen",
                role: "Photography Club",
                quote: "Our portfolio gallery attracts amazing new talent every semester.",
                avatar: "AC",
              },
              {
                name: "Jordan Lee",
                role: "Volunteer Club",
                quote: "Coordinating community service projects is now seamless.",
                avatar: "JL",
              },
              {
                name: "Taylor Brown",
                role: "Book Club",
                quote: "Our reading discussions moved online and engagement skyrocketed.",
                avatar: "TB",
              },
            ])
            .map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs mb-2">{testimonial.role}</div>
                    <p className="text-gray-800 text-sm leading-relaxed">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Launching your club website is simple and fast.
            </p>
          </div>

          {/* Desktop Curved Timeline */}
          <div className="hidden lg:block relative">
            {/* SVG Curved Path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 150 320 Q 400 100 600 200 Q 800 300 1050 80"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                className="animate-pulse"
              />
            </svg>

            {/* Step Nodes and Content */}
            <div className="relative h-96">
              {/* Step 1 */}
              <div className="absolute" style={{ left: "12%", top: "65%" }}>
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="text-8xl font-bold text-gray-100 absolute -top-8 -left-4 -z-10">1</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl max-w-xs text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                    <h3 className="text-lg font-bold text-foreground mb-2">Submit Your Club Info</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out a quick form with your club's details, photos, and goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="absolute" style={{ left: "50%", top: "35%", transform: "translateX(-50%)" }}>
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="text-8xl font-bold text-gray-100 absolute -top-8 -left-4 -z-10">2</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-white backdrop-blur-sm bg-primary">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl max-w-xs text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                    <h3 className="text-lg font-bold text-foreground mb-2">We Build Your Site</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team designs and launches your club's professional website in just days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="absolute" style={{ right: "12%", top: "5%" }}>
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="text-8xl font-bold text-gray-100 absolute -top-8 -left-4 -z-10">3</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl max-w-xs text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                    <h3 className="text-lg font-bold text-foreground mb-2">Go Live & Share</h3>
                    <p className="text-sm text-muted-foreground">
                      Your site is ready to showcase events, announcements, and achievements with the school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-12">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-100 absolute -top-6 -left-2 -z-10">1</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl flex-1 hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Submit Your Club Info</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out a quick form with your club's details, photos, and goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-100 absolute -top-6 -left-2 -z-10">2</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-white">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl flex-1 hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">We Build Your Site</h3>
                <p className="text-sm text-muted-foreground">
                  Our team designs and launches your club's professional website in just days.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-100 absolute -top-6 -left-2 -z-10">3</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl flex-1 hover:shadow-2xl hover:bg-white/90 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Go Live & Share</h3>
                <p className="text-sm text-muted-foreground">
                  Your site is ready to showcase events, announcements, and achievements with the school.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 rounded-2xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-this-matters" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Your Club Needs More Than Social Media
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional websites build credibility, improve organization, and help your club grow beyond the
              limitations of social platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Better Member Recruitment</h3>
              <p className="text-muted-foreground">
                Professional websites attract more serious members and make your club appear established and
                trustworthy.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">School Recognition</h3>
              <p className="text-muted-foreground">
                Administrators and teachers take clubs with professional websites more seriously for funding and
                support.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Event Organization</h3>
              <p className="text-muted-foreground">
                Centralize announcements, schedules, and resources in one place that won't get lost in social feeds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium border-black/10 bg-black/5 text-slate-700">
              <Zap className="h-4 w-4 text-blue-600" />
              Simple, transparent pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-light tracking-tighter text-black">
              Choose your plan
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-700">
              Start free and upgrade as you grow. All plans include unlimited exports and premium support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center justify-start">
            {/* Starter (smaller) */}
            <div className="p-6 md:p-7 rounded-xl border bg-white/[0.03] md:scale-95 md:transform md:opacity-90 hover:opacity-100 transition-transform duration-200 border-black/10">
              <div className="text-left">
                <h3 className="text-base md:text-lg font-medium mb-2 text-black">Starter</h3>
                <div className="mb-4 flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-light tracking-tighter text-black">$0</span>
                  <span className="text-sm text-slate-600">/month</span>
                </div>
                <p className="text-sm mb-6 text-slate-600">Perfect for getting started with animations</p>
              </div>

              <Button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-lg transition-colors mb-6 text-slate-800 border-black/10 bg-black/5 hover:bg-black/10">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="border-t border-dashed mb-6 border-black/10"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>5 animation projects
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Basic templates
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  CSS & JSON export
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Community support
                </li>
              </ul>
            </div>

            {/* Professional (highlighted) */}
            <div className="relative p-6 md:p-8 rounded-xl border bg-white/[0.05] md:transform hover:-translate-y-0.5 transition-transform duration-200">
              <div className="absolute -top-3 left-4">
                <span className="inline-flex items-center gap-1 ring-1 text-[11px] font-medium rounded-full pt-1 pr-1 pb-1 pl-3 backdrop-blur ring-black/15 text-black bg-black/10">
                  Pro
                  <span className="inline-flex items-center gap-1 text-[10px] rounded-full pt-1 pr-2 pb-1 pl-2 bg-blue-400/90">
                    <div className="h-3 w-3">🔥</div>
                    Popular
                  </span>
                </span>
              </div>

              <div className="text-left">
                <h3 className="text-base md:text-lg font-medium mb-2 text-black">Professional</h3>
                <div className="mb-4 flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-light tracking-tighter text-black">$29</span>
                  <span className="text-sm text-slate-600">/month</span>
                </div>
                <p className="text-sm mb-6 text-slate-600">For professionals and growing teams</p>
              </div>

              <Button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-lg transition-colors mb-6 shadow-lg text-white bg-blue-400 border-blue-400 hover:bg-blue-500 hover:border-blue-500 shadow-blue-400 shadow-blue-100/20">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="border-t border-dashed mb-6 border-black/10"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>Unlimited projects
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Premium templates
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Advanced animations
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Priority support
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Team collaboration
                </li>
              </ul>
            </div>

            {/* Enterprise (larger) */}
            <div className="p-6 md:p-7 rounded-xl border bg-white/[0.03] md:scale-105 md:transform hover:-translate-y-0.5 transition-transform duration-200 border-black/10">
              <div className="text-left">
                <h3 className="text-base md:text-lg font-medium mb-2 text-black">Enterprise</h3>
                <div className="mb-4 flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-light tracking-tighter text-black">$99</span>
                  <span className="text-sm text-slate-600">/month</span>
                </div>
                <p className="text-sm mb-6 text-slate-600">For large teams and organizations</p>
              </div>

              <Button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-lg transition-colors mb-6 shadow-lg text-slate-800 border-black/10 bg-black/5 hover:bg-black/10">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="border-t border-dashed mb-6 border-black/10"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Custom templates
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  SSO & advanced security
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  Dedicated support
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="h-4 w-4 text-green-600">✓</div>
                  On-premise deployment
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600">All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300 hover:border-white/50 hover:shadow-blue-500/10"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Give Your Club the Website It Deserves?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join hundreds of high school clubs that have already made the switch to professional websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Start Building Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img src="/clubphase-logo.png" alt="ClubPhase" className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering high school clubs with professional websites that help them grow, organize, and succeed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Product
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Support
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 ClubPhase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
