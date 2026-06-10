import Link from "next/link"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-black text-gray-900 mb-3">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-2">
          Your Tircha API subscription is now active.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-left">
          <p className="text-blue-800 text-sm font-semibold mb-1">Next steps:</p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>✓ Your API key is being generated</li>
            <li>✓ You will receive it via email within 5 minutes</li>
            <li>✓ Use it in the X-API-Key header for all requests</li>
          </ul>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Didn't receive your key? Email us at{" "}
          <a href="mailto:support@tircha.com" className="text-blue-600 hover:underline">
            support@tircha.com
          </a>
        </p>

        <div className="flex gap-3">
          <Link
            href="/docs"
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 text-sm"
          >
            View API Docs
          </Link>
          <Link
            href="/"
            className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 text-sm"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
  )
}
