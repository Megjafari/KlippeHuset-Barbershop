import { useState, useEffect } from "react";
import "./styles.css";
import { translations, reviews } from "./data.js";
import Reveal from "./components/Reveal.jsx";
import Stars from "./components/Stars.jsx";

const GALLERY_COLORS = [
  "linear-gradient(135deg,#C8BC9E,#A89878)",
  "linear-gradient(135deg,#B8C8B8,#8AAA8A)",
  "linear-gradient(135deg,#D8C8A8,#B8A080)",
  "linear-gradient(135deg,#C8C0B0,#A8988A)",
];

export default function App() {
  const [lang, setLang] = useState("da");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeReview, setActiveReview] = useState(0);


  const nextReviews = () => setActiveReview((v) => (v + 3) % reviews.length);

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const displayedReviews = [0, 1, 2].map((i) => reviews[(activeReview + i) % reviews.length]);

  return (
    <>
      {/* Progress */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/kh-logo.png" alt="Klippe Huset" style={{ height: "60px", objectFit: "contain" }} />
        </div>
        <div className="nav-right">
          {t.nav.map((label, i) => {
            const ids = ["info", "gallery", "about"];
            return (
              <span key={i} className="nav-link" onClick={() => scroll(ids[i])}>
                {label}
              </span>
            );
          })}
          <button className="nav-lang" onClick={() => setLang(lang === "da" ? "en" : "da")}>
            {lang === "da" ? "EN" : "DA"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">{t.eyebrow}</div>
          <h1 className="hero-title">
            {t.hero_line1}
            <em>{t.hero_line2}</em>
          </h1>
          <p className="hero-sub">{t.hero_sub}</p>
          <a
            href="https://book.timma.dk/klippehusetaps"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-book"
          >
            {t.book_btn}
            <span>→</span>
          </a>
        </div>
        <div className="hero-right">
          <div className="hero-right-bg" />
          <div className="hero-right-accent" />
          <div className="hero-right-kh">
            <span className="hero-right-kh-text">KH</span>
          </div>
          <div className="hero-vline" />
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          {t.scroll_hint}
        </div>
        <div className="hero-year">Est. 2005</div>
      </section>

      {/* Info */}
      <section id="info" className="info-strip">
        <div className="info-card">
          <div className="info-card-label">{t.prices_label}</div>
          <div className="info-row">
            <span className="info-row-key">{t.men}</span>
            <span className="info-row-val accent">200 kr</span>
          </div>
          <div className="info-row">
            <span className="info-row-key">{t.children}</span>
            <span className="info-row-val accent">150 kr</span>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-label">{t.hours_label}</div>
          <div className="info-row">
            <span className="info-row-key">{t.weekday}</span>
            <span className="info-row-val">10:00–18:00</span>
          </div>
          <div className="info-row">
            <span className="info-row-key">{t.saturday}</span>
            <span className="info-row-val">10:00–16:00</span>
          </div>
        </div>
        <div className="info-card">
          
          <div className="info-contact-name">Hafizullah Mir</div>
          <a href="tel:+4598132125" className="info-contact-link">+45 98 13 21 25</a>
          <a href="https://www.facebook.com/klippehuset" className="info-contact-link" target="_blank" rel="noopener noreferrer">
            Facebook
        </a>
          <div className="info-contact-link" style={{ marginTop: 10 }}>{t.address}, Aalborg</div>
        </div>
      </section>

      {/* Services */}
      <div className="services-ticker">
        <div className="services-track">
          {[...t.services, ...t.services, ...t.services].map((s, i) => (
            <span key={i} className="services-ticker-item">
              {s.name} <em>{s.price}</em> <span className="services-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <Reveal>
          <div className="gallery-header">
            <div className="section-eyebrow">{t.gallery_label}</div>
            <h2 className="section-title">
              {t.gallery_title} <em>{t.gallery_em}</em>
            </h2>
          </div>
        </Reveal>
        <div className="gallery-grid">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className={`g-cell g-cell-${n}`}>
                <div
                  className="g-cell-inner"
                  style={{ background: GALLERY_COLORS[i] }}
                >
                  <span className="g-featured-tag">
                    {i === 0 ? "Featured" : `0${n}`}
                  </span>
                </div>
                <span className="g-cell-num">0{n}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-img">
          <span className="about-img-ph">✂</span>
          <div className="about-img-overlay" />
        </div>
        <div className="about-content">
          <Reveal>
            <div className="section-eyebrow">{t.about_label}</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Hafizullah <em>Mir</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-quote">{t.about_text}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="about-body">{t.about_text2}</p>
            <div className="about-sig">Hafizullah</div>
            <div className="about-role">{t.owner_title}</div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <Reveal>
          <div className="section-eyebrow">{t.reviews_label}</div>
          <h2 className="section-title">
            {t.reviews_title} <em>{t.reviews_em}</em>
          </h2>
        </Reveal>
        <div className="reviews-grid">
          {displayedReviews.map((r, i) => (
            <Reveal key={`${activeReview}-${i}`} delay={i * 0.07}>
              <div className="review-card">
                <Stars count={r.stars} />
                <p className="review-text">{r.text}</p>
                <div className="review-name">{r.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="reviews-note">
          <span>Google Reviews</span>
          <button className="reviews-next" onClick={nextReviews}>
            Vis næste →
          </button>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="map-section">
        <Reveal>
          <div className="section-eyebrow">{t.find_us_label}</div>
          <h2 className="section-title">
            {t.map_title} <em>{t.map_em}</em>
          </h2>
        </Reveal>
        <div className="map-inner">
          <div className="map-detail">
            <div>
              <div className="map-detail-label">{t.address}</div>
              <div className="map-detail-val">
                Niels Ebbesensgade 15<br />9000 Aalborg
              </div>
            </div>
            <div>
              <div className="map-detail-label">Telefon</div>
              <div className="map-detail-val">
                <a href="tel:+4598132125">+45 98 13 21 25</a>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title="Klippe Huset kort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.7!2d9.918!3d57.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDAyJzQ4LjgiTiA5wrA1NScwNC44IkU!5e0!3m2!1sda!2sdk!4v1"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">Klippe Huset</div>
        <div className="footer-copy">© {new Date().getFullYear()} · {t.footer_rights}</div>
        <a href="https://book.timma.dk/klippehusetaps" target="_blank" rel="noopener noreferrer" className="footer-link">
          {t.book_btn} →
        </a>
      </footer>
    </>
  );
}
