const blogs = [
  { title: 'How AI Detects Fakes', summary: 'Learn how VerifAI uses advanced AI to spot counterfeit items.' },
  { title: 'Top 5 Tips for Authentic Shopping', summary: 'Expert advice for safe and smart purchases.' },
  { title: 'The Future of Item Verification', summary: 'How technology is changing the way we shop.' }
]

export default function VerifAIBlog() {
  return (
    <section id="blog" style={{padding: '3rem 0'}}>
      <h2 className="section-title">Blog</h2>
      <div className="verifai-flex" style={{flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
        {blogs.map(b => (
          <div key={b.title} className="verifai-card" style={{width: 320, minHeight: 140}}>
            <b>{b.title}</b>
            <div style={{marginTop: 8, color: 'var(--verifai-hero-gray)'}}>{b.summary}</div>
            <a href="#" style={{marginTop: 12, display: 'inline-block', color: 'var(--verifai-hero-blue)', fontWeight: 600}}>Read more</a>
          </div>
        ))}
      </div>
    </section>
  )
} 