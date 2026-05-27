import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Props {
  params: Promise<{ slug: string }>
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline" target="_blank" rel="nofollow">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1 list-disc">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  const filePath = path.join(
    process.cwd(), 'content', 'blog', `${slug}.json`
  )

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const article = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const contentHtml = markdownToHtml(article.content_markdown || '')
  const wordCount = (article.content_markdown || '').split(' ').length
  const readTime = Math.ceil(wordCount / 200)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      <nav className="mb-6 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span className="text-gray-400 mx-2">/</span>
        <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-gray-600">{article.title}</span>
      </nav>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
        <strong>Disclosure:</strong> This post contains affiliate links.
        If you click and purchase, we may earn a commission at no extra cost to you.
      </div>

      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 capitalize">
        {article.niche}
      </span>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {article.title}
      </h1>

      <p className="text-gray-400 text-sm mb-8">
        {new Date(article.generated_at).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        })} · {readTime} min read
      </p>

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: `<p class="mb-4">${contentHtml}</p>`
        }}
      />

      {article.faq && article.faq.length > 0 && (
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {article.faq.map((item: { q: string; a: string }, i: number) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-800 cursor-pointer">
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

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-gray-700 font-medium mb-1">
          Want more expert comparisons?
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Browse all our free guides across Trading, AI, Software and Gaming.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
        >
          View All Articles
        </Link>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(blogDir)) return []

  return fs.readdirSync(blogDir)
    .filter((f: string) => f.endsWith('.json'))
    .map((f: string) => ({ slug: f.replace('.json', '') }))
}