export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-6">Last updated: June 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>Tircha.com collects basic analytics data including page views and referral sources through Google Analytics. We do not collect personal information without your consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Advertising</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our site or other sites. You can opt out at <a href="https://www.google.com/settings/ads" className="text-blue-600">google.com/settings/ads</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Affiliate Links</h2>
          <p>Some links on this site are affiliate links. We earn a commission when you purchase through them at no extra cost to you. All affiliate relationships are disclosed at the top of relevant articles.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
          <p>This site uses cookies for analytics and advertising. By using this site you consent to our use of cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For privacy questions email: privacy@tircha.com</p>
        </section>
      </div>
    </div>
  )
}