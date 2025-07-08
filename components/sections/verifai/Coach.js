const coachCategories = [
  'VerifAI Summary',
  'High Demand',
  'Check Seller Status',
  'Safe Shopping',
  'Is So Cheap?'
]

export default function VerifAICoach() {
  return (
    <section id="coach" style={{padding: '3rem 0'}}>
      <h2 className="section-title">AI Coach Chatbot</h2>
      <div className="verifai-flex" style={{gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
        {coachCategories.map(cat => (
          <button key={cat} className="btn--verifai-primary" style={{minWidth: 140}}>{cat}</button>
        ))}
      </div>
      <div className="verifai-card" style={{maxWidth: 600, margin: '0 auto', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>
        [Chatbot UI Placeholder]
      </div>
    </section>
  )
} 