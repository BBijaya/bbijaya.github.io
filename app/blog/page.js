import { getPaginatedPosts } from '../../lib/posts'
import BlogList from '../../components/BlogList'

export const metadata = {
  title: 'Blog',
  description: 'Insights and tutorials on cloud security, infrastructure, and DevSecOps.',
}

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1, 6)

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="blog section">
        <div className="blog-container">
          <div className="section-header">
            <div className="accent-line"></div>
            <h2>Blog</h2>
            <p className="section-subtitle">
              Insights and tutorials on cloud security, infrastructure, and DevSecOps
            </p>
          </div>

          <BlogList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </div>
  )
}
