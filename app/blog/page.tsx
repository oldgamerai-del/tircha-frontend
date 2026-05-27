import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  
  let articles: {
    slug: string
    title: string
    niche: string
    meta_description: string
    generated_at: string
  }[] = []

  if (fs.existsSync(blogDir)) {
    articles = fs.readdirSync(blogDir)
      .filter((f: string) => f.endsWith('.json'))
      .map((f: string) => {
        try {
          const data = JSON.parse(
            fs.readFileSync(path.join(blogDir, f), 'utf8')
          )
          return {
            slug: f.replace('.json', ''),
            title: data.title || 'Untitled',
            niche: data.niche || 'general',
            meta_description: data.meta_description || '',
            generated_at: data.generated_at || new Date().toISOString()
          }
        } catch {
          return null
        }
      })
      .filter(Boolean) as any[]
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 text-sm hover:underline">
          Home
        </Link>
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-gray-600 text-sm">Blog</span>
      </nav>

      <h1 className="text-4xl font-bold mb-2 text-gray-900">Tircha Blog</h1>
      <p className="text-gray-500 mb-10">
        Expert guides on Trading, AI Tools, Software and Gaming
      </p>

      {articles.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl mb-2">Articles are being generated...</p>
          <p className="text-sm">Check back soon — new content publishes daily.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {articles.map(article => (
            <Link
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="block border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 capitalize">
                {article.niche}
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                {article.meta_description}
              </p>
              <p className="text-gray-400 text-xs">
                {new Date(article.generated_at).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}