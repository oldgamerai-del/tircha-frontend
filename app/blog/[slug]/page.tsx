import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'

// Convert markdown to basic HTML
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="nofollow">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">• $1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
}

export default function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const filePath = path.join(
    process.cwd(), 'content', 'blog', `${params.slug}.json`
  )

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const article = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const contentHtml = markdownToHtml(article.content_markdown || '')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      
      {/* Back link */}
      <Link href="/blog" className="text-blue-600 text-sm hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      {/* REQUIRED affiliate disclosure */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
        <strong>Disclosure:</strong> This post contains affiliate links. 
        If you click and purchase, we may earn a commission at no extra cost to you.
      </div>

      {/* Niche badge */}
      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 capitalize">
        {article.niche}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {article.title}
      </h1>

      {/* Meta info */}
      <p className="text-gray-400 text-sm mb-8">
        Published: {new Date(article.generated_at).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        })} · {Math.ceil((article.content_markdown || '').split(' ').length / 200)} min read
      </p>

      {/* Article content */}
      <div 
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: `<p class="mb-4">${contentHtml}</p>` 
        }} 
      />

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {article.faq.map((item: any, i: number) => (
              <details 
                key={i} 
                className="border border-gray-200 rounded-lg p-4 cursor-pointer"
              >
                <summary className="font-semibold text-gray-800">
                  {item.q}
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* CTA at bottom */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-gray-700 font-medium mb-1">
          Want expert keyword research for your niche?
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Tircha finds the most profitable keywords automatically.
        </p>
        <Link 
          href="/pricing"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
        >
          View Plans →
        </Link>
      </div>
    </div>
  )
}

// Tell Next.js which article pages exist at build time
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(blogDir)) return []
  
  return fs.readdirSync(blogDir)
    .filter(f => f.endsWith('.json'))
    .map(f => ({ slug: f.replace('.json', '') }))
}