import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      limit: "10 articles/day",
      features: [
        "10 blog articles per day",
        "Keyword research tool",
        "SEO optimized output",
        "Markdown + JSON format",
        "Email support",
      ],
      cta: "Start Free Trial",
      link: "YOUR_LEMONSQUEEZY_STARTER_LINK",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      limit: "50 articles/day",
      features: [
        "50 blog articles per day",
        "Advanced keyword research",
        "Affiliate link injection",
        "Priority generation",
        "API access + docs",
        "Priority support",
      ],
      cta: "Get Pro Access",
      link: "YOUR_LEMONSQUEEZY_PRO_LINK",
      highlight: true,
    },
    {
      name: "Agency",
      price: "$99",
      period: "/month",
      limit: "200 articles/day",
      features: [
        "200 blog articles per day",
        "Everything in Pro",
        "White-label option",
        "Bulk generation",
        "Custom niches",
        "Dedicated support",
      ],
      cta: "Contact Us",
      link: "YOUR_LEMONSQUEEZY_AGENCY_LINK",
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Generate SEO blog articles and keyword research via API.
            Used by 100s of creators and affiliate marketers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-900 shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
                  Most Popular
                </div>
              )}
              <div className="text-2xl font-black mb-1">{plan.name}</div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={plan.highlight ? "text-blue-200" : "text-gray-400"}>
                  {plan.period}
                </span>
              </div>
              <div className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>
                {plan.limit}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={plan.highlight ? "text-blue-200" : "text-green-500"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              
                href={plan.link}
                className={`block text-center py-3 px-6 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* API Example */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Simple API Integration</h2>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`# Generate a blog article
curl -X POST https://tircha-backend.railway.app/api/blog/generate \\
  -H "X-API-Key: your_tircha_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"keyword": "best VPN for gaming", "niche": "software"}'

# Response
{
  "title": "Best VPN for Gaming in 2026",
  "content_markdown": "...",
  "word_count": 847,
  "requests_remaining": 49
}`}
          </pre>
          <Link href="/docs" className="inline-block mt-4 text-blue-400 hover:underline text-sm">
            View full API documentation →
          </Link>
        </div>

      </div>
    </div>
  )
}