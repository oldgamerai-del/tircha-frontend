"use client"
import { useState } from "react"
import Link from "next/link"

export default function PricingPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const plans = [
    {
      name: "Starter",
      planKey: "starter",
      price: "₹2,499",
      period: "/month",
      limit: "10 articles/day",
      features: [
        "10 blog articles per day",
        "Keyword research tool",
        "SEO optimized output",
        "Markdown + JSON format",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      planKey: "pro",
      price: "₹3,799",
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
      highlight: true,
    },
    {
      name: "Agency",
      planKey: "agency",
      price: "₹5,899",
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
      highlight: false,
    },
  ]

  const handlePlanClick = (planKey: string) => {
    setSelectedPlan(planKey)
    setEmail("")
    setError("")
    setShowModal(true)
  }

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)
    setError("")

    try {
      const res = await fetch(
        "https://tircha-backend-production.up.railway.app/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, plan: selectedPlan })
        }
      )

      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || "Something went wrong. Please try again.")
        setLoading(false)
        return
      }

      // Redirect to Razorpay checkout unique to this customer
      window.location.href = data.checkout_url

    } catch {
      setError("Network error. Please try again.")
      setLoading(false)
    }
  }

  const selectedPlanName = plans.find(p => p.planKey === selectedPlan)?.name || ""

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Generate SEO blog articles and keyword research via API.
            Trusted by creators and affiliate marketers.
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
              <button
                onClick={() => handlePlanClick(plan.planKey)}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get {plan.name} Access
              </button>
            </div>
          ))}
        </div>

        {/* API Example */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">Simple API Integration</h2>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://tircha-backend-production.up.railway.app/api/blog/generate \\
  -H "X-API-Key: your_tircha_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"keyword": "best VPN for gaming", "niche": "software"}'`}
          </pre>
          <Link href="/docs" className="inline-block mt-4 text-blue-400 hover:underline text-sm">
            View full API documentation →
          </Link>
        </div>

      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">

            <h2 className="text-2xl font-black text-gray-900 mb-2">
              Get {selectedPlanName} Plan
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter your email to receive your API key after payment.
            </p>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubscribe()}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              autoFocus
            />

            {error && (
              <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <p className="text-xs text-gray-400 mb-6">
              Your API key will be emailed to this address within minutes of payment.
              Subscription renews monthly. Cancel anytime.
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Creating checkout..." : "Continue to Payment →"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
