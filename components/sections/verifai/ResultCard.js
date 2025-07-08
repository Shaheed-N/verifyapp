const sampleResult = {
  status: 'Likely Authentic',
  confidence: 92,
  productType: 'Luxury Jewelry',
  period: '2020s',
  qualityScore: 9,
  price: '$12,500',
  brand: 'Cartier',
  certification: 'Premium',
  summary: 'AI analysis shows consistent material, serial number, and provenance. No signs of forgery detected. High confidence in authenticity.'
}

export default function VerifAIResultCard() {
  const r = sampleResult
  return (
    <section id="ai-result" className="verifai-center" style={{padding: '3rem 0'}}>
      <div className="verifai-card" style={{maxWidth: 480, width: '100%'}}>
        <div className="verifai-flex" style={{justifyContent: 'space-between', marginBottom: 12}}>
          <span style={{fontWeight: 700, fontSize: '1.2rem'}}>{r.status}</span>
          <span style={{fontWeight: 600, color: 'var(--verifai-sage)'}}>{r.confidence}%</span>
        </div>
        <div className="verifai-flex" style={{gap: '1.5rem', marginBottom: 12}}>
          <span><b>Type:</b> {r.productType}</span>
          <span><b>Period:</b> {r.period}</span>
        </div>
        <div className="verifai-flex" style={{gap: '1.5rem', marginBottom: 12}}>
          <span><b>Quality:</b> {r.qualityScore}/10</span>
          <span><b>Price:</b> {r.price}</span>
        </div>
        <div className="verifai-flex" style={{gap: '1.5rem', marginBottom: 12}}>
          <span><b>Brand:</b> {r.brand}</span>
          <span><b>Certification:</b> {r.certification}</span>
        </div>
        <div style={{marginBottom: 12}}>
          <b>AI Summary:</b>
          <div style={{marginTop: 6, color: 'var(--verifai-hero-gray)'}}>{r.summary}</div>
        </div>
        <div className="verifai-flex" style={{justifyContent: 'flex-end'}}>
          <button className="btn--verifai-primary">Share</button>
        </div>
      </div>
    </section>
  )
} 