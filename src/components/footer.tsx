import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-grid footer-grid">
        <div>
          <strong>Mostafa Tavassoli</strong>
          <p>Backend systems · Cloud-native platforms · Applied AI</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/mosTavassoli" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mostafa-tavassoli/" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/writing">Writing</Link>
        </div>
      </div>
    </footer>
  );
}
