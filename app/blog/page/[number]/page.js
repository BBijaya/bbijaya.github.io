import { getPaginatedPosts, getAllPosts } from '../../../../lib/posts'
import BlogList from '../../../../components/BlogList'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  const postsPerPage = 6
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  // Always return at least page 1 to avoid build errors when no posts exist
  if (totalPages === 0) {
    return [{ number: '1' }]
  }

  return Array.from({ length: totalPages }, (_, i) => ({
    number: String(i + 1),
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  return {
    title: `Blog - Page ${resolvedParams.number}`,
    description: 'Insights and tutorials on cloud security, infrastructure, and DevSecOps.',
  }
}

export default async function BlogPaginationPage({ params }) {
  const resolvedParams = await params
  const pageNumber = parseInt(resolvedParams.number, 10)

  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound()
  }

  const { posts, totalPages, currentPage } = getPaginatedPosts(pageNumber, 6)

  if (posts.length === 0 && pageNumber !== 1) {
    notFound()
  }

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
