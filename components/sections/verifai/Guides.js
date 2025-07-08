const guides = [
  { title: 'How to Scan Items', tip: 'Ensure good lighting and focus on brand marks.' },
  { title: 'Expert Tip', tip: 'Check for serial numbers and certificates.' },
  { title: 'AI Best Practices', tip: 'Upload multiple angles for higher accuracy.' }
]

export default function VerifAIGuides() {
  return (
    <section id="guides" style={{padding: '3rem 0'}}>
      <h2 className="section-title">Scan Guides & Expert Tips</h2>
      <div className="verifai-flex" style={{flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
        {guides.map(g => (
          <div key={g.title} className="verifai-card" style={{width: 260, minHeight: 120}}>
            <b>{g.title}</b>
            <div style={{marginTop: 8, color: 'var(--verifai-hero-gray)'}}>{g.tip}</div>
          </div>
        ))}
      </div>
    </section>
  )
} 