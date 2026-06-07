import Link from "next/link"

export default function DocsPage() {

  const endpoints = [
    {
      method: "POST",
      path: "/api/blog/generate",
      desc: "Generate a complete SEO blog article for any keyword",
      color: "bg-green-100 text-green-700",
      body: `{
  "keyword": "best VPN for gaming 2026",
  "niche": "software",
  "length": "medium"
}`,
      response: `{
  "success": true,
  "keyword": "best VPN for gaming 2026",
  "title": "Best VPN for Gaming in 2026",
  "meta_description": "Expert guide about best VPN...",
  "content_markdown": "# Best VPN for Gaming...",
  "word_count": 847,
  "requests_used": 1,
  "requests_remaining": 49,
  "plan": "pro"
}`,
    },
    {
      method: "POST",
      path: "/api/keywords/research",
      desc: "Get profitable keyword ideas for any seed topic",
      color: "bg-blue-100 text-blue-700",
      body: `{
  "seed": "gaming headset",
  "niche": "gaming",
  "limit": 20
}`,
      response: `{
  "success": true,
  "seed": "gaming headset",
  "keywords": [
    {
      "keyword": "best gaming headset under 100",
      "intent": "commercial",
      "difficulty": "low",
      "opportunity_score": 85
    }
  ],
  "total_found": 47,
  "requests_remaining": 48
}`,
    },
    {
      method: "GET",
      path: "/health",
      desc: "Check if the API is online",
      color: "bg-gray-100 text-gray-700",
      body: null,
      response: `{ "status": "ok" }`,
    },
  ]

  const niches = ["trading", "ai-tools", "software", "gaming", "finance", "health", "education", "travel"]
  const lengths = [
    { val: "short", words: "~600 words" },
    { val: "medium", words: "~900 words" },
    { val: "long", words: "~1400 words" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs px-3 py-1 rounded-full mb-4 font-mono">
            API v1.0
          </div>
          <h1 className="text-4xl font-black mb-4">Tircha API Documentation</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Generate SEO-optimized blog articles and discover profitable keywords programmatically.
            Simple REST API, JSON responses, works with any language.
          </p>
          <div className="flex gap-4">
            <Link
              href="/pricing"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Get API Key →
            </Link>
            
              href="mailto:support@tircha.com"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Base URL</h2>
          <div className="bg-gray-900 rounded-xl p-4 font-mono text-green-400 text-sm">
            https://tircha-backend-production.up.railway.app
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Authentication</h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            All API requests require your API key passed in the request header.
            Get your key by subscribing at <Link href="/pricing" className="text-blue-600 hover:underline">tircha.com/pricing</Link>.
          </p>
          <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-gray-300">
            <span className="text-gray-500"># Add this header to every request</span>
            <br />
            <span className="text-yellow-400">X-API-Key</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-400">tircha_your_api_key_here</span>
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ Never expose your API key in frontend code or public repositories.
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rate Limits</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { plan: "Starter", limit: "10 req/day", color: "border-gray-200" },
              { plan: "Pro", limit: "50 req/day", color: "border-blue-200 bg-blue-50" },
              { plan: "Agency", limit: "200 req/day", color: "border-gray-200" },
            ].map(p => (
              <div key={p.plan} className={`border rounded-xl p-4 text-center ${p.color}`}>
                <div className="font-bold text-gray-900">{p.plan}</div>
                <div className="text-2xl font-black text-blue-600 my-1">{p.limit}</div>
                <Link href="/pricing" className="text-xs text-gray-500 hover:text-blue-600">
                  View plan →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Limits reset every day at midnight UTC. Upgrade anytime at tircha.com/pricing.
          </p>
        </section>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Endpoints</h2>

          {endpoints.map((ep, i) => (
            <div key={i} className="mb-8 border border-gray-200 rounded-2xl overflow-hidden">

              {/* Endpoint header */}
              <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
                <span className={`text-xs font-black px-3 py-1 rounded-full font-mono ${ep.color}`}>
                  {ep.method}
                </span>
                <code className="text-gray-900 font-mono text-sm font-semibold">{ep.path}</code>
              </div>

              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm mb-4">{ep.desc}</p>

                {ep.body && (
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Request Body
                    </div>
                    <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-xs overflow-x-auto">
                      {ep.body}
                    </pre>
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Response
                  </div>
                  <pre className="bg-gray-900 text-blue-300 rounded-lg p-4 text-xs overflow-x-auto">
                    {ep.response}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Parameters */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Parameters Reference</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">niche</h3>
              <p className="text-gray-500 text-sm mb-3">Tells the AI which topic area to write for. Affects tone and examples used.</p>
              <div className="flex flex-wrap gap-2">
                {niches.map(n => (
                  <code key={n} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {n}
                  </code>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">length</h3>
              <p className="text-gray-500 text-sm mb-3">Target word count for generated articles.</p>
              <div className="space-y-2">
                {lengths.map(l => (
                  <div key={l.val} className="flex justify-between items-center">
                    <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{l.val}</code>
                    <span className="text-gray-500 text-sm">{l.words}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Code examples */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Code Examples</h2>

          <div className="space-y-4">

            {/* Python */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 border-b">
                Python
              </div>
              <pre className="bg-gray-900 text-gray-300 p-4 text-xs overflow-x-auto">{`import requests

response = requests.post(
    "https://tircha-backend-production.up.railway.app/api/blog/generate",
    headers={"X-API-Key": "tircha_your_key"},
    json={
        "keyword": "best gaming headset under $100",
        "niche": "gaming",
        "length": "medium"
    }
)

article = response.json()
print(article["title"])
print(article["content_markdown"])`}
              </pre>
            </div>

            {/* JavaScript */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 border-b">
                JavaScript / Node.js
              </div>
              <pre className="bg-gray-900 text-gray-300 p-4 text-xs overflow-x-auto">{`const response = await fetch(
  "https://tircha-backend-production.up.railway.app/api/blog/generate",
  {
    method: "POST",
    headers: {
      "X-API-Key": "tircha_your_key",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      keyword: "best gaming headset under $100",
      niche: "gaming",
      length: "medium"
    })
  }
)

const article = await response.json()
console.log(article.title)`}
              </pre>
            </div>

            {/* cURL */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 border-b">
                cURL
              </div>
              <pre className="bg-gray-900 text-gray-300 p-4 text-xs overflow-x-auto">{`curl -X POST \\
  https://tircha-backend-production.up.railway.app/api/blog/generate \\
  -H "X-API-Key: tircha_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{"keyword":"best VPN for gaming","niche":"software"}'`}
              </pre>
            </div>

          </div>
        </section>

        {/* Error codes */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Error Codes</h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Code</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Meaning</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { code: "401", meaning: "Invalid API key", fix: "Check your key at tircha.com/pricing" },
                  { code: "403", meaning: "Subscription inactive", fix: "Renew at tircha.com/pricing" },
                  { code: "429", meaning: "Daily limit reached", fix: "Upgrade plan or wait until midnight UTC" },
                  { code: "400", meaning: "Bad request", fix: "Check your keyword is at least 3 characters" },
                  { code: "503", meaning: "Generation failed", fix: "Retry the request — AI model was busy" },
                ].map(e => (
                  <tr key={e.code} className="bg-white">
                    <td className="px-4 py-3 font-mono text-red-600 font-bold">{e.code}</td>
                    <td className="px-4 py-3 text-gray-700">{e.meaning}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{e.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-black mb-2">Ready to start building?</h2>
          <p className="text-blue-100 mb-6">Get your API key and generate your first article in under 2 minutes.</p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            View Pricing & Get API Key →
          </Link>
        </div>

      </div>
    </div>
  )
}
