import React from 'react'
import { openWhatsApp } from '../lib/whatsapp'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  handleWhatsApp = () => {
    try {
      openWhatsApp('error-fallback', {})
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('WhatsApp open from error boundary failed:', err)
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#05060A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          color: '#E8ECFF',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{
            maxWidth: '600px',
            background: 'rgba(11,13,20,0.75)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '22px',
            padding: '48px 32px',
            backdropFilter: 'blur(12px)',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: '2rem',
              marginBottom: '16px',
              color: '#E8ECFF'
            }}>
              Something went wrong
            </h1>
            
            <p style={{
              color: '#A9B0D6',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              Please reload the page. If this keeps happening, contact me on WhatsApp and I'll help you out.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={this.handleReload}
                style={{
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #FF3B1D, #FF6B4A)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                Reload Page
              </button>
              
              <button
                onClick={this.handleWhatsApp}
                style={{
                  padding: '14px 32px',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#E8ECFF',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                WhatsApp Me
              </button>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <details style={{
                marginTop: '32px',
                textAlign: 'left',
                background: 'rgba(255,59,29,0.1)',
                border: '1px solid rgba(255,59,29,0.3)',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '0.875rem',
                color: '#FFB3A7'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: '600', marginBottom: '8px' }}>
                  Error Details (DEV only)
                </summary>
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  margin: '8px 0 0 0'
                }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
