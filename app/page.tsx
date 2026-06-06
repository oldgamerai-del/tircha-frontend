import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      <nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-gray-900">
            Tir<span className="text-blue-600">cha</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/blog" className="hover:text-blue-600 hidden md:block">Trading</Link>
            <Link href="/blog" className="hover:text-blue-600 hidden md:block">AI Tools</Link>
            <Link href="/blog" className="hover:text-blue-600 hidden md:block">Gaming</Link>
            <Link href="/blog" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Read Articles
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm px-4 py-2 rounded-full mb-6">
            Trusted Reviews and Comparisons
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Find The Best
            <span className="text-blue-400"> Tools and Platforms </span>
            For You
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tircha gives you honest in-depth comparisons and reviews across
            Trading, AI Tools, Software, and Gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg">
              Browse All Articles
            </Link>
            <Link href="/pricing" className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg">
              API Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-white">500+</div>
            <div className="text-blue-200 text-sm mt-1">Expert Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">4</div>
            <div className="text-blue-200 text-sm mt-1">Niches Covered</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">100%</div>
            <div className="text-blue-200 text-sm mt-1">Independent</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">Free</div>
            <div className="text-blue-200 text-sm mt-1">Always Free to Read</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">What We Cover</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Deep-dive guides and comparisons across four high-value categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link href="/blog" className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all bg-green-50 border-green-200">
              <div className="text-sm font-black text-green-600 mb-3 uppercase tracking-widest">Trading</div>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Trading Reviews</h3>
              <p className="text-gray-600 text-sm">Platform reviews, broker comparisons and trading strategies for all levels.</p>
              <div className="mt-4 text-blue-600 text-sm font-semibold">Read articles</div>
            </Link>

            <Link href="/blog" className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all bg-purple-50 border-purple-200">
              <div className="text-sm font-black text-purple-600 mb-3 uppercase tracking-widest">AI Tools</div>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">AI Tools Reviews</h3>
              <p className="text-gray-600 text-sm">In-depth comparisons of the best AI writing, coding and productivity tools.</p>
              <div className="mt-4 text-blue-600 text-sm font-semibold">Read articles</div>
            </Link>

            <Link href="/blog" className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all bg-blue-50 border-blue-200">
              <div className="text-sm font-black text-blue-600 mb-3 uppercase tracking-widest">Software</div>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Software Reviews</h3>
              <p className="text-gray-600 text-sm">VPN, hosting, project management and SaaS reviews to pick the right tools.</p>
              <div className="mt-4 text-blue-600 text-sm font-semibold">Read articles</div>
            </Link>

            <Link href="/blog" className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all bg-red-50 border-red-200">
              <div className="text-sm font-black text-red-600 mb-3 uppercase tracking-widest">Gaming</div>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Gaming Reviews</h3>
              <p className="text-gray-600 text-sm">Gaming gear reviews, PC build guides, headset comparisons and benchmarks.</p>
              <div className="mt-4 text-blue-600 text-sm font-semibold">Read articles</div>
            </Link>

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Latest Expert Guides</h2>
          <p className="text-gray-500 mb-8 text-lg">
            New comparison articles and reviews published every day.
          </p>
          <Link href="/blog" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800">
            View All Articles
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-14">Why Trust Tircha?</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-blue-600">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Research</h3>
              <p className="text-gray-500">We research every product ourselves. No paid placements affect our scores.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-green-600">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affiliate Transparency</h3>
              <p className="text-gray-500">We earn commissions when you buy through our links. This never influences our recommendations.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-purple-600">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Updated</h3>
              <p className="text-gray-500">Articles reviewed and updated regularly so you get current pricing and features.</p>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-black text-white">Tir<span className="text-blue-400">cha</span></div>
            <div className="text-gray-400 text-sm mt-1">Honest reviews. Real comparisons.</div>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
          <div className="text-gray-500 text-xs text-center">
            2026 Tircha. Contains affiliate links.
          </div>
        </div>
      </footer>

    </div>
  )
}
