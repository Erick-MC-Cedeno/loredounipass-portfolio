"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Smartphone,
  Bitcoin,
  Play,
  ShoppingCart,
  MessageCircle,
  Video,
  Car,
  Send,
  Music,
} from "lucide-react"
import Link from "next/link"
import NeuralNetworkBackground from "@/components/neural-network-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <NeuralNetworkBackground />

      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">Loredounipass</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-slate-300 hover:text-green-400 transition-colors">
                About Me
              </a>
              <a href="#skills" className="text-slate-300 hover:text-green-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-300 hover:text-green-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-300 hover:text-green-400 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-6 relative">
              <img
                src="/images/loredounipass-avatar.png"
                alt="Loredounipass - LOREDOUNIPASS"
                className="w-full h-full rounded-full border-4 border-green-400 shadow-2xl bg-slate-800 p-6 object-contain shadow-green-400/20"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitImageRendering: "crisp-edges",
                  MozImageRendering: "crisp-edges",
                  msImageRendering: "crisp-edges",
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Loredounipass</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Full Stack Software Engineer specialized in creating innovative and scalable solutions that transform ideas
            into digital reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://github.com/Erick-MC-Cedeno" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 border-green-500">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Erick-MC-Cedeno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/erick-cedeno-3a5137230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/Loredounipass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Send className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@loredounipass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Music className="h-6 w-6" />
            </a>
            <Link href="/contact" className="text-slate-400 hover:text-green-400 transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate about technology and software development, with experience in multiple modern languages and
              frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                As a software engineer with solid technical training, I specialize in developing web and mobile
                applications using the latest technologies. My focus is on writing clean, maintainable, and scalable
                code.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                With over 543 contributions in the last year and solid full-stack development experience, I specialize
                in creating innovative applications ranging from cryptocurrency wallets to streaming platforms and
                real-time chat systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-900 text-green-300 border-green-700">
                  Full Stack Developer
                </Badge>
                <Badge variant="secondary" className="bg-green-900 text-green-300 border-green-700">
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="bg-green-900 text-green-300 border-green-700">
                  Team Player
                </Badge>
                <Badge variant="secondary" className="bg-green-900 text-green-300 border-green-700">
                  Continuous Learner
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 text-green-400 mx-auto mb-2" />
                  <CardTitle className="text-lg text-white">Clean Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 text-center">
                    Clean and maintainable code following best practices
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 text-green-400 mx-auto mb-2" />
                  <CardTitle className="text-lg text-white">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 text-center">Efficient database design and optimization</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-green-400 mx-auto mb-2" />
                  <CardTitle className="text-lg text-white">Web Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 text-center">Modern and responsive web applications</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 text-green-400 mx-auto mb-2" />
                  <CardTitle className="text-lg text-white">Mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 text-center">Native and hybrid mobile application development</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Mastery of modern technologies to create robust and scalable solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-center text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-green-900 text-green-300 border-green-700">React</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Next.js</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">TypeScript</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">JavaScript</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">HTML5</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">CSS3</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Tailwind CSS</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Vue.js</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-center text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-green-900 text-green-300 border-green-700">Node.js</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Python</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Express</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">FastAPI</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">PostgreSQL</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">MongoDB</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Redis</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-center text-white">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-green-900 text-green-300 border-green-700">Docker</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">AWS</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Git</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">GitHub Actions</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Vercel</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Linux</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Nginx</Badge>
                  <Badge className="bg-green-900 text-green-300 border-green-700">Jest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Some of the projects I've worked on that demonstrate my skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Crypto-Wallet */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Bitcoin className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">CRYPTO WALLET</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">Crypto-Wallet</CardTitle>
                <CardDescription className="text-slate-300">
                  Crypto wallet demo focused on secure and efficient transfers on the Ethereum network using smart
                  contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Ethereum
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Smart Contracts
                  </Badge>
                </div>
                <a href="https://github.com/Erick-MC-Cedeno/Crypto-Wallet" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Video-Play-DeepPlay */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">VIDEO STREAMING</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">Video-Play-DeepPlay</CardTitle>
                <CardDescription className="text-slate-300">
                  Video streaming platform where users can upload, watch, rate and comment on videos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Video Streaming
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Web Platform
                  </Badge>
                </div>
                <a
                  href="https://github.com/Erick-MC-Cedeno/Video-Play-DeepPlay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Market-Place */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ShoppingCart className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">MARKETPLACE</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">Market-Place</CardTitle>
                <CardDescription className="text-slate-300">
                  Local project based on a marketplace with complete e-commerce functionalities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    E-commerce
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Marketplace
                  </Badge>
                </div>
                <a href="https://github.com/Erick-MC-Cedeno/Market-Place" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* NextChat */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MessageCircle className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">REAL-TIME CHAT</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">NextChat</CardTitle>
                <CardDescription className="text-slate-300">
                  Local chat system for sending and receiving messages in real time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Real-time Chat
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    WebSocket
                  </Badge>
                </div>
                <a href="https://github.com/Erick-MC-Cedeno/NextChat" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Strangers */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Video className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">VIDEO CHAT</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">Strangers</CardTitle>
                <CardDescription className="text-slate-300">
                  Random video chat app similar to Omegle, connecting users face-to-face with strangers using WebRTC
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    WebRTC
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Video Chat
                  </Badge>
                </div>
                <a href="https://github.com/Erick-MC-Cedeno/Strangers" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Saferide-web */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-slate-800/80 border-slate-700">
              <CardHeader>
                <div className="relative h-48 w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Car className="h-16 w-16 mb-2 mx-auto" />
                      <div className="text-sm font-semibold tracking-wider">TRANSPORT APP</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white">Saferide-web</CardTitle>
                <CardDescription className="text-slate-300">
                  Web application for transportation service built with Next.js and modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-700 text-green-300">
                    Transportation
                  </Badge>
                </div>
                <a href="https://github.com/Erick-MC-Cedeno/Saferide-web" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-700 text-green-300 hover:bg-green-700 hover:text-white bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            I'm available for new projects and opportunities. Let's talk about how I can help bring your next idea to
            life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Mail className="mr-2 h-5 w-5" />
                View Contact
              </Button>
            </Link>
            <a href="https://github.com/Erick-MC-Cedeno" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
            </a>
            <a href="https://t.me/Loredounipass" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 bg-transparent"
              >
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Erick-MC-Cedeno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/erick-cedeno-3a5137230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://t.me/Loredounipass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Send className="h-8 w-8" />
            </a>
            <a
              href="https://www.tiktok.com/@loredounipass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
            >
              <Music className="h-8 w-8" />
            </a>
            <Link href="/contact" className="text-slate-400 hover:text-green-400 transition-colors">
              <Mail className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-700 relative z-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Loredounipass. All rights reserved.</p>
          <p className="mt-2">Full Stack Software Engineer | GitHub: @Erick-MC-Cedeno</p>
        </div>
      </footer>
    </div>
  )
}
