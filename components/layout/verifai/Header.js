import ThemeSwitch from "@/components/elements/ThemeSwitch"

export default function VerifAIHeader() {
  return (
    <header className="verifai-nav verifai-flex" style={{padding: '1.5rem 2rem', justifyContent: 'space-between'}}>
      <div className="verifai-flex" style={{gap: '1rem'}}>
        <span style={{fontWeight: 900, fontSize: '2rem', color: 'var(--verifai-hero-blue)'}}>VerifAI</span>
        <span style={{fontSize: '1rem', color: 'var(--verifai-sage)', fontWeight: 600}}>AI Authenticity App</span>
      </div>
      <nav className="verifai-flex" style={{gap: '2rem'}}>
        <a href="#categories">Categories</a>
        <a href="#ai-result">AI Result</a>
        <a href="#coach">AI Coach</a>
        <a href="#trend">Trend</a>
        <a href="#compare">Compare</a>
        <a href="#guides">Guides</a>
        <a href="#blog">Blog</a>
      </nav>
      <ThemeSwitch />
    </header>
  )
} 