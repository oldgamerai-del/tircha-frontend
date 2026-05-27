import Link from 'next/link'

export default function HomePage() {
  const niches = [
    {
      icon: "📈",
      title: "Trading",
      desc: "Platform reviews, broker comparisons, trading strategies and tools for beginners to pros.",
      color: "bg-green-50 border-green-200",
      badge: "bg-green-100 text-green-700",
      href: "/blog?niche=trading"
    },
    {
      icon: "🤖",
      title: "AI Tools",
      desc: "In-depth comparisons of the best AI writing, coding, and productivity tools available today.",
      color: "bg-purple-50 border-purple-200",
      badge: "bg-purple-100 text-purple-700",
      href: "/blog?niche=ai-tools"
    },
    {
      icon: "💻",
      title: "Software",
      desc: "VPN, hosting, project management, and SaaS reviews to help you pick the right tools.",
      color: "bg-blue-50 border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      href: "/blog?niche=software"
    },
    {
      icon: "🎮",
      title: "Gaming",
      desc: "Gaming gear reviews, PC build guides, headset comparisons and performance benchmarks.",
      color: "bg-red-50 border-red-200",
      badge: "bg-red-100 text-red-700",
      href: "/blog?niche=gaming"
    }
  ]

  const stats = [
    { number: "500+", label: "Expert Reviews" },
    { number: "4", label: "Niches Covered" },
    { number: "100%", label: "Independent" },
    { number: "Free", label: "Always Free to Read" },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-gray-900">
            Tir<span className="text-blue-600">cha</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/blog?niche=trading" className="hover:text-blue-600 transition-colors hidden md:block">Trading</Link>
            <Link href="/blog?niche=ai-tools" className="hover:text-blue-600 transition-colors hidden md:block">AI Tools</Link>
            <Link href="/blog?niche=gaming" className="hover:text-blue-600 transition-colors hidden md:block">Gaming</Link>
            <Link 
              href="/blog" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm px-4 py-2 rounded-full mb-6 font-medium">
            ✦ Trusted Reviews & Comparisons
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Find The Best
            <span className="text-blue-400"> Tools & Platforms </span>
            For You
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tircha gives you honest, in-depth comparisons and reviews across 
            Trading, AI Tools, Software, and Gaming — so you never waste money 
            on the wrong product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Browse All Articles →
            </Link>
            <Link 
              href="/blog?niche=trading"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Trading Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white">{s.number}</div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Niches */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What We Cover
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Deep-dive guides and comparisons across four high-value categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niches.map(niche => (
              <Link 
                href={niche.href} 
                key={niche.title}
                className={`border-2 rounded-2xl p-6 hover:shadow-lg transition-all ${niche.color}`}
              >
                <div className="text-4xl mb-4">{niche.icon}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${niche.badge}`}>
                  {niche.title}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {niche.title} Reviews
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{niche.desc}</p>
                <div className="mt-4 text-blue-600 text-sm font-semibold">
                  Read articles →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Latest Expert Guides
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            We publish new comparison articles and reviews every day across all categories.
          </p>
          <Link 
            href="/blog"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-14">
            Why Trust Tircha?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Independent Research",
                desc: "We research and compare every product ourselves. No paid placements ever affect our scores."
              },
              {
                icon: "💰",
                title: "Affiliate Transparency",
                desc: "We earn commissions when you buy through our links. This never influences our recommendations."
              },
              {
                icon: "🔄",
                title: "Always Updated",
                desc: "Our articles are reviewed and updated regularly so you always get current pricing and features."
              }
            ].map(item => (
              <div key={item.title} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-black text-gray-900">
              Tir<span className="text-blue-600">cha</span>
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Honest reviews. Real comparisons.
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-gray-900">Affiliate Disclaimer</Link>
          </div>
          <div className="text-gray-400 text-xs text-center">
            © 2026 Tircha. This site contains affiliate links.<br/>
            We may earn a commission at no extra cost to you.
          </div>
        </div>
      </footer>

    </div>
  )
}