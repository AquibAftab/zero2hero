"use client"

import Link from "next/link"
import { Inter } from "next/font/google"
import { ArrowRight, Leaf, Recycle, Award, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import Head from "next/head"

interface LandingPageProps {
  onFinish: () => void
}
const inter = Inter({ subsets: ["latin"] })

export default function  LandingPage({ onFinish }: LandingPageProps) {
  const router = useRouter()

  return (
    <div className={`min-h-screen bg-white text-slate-900 flex flex-col ${inter.className}`}>
      <Head>
        <title>Zero-2-Hero | AI-Powered Waste Management</title>
        <meta
          name="description"
          content="An AI-powered waste management platform designed to incentivize and streamline waste reporting and collection."
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold">Zero-2-Hero</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-green-500">Home</Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-green-500">Features</Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-green-500">About</Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-green-500">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-green-500 transition-colors hover:bg-green-50">Sign In</Link>
            <Link href="#" className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600">Sign Up</Link>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-green-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="pattern-bg" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern-bg)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Waste Management <span className="text-green-500">Reimagined</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto">
                Zero-2-Hero is an AI-powered waste management platform designed to incentivize and streamline waste reporting and collection.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={onFinish}
                  className="group relative inline-flex h-12 items-center justify-center rounded-md bg-green-500 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link href="#" className="text-base font-medium text-slate-600 hover:text-green-500">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-green-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-slate-600">Join our community and make a positive impact on the environment</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[{
                icon: <Recycle className="h-6 w-6" />,
                title: "Report Waste",
                description: "Easily report waste in your community using our AI-powered app"
              }, {
                icon: <Award className="h-6 w-6" />,
                title: "Earn Rewards",
                description: "Get incentives for your eco-friendly actions and contributions"
              }, {
                icon: <Users className="h-6 w-6" />,
                title: "Join Community",
                description: "Connect with like-minded individuals committed to sustainability"
              }].map(({ icon, title, description }, i) => (
                <div key={i} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-green-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">{icon}</div>
                  <h3 className="mt-4 text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-green-500 px-6 py-16 sm:px-12 sm:py-24 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to make a difference?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-50">
                Join thousands of eco-conscious individuals who are already making an impact with Zero-2-Hero.
              </p>
              <div className="mt-10">
                <button
                  onClick={() => router.push('/')}
                  className="group relative inline-flex h-12 items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-green-600 shadow-sm transition-all hover:bg-green-50"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="text-lg font-semibold">Zero-2-Hero</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Zero-2-Hero. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-500 hover:text-green-500">Terms</Link>
            <Link href="#" className="text-slate-500 hover:text-green-500">Privacy</Link>
            <Link href="#" className="text-slate-500 hover:text-green-500">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
