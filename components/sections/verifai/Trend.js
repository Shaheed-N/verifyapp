const trendData = {
  score: 8,
  keyElements: ['Popular Brand', 'Modern Design', 'High Social Mentions'],
  suggestions: ['Promote on Instagram', 'Highlight unique features']
}

export default function VerifAITrend() {
  return (
    <section id="trend" className="verifai-center" style={{padding: '3rem 0'}}>
      <div className="verifai-card" style={{maxWidth: 420, width: '100%'}}>
        <div className="verifai-flex" style={{justifyContent: 'space-between', marginBottom: 12}}>
          <span style={{fontWeight: 700, fontSize: '1.2rem'}}>Trend Score</span>
          <span style={{fontWeight: 600, color: 'var(--verifai-hero-blue)'}}>{trendData.score}/10</span>
        </div>
        <div style={{marginBottom: 12}}>
          <b>Key Elements:</b>
          <ul style={{margin: '8px 0 0 1.2em'}}>
            {trendData.keyElements.map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <div>
          <b>Suggestions:</b>
          <ul style={{margin: '8px 0 0 1.2em'}}>
            {trendData.suggestions.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
} 