import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tircha.com'

  // Static pages always included
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Dynamic blog articles
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  let blogPages: MetadataRoute.Sitemap = []

  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'))

    blogPages = files.map(file => {
      const slug = file.replace('.json', '')
      let lastModified = new Date()

      try {
        const data = JSON.parse(
          fs.readFileSync(path.join(blogDir, file), 'utf8')
        )
        if (data.generated_at) {
          lastModified = new Date(data.generated_at)
        }
      } catch {
        // use default date
      }

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }
    })
  }

  return [...staticPages, ...blogPages]
}