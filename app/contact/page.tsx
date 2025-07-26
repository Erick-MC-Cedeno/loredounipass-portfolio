"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Send, Copy, CheckCircle, ArrowLeft, Code, Music } from "lucide-react"
import Link from "next/link"
import NeuralNetworkBackground from "@/components/neural-network-background"

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedTelegram, setCopiedTelegram] = useState(false)

  const copyToClipboard = async (text: string, type: "email" | "telegram") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedTelegram(true)
        setTimeout(() => setCopiedTelegram(false), 2000)
      }
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <NeuralNetworkBackground />

      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">Loredounipass</span>
            </div>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Contact Information
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a project in mind? Want to collaborate? I'd love to hear from you! Here are all the ways to contact
              me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-green-400">Email</CardTitle>
                <CardDescription className="text-slate-300">The most direct way to contact me</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-lg font-mono text-green-400">erickcedeno558@gmail.com</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={() => copyToClipboard("erickcedeno558@gmail.com", "email")}
                    variant="outline"
                    className="flex-1 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Email
                      </>
                    )}
                  </Button>
                  <a href="mailto:erickcedeno558@gmail.com" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Mail className="mr-2 h-4 w-4" />
                      Open Email
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Telegram Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-green-400">Telegram</CardTitle>
                <CardDescription className="text-slate-300">Direct chat and quick response</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-lg font-mono text-green-400">@Loredounipass</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={() => copyToClipboard("@Loredounipass", "telegram")}
                    variant="outline"
                    className="flex-1 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900"
                  >
                    {copiedTelegram ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Username
                      </>
                    )}
                  </Button>
                  <a href="https://t.me/Loredounipass" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="mr-2 h-4 w-4" />
                      Open Telegram
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Links */}
          <Card className="bg-slate-800 border-slate-700 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-400">Social Media</CardTitle>
              <CardDescription className="text-slate-300">Follow me on my professional social networks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://github.com/Erick-MC-Cedeno" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 bg-transparent"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/erick-cedeno-3a5137230" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 bg-transparent"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://www.tiktok.com/@loredounipass" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 bg-transparent"
                  >
                    <Music className="mr-2 h-5 w-5" />
                    TikTok
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Why Contact Me */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-400">Why contact me?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-green-400">Full Stack Development</h3>
                  <p className="text-sm text-slate-300">
                    Experience in modern technologies to create complete solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-green-400">Quick Response</h3>
                  <p className="text-sm text-slate-300">I respond to all messages within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-green-400">Quality Guaranteed</h3>
                  <p className="text-sm text-slate-300">Clean, maintainable code following best practices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Let's Talk!</h2>
            <p className="text-lg text-slate-300 mb-8">
              I'm available for freelance projects, collaborations, and full-time work opportunities.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500">
                Available for projects
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500">
                24h response
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500">
                Free consultation
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => copyToClipboard("erickcedeno558@gmail.com", "email")}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Copy Email
                  </>
                )}
              </Button>
              <a href="https://t.me/Loredounipass" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-900 bg-transparent"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Message on Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">Loredounipass</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Erick-MC-Cedeno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-cedeno-3a5137230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/Loredounipass"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@loredounipass"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400">&copy; 2024 Loredounipass. All rights reserved.</p>
            <p className="text-slate-500 mt-2">Full Stack Developer | React & Node.js Specialist</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
