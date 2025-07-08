export default function VerifAIHero() {
  return (
    <section className="verifai-center" style={{minHeight: '60vh', flexDirection: 'column', padding: '4rem 0'}}>
      <h1 className="section-title" style={{fontSize: '3rem', marginBottom: '1rem'}}>VerifAI</h1>
      <p style={{fontSize: '1.5rem', color: 'var(--verifai-hero-gray)', marginBottom: '2rem', textAlign: 'center', maxWidth: 600}}>
        AI mobile app for iOS to verify items as fake or original. Fast, reliable, and secure.
      </p>
      <div className="verifai-flex" style={{gap: '2rem', marginBottom: '2rem'}}>
        <img src="/public/assests/images/store_badges/app-store-black.png" alt="App Store" style={{height: 48}} />
        <span style={{fontWeight: 600, color: 'var(--verifai-sage)'}}>Available soon on iOS</span>
      </div>
      <div style={{marginTop: '2rem'}}>
        <div className="verifai-glass" style={{width: 260, height: 520, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#888'}}>
          [Device Mockup]
        </div>
      </div>
    </section>
  )
} 