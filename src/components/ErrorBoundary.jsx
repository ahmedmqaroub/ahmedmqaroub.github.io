import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#05060A',
          color: '#E8ECFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: 'rgba(11,13,20,0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '22px',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#FF3B1D'
            }}>
              Something went wrong
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: '#A9B0D6'
            }}>
              Please reload. If it keeps happening, contact me on WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#FF3B1D',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Reload
              </button>
              <button
                onClick={() => {
                  const WHATSAPP_NUMBER = '201234567890' // TODO: Replace with actual number
                  const message = encodeURIComponent('Hi Ahmed, I encountered an error on your portfolio website. Can you help?')
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer')
                }}
                style={{
                  background: 'transparent',
                  color: '#8FE7E6',
                  border: '2px solid #8FE7E6',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#8FE7E6'
                  e.target.style.color = '#05060A'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#8FE7E6'
                }}
              >
                WhatsApp Me
              </button>
            </div>
            {import.meta.env.DEV && (
              <details style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'left'
              }}>
                <summary style={{ cursor: 'pointer', color: '#A9B0D6' }}>Error Details (DEV only)</summary>
                <pre style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '0.85rem',
                  color: '#FF3B1D'
                }}>
                  {this.state.error && this.state.error.toString()}
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