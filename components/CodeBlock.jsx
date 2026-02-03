'use client'

import { useState } from 'react'
import './CodeBlock.css'

const CodeBlock = ({ children, className, ...props }) => {
  const [copied, setCopied] = useState(false)

  // Extract language from className (e.g., "hljs language-javascript")
  const match = className?.match(/language-(\w+)/)
  const language = match ? match[1] : 'code'

  // Get the code content - handle various children structures
  const getCodeContent = () => {
    // Direct string
    if (typeof children === 'string') {
      return children
    }
    // Nested in props
    if (children?.props?.children) {
      if (typeof children.props.children === 'string') {
        return children.props.children
      }
    }
    // Array of children
    if (Array.isArray(children)) {
      return children.map(child =>
        typeof child === 'string' ? child : child?.props?.children || ''
      ).join('')
    }
    return String(children || '')
  }

  const handleCopy = async () => {
    const code = getCodeContent()
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button
          onClick={handleCopy}
          className="copy-button"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className={className} {...props}>
        {children}
      </pre>
    </div>
  )
}

export default CodeBlock
