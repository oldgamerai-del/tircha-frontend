import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  
  // Read all article files
  let articles: any[] = []
  if (fs.existsSync(blogDir)) {
    articles = fs.readdirSync(blogDir)
      .filter(f => f.endsWith('.json'))
      .map(f => {
        const data = JSON.parse(
          fs.readFileSync(path.join(blogDir, f), 'utf8')
        )
        return {
          slug: f.replace('.json', ''),
          title: data.title,
          niche: data.niche,
          meta_description: data.meta_description,
          generated_at: data.generated_at
        }
      })
      .sort((a, b) => 
        new Date(b.generated_at).getTime() - new Date(a.generated_at).getTime()
      )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Tircha Blog</h1>
      <p className="text-gray-500 mb-10">
        Expert guides on Trading, AI Tools, Software & Gaming
      </p>

      {articles.length === 0 && (
        <p className="text-gray-400">
          Articles are being generated... check back soon!
        </p>
      )}

      <div className="grid gap-6">
        {articles.map(article => (
          <Link 
            href={`/blog/${article.slug}`} 
            key={article.slug}
            className="block border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all"
          >
            {/* Niche badge */}
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
    </div>
  )
}