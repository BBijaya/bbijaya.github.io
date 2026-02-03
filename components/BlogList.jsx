'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Fuse from 'fuse.js'
import './BlogList.css'

const BlogList = ({ posts, currentPage, totalPages }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(null)

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set()
    posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tagSet.add(tag))
      }
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'excerpt', 'tags'],
      threshold: 0.3,
      includeScore: true,
    })
  }, [posts])

  // Filter posts based on search and selected tag
  const filteredPosts = useMemo(() => {
    let result = posts

    // Apply search filter
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery)
      result = searchResults.map(r => r.item)
    }

    // Apply tag filter
    if (selectedTag) {
      result = result.filter(post =>
        post.tags && post.tags.includes(selectedTag)
      )
    }

    return result
  }, [posts, searchQuery, selectedTag, fuse])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="blog-list">
      {/* Search and Filter Bar - Only show if there are posts */}
      {posts.length > 0 && (
        <motion.div
          className="blog-controls"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="search-box">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="tag-filter">
            <button
              className={`tag-btn ${!selectedTag ? 'active' : ''}`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Results Count */}
      {(searchQuery || selectedTag) && (
        <motion.p
          className="results-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        </motion.p>
      )}

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredPosts.length === 0 ? (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>
              {posts.length === 0
                ? 'No posts yet. Coming soon!'
                : 'No posts found. Try adjusting your search or filters.'}
            </p>
          </motion.div>
        ) : (
          filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="blog-card"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              {post.featured && (
                <span className="featured-badge">Featured</span>
              )}

              <div className="blog-card-header">
                <div className="blog-meta">
                  <span className="blog-date">{formatDate(post.date)}</span>
                  <span className="blog-dot">•</span>
                  <span className="blog-read-time">{post.readingTime} min read</span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                <h3>{post.title}</h3>
              </Link>

              <p className="blog-excerpt">{post.excerpt}</p>

              {post.tags && post.tags.length > 0 && (
                <div className="blog-tags">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="blog-tag"
                      onClick={(e) => {
                        e.preventDefault()
                        setSelectedTag(tag)
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link href={`/blog/${post.slug}`} className="read-more">
                Read Article →
              </Link>
            </motion.article>
          ))
        )}
      </div>

      {/* Pagination */}
      {!searchQuery && !selectedTag && totalPages > 1 && (
        <motion.div
          className="pagination"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {currentPage > 1 && (
            <Link
              href={currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`}
              className="pagination-btn"
            >
              ← Previous
            </Link>
          )}

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <Link
                key={pageNum}
                href={pageNum === 1 ? '/blog' : `/blog/page/${pageNum}`}
                className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </Link>
            ))}
          </div>

          {currentPage < totalPages && (
            <Link
              href={`/blog/page/${currentPage + 1}`}
              className="pagination-btn"
            >
              Next →
            </Link>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default BlogList
