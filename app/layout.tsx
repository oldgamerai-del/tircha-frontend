import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Script from 'next/script'
<head>
    // Add inside <head> in your layout.tsx
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-09CVS5G773`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-09CVS5G773');
      `}
    </Script>
  </head>
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tircha — AI Blog & Keyword API",
  description: "Generate SEO blog articles and keyword research via API. Trusted by creators and affiliate marketers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Global Navigation */}
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

            <Link href="/" className="text-xl font-black text-gray-900">
              Tir<span className="text-blue-600">cha</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/docs" className="hover:text-blue-600 transition-colors">
                API Docs
              </Link>
              <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/docs"
                className="text-sm text-gray-600 hover:text-blue-600 font-medium hidden md:block"
              >
                API Docs
              </Link>
              <Link
                href="/pricing"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Get API Access
              </Link>
            </div>

          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <footer className="border-t border-gray-100 bg-gray-900 py-10 px-4 mt-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

            <div>
              <div className="text-xl font-black text-white mb-2">
                Tir<span className="text-blue-400">cha</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered blog generation and keyword research API for creators and affiliate marketers.
              </p>
            </div>

            <div>
              <div className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Product</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/pricing" className="block hover:text-white">Pricing</Link>
                <Link href="/docs" className="block hover:text-white">API Documentation</Link>
                <Link href="/blog" className="block hover:text-white">Blog</Link>
              </div>
            </div>

            <div>
              <div className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Niches</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/blog" className="block hover:text-white">Trading</Link>
                <Link href="/blog" className="block hover:text-white">AI Tools</Link>
                <Link href="/blog" className="block hover:text-white">Software</Link>
                <Link href="/blog" className="block hover:text-white">Gaming</Link>
              </div>
            </div>

            <div>
              <div className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
                <Link href="/disclaimer" className="block hover:text-white">Affiliate Disclaimer</Link>
              </div>
            </div>

          </div>

          <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">© 2026 Tircha. All rights reserved.</p>
            <p className="text-gray-500 text-xs">This site contains affiliate links. We may earn a commission.</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
