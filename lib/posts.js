import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Calculate reading time (avg 200 words per minute)
      const words = content.trim().split(/\s+/).length
      const readingTime = Math.ceil(words / 200)

      return {
        slug,
        ...data,
        readingTime,
        content,
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPublishedPosts() {
  return getAllPosts().filter((post) => post.published !== false)
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Calculate reading time
  const words = content.trim().split(/\s+/).length
  const readingTime = Math.ceil(words / 200)

  return {
    slug,
    ...data,
    content,
    readingTime,
  }
}

export function getAllTags() {
  const posts = getPublishedPosts()
  const tagSet = new Set()

  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tagSet.add(tag))
    }
  })

  return Array.from(tagSet).sort()
}
export function getPaginatedPosts(page = 1, postsPerPage = 6) {
  const allPosts = getPublishedPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export function getPostsByTag(tag) {
  const allPosts = getPublishedPosts()
  return allPosts.filter(
    (post) => post.tags && post.tags.includes(tag)
  )
}
