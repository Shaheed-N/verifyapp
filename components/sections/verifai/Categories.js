const categories = [
  { name: 'Clothing Items', icon: '👕' },
  { name: 'Luxury Jewelry', icon: '💍' },
  { name: 'Antique', icon: '🏺' },
  { name: 'Electronics & Gadgets', icon: '📱' },
  { name: 'Perfumes & Cosmetics', icon: '💄' },
  { name: 'Accessories & Bags', icon: '👜' },
]

export default function VerifAICategories() {
  return (
    <section id="categories" style={{padding: '3rem 0'}}>
      <h2 className="section-title">Categories</h2>
      <div className="verifai-flex" style={{flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
        {categories.map(cat => (
          <div key={cat.name} className="verifai-card verifai-center" style={{flexDirection: 'column', width: 180, minHeight: 140}}>
            <span style={{fontSize: '2.5rem', marginBottom: 12}}>{cat.icon}</span>
            <span style={{fontWeight: 600, fontSize: '1.1rem'}}>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
} 