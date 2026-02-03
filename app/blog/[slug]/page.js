import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import CodeBlock from '../../../components/CodeBlock'
import ReadingProgress from '../../../components/ReadingProgress'
import './blogPost.css'
import 'highlight.js/styles/atom-one-dark.css'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

const components = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  p: (props) => <p className="mdx-p" {...props} />,
  a: (props) => <a className="mdx-link" {...props} />,
  ul: (props) => <ul className="mdx-ul" {...props} />,
  ol: (props) => <ol className="mdx-ol" {...props} />,
  li: (props) => <li className="mdx-li" {...props} />,
  pre: ({ children, ...props }) => {
    // Check if children has a code element with language class
    const hasLanguage = children?.props?.className?.includes('language-')

    if (hasLanguage) {
      return <CodeBlock {...children.props} />
    }

    // Fallback for non-highlighted code blocks
    return <pre className="mdx-pre" {...props}>{children}</pre>
  },
  code: ({ className, children, ...props }) => {
    // This is for inline code (not in pre tag)
    if (!className?.includes('language-')) {
      return <code className="mdx-code" {...props}>{children}</code>
    }
    // Code blocks are handled by the pre component
    return <code className={className} {...props}>{children}</code>
  },
  blockquote: (props) => <blockquote className="mdx-blockquote" {...props} />,
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <ReadingProgress />
      <article className="blog-post section">
        <div className="blog-post-container">
          {/* Back to Blog Link */}
          <Link href="/blog" className="back-link">
            ← Back to Blog
          </Link>

          {/* Post Header */}
          <header className="post-header">
            {post.featured && (
              <span className="featured-badge">Featured</span>
            )}
            <h1>{post.title}</h1>

            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="meta-dot">•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="meta-dot">•</span>
              <span>{post.readingTime} min read</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="post-tag"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="post-content">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Post Footer */}
          <footer className="post-footer">
            <div className="post-footer-content">
              <p>Thank you for reading!</p>
              <div className="share-section">
                <p className="share-label">Share this post:</p>
                <div className="share-buttons">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bijayabudhathoki.com/blog/${post.slug}`)}&via=monobijaya`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://bijayabudhathoki.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="post-disclaimer">
              <p>All views and opinions expressed in this article are my own and do not represent those of my employer.</p>
            </div>

            <Link href="/blog" className="back-to-blog-btn">
              ← Back to All Posts
            </Link>
          </footer>
        </div>
      </article>
    </div>
  )
}
