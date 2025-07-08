const compareData = {
  itemA: { name: 'Cartier Ring', trend: 8, recommendation: 'More trendy, higher resale value' },
  itemB: { name: 'Generic Ring', trend: 4, recommendation: 'Less trendy, lower demand' }
}

export default function VerifAICompare() {
  return (
    <section id="compare" className="verifai-center" style={{padding: '3rem 0'}}>
      <div className="verifai-card" style={{maxWidth: 520, width: '100%'}}>
        <div className="verifai-flex" style={{justifyContent: 'space-between', marginBottom: 12}}>
          <span style={{fontWeight: 700, fontSize: '1.2rem'}}>AI Compare</span>
        </div>
        <div className="verifai-flex" style={{gap: '2rem', marginBottom: 12, justifyContent: 'center'}}>
          <div style={{textAlign: 'center'}}>
            <b>{compareData.itemA.name}</b>
            <div style={{fontSize: '1.5rem', color: 'var(--verifai-hero-blue)', fontWeight: 700}}>{compareData.itemA.trend}/10</div>
            <div style={{color: 'var(--verifai-sage)'}}>{compareData.itemA.recommendation}</div>
          </div>
          <div style={{fontWeight: 700, fontSize: '2rem', color: '#bbb'}}>vs</div>
          <div style={{textAlign: 'center'}}>
            <b>{compareData.itemB.name}</b>
            <div style={{fontSize: '1.5rem', color: 'var(--verifai-hero-blue)', fontWeight: 700}}>{compareData.itemB.trend}/10</div>
            <div style={{color: 'var(--verifai-sage)'}}>{compareData.itemB.recommendation}</div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: 12, color: 'var(--verifai-hero-gray)'}}>
          AI recommends <b>{compareData.itemA.name}</b> for trendiness and value.
        </div>
      </div>
    </section>
  )
} 