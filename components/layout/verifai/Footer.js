export default function VerifAIFooter() {
  return (
    <footer className="verifai-footer">
      <div style={{marginBottom: '1rem'}}>
        <a href="#" style={{margin: '0 1rem'}}>Privacy Policy</a>
        <a href="#" style={{margin: '0 1rem'}}>Terms</a>
        <a href="#" style={{margin: '0 1rem'}}>Contact</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} VerifAI. All rights reserved.
      </div>
    </footer>
  )
} 