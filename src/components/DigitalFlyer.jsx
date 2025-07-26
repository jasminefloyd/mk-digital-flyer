import { Clock, MapPin, Phone, Star, Heart, Share2 } from "lucide-react"


export default function DigitalFlyer() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Meryl's Kitchen - Delicious Food Awaits!",
        text: "Check out Meryl's Kitchen - specializing in wings, pizza, and famous egg rolls!",
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234663"
  }

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=123+Food+Street,+Flavor+Town", "_blank")
  }

  return (
    <article className="digital-flyer">
      {/* Header with animated background */}
      <header className="flyer-header">
        <div className="header-bg-animation"></div>
        <figure className="logo-container">
          <img src="./src/assets/meryls-kitchen-logo.jpg" alt="Meryl's Kitchen Logo" className="logo-image" />
        </figure>
        <div className="header-actions">
          <button className="action-btn favorite-btn" aria-label="Add to favorites">
            <Heart className="action-icon" />
          </button>
          <button className="action-btn share-btn" onClick={handleShare} aria-label="Share">
            <Share2 className="action-icon" />
          </button>
        </div>
      </header>

      {/* Food showcase with interactive elements */}
      <section className="food-showcase">
        <h2 className="showcase-title">Our Specialties</h2>
        <div className="food-grid">
          <article className="food-card" tabIndex="0">
            <figure className="food-image-container">
              <img src="./src/assets/nachos.jpg" alt="Loaded Nachos" className="food-image" />
              <div className="food-overlay">
                <Star className="rating-star" />
                <span className="rating">4.8</span>
              </div>
            </figure>
            <div className="food-info">
              <h3 className="food-name">Loaded Nachos</h3>
              <p className="food-description">Fresh tortilla chips with melted cheese</p>
            </div>
          </article>

          <article className="food-card" tabIndex="0">
            <figure className="food-image-container">
              <img src="./src/assets/wings.jpg" alt="Buffalo Wings" className="food-image" />
              <div className="food-overlay">
                <Star className="rating-star" />
                <span className="rating">4.9</span>
              </div>
            </figure>
            <div className="food-info">
              <h3 className="food-name">Buffalo Wings</h3>
              <p className="food-description">Crispy wings with signature glaze</p>
            </div>
          </article>

          <article className="food-card" tabIndex="0">
            <figure className="food-image-container">
              <img src="./src/assets/grilled-chicken.jpg" alt="Grilled Chicken" className="food-image" />
              <div className="food-overlay">
                <Star className="rating-star" />
                <span className="rating">4.7</span>
              </div>
            </figure>
            <div className="food-info">
              <h3 className="food-name">Grilled Food</h3>
              <p className="food-description">Perfectly seasoned and charred</p>
            </div>
          </article>

          <article className="food-card" tabIndex="0">
            <figure className="food-image-container">
              <img src="./src/assets/egg-rolls.jpg" alt="Egg Rolls" className="food-image" />
              <div className="food-overlay">
                <Star className="rating-star" />
                <span className="rating">5.0</span>
              </div>
            </figure>
            <div className="food-info">
              <h3 className="food-name">Famous Egg Rolls</h3>
              <p className="food-description">30+ unique varieties available</p>
            </div>
          </article>
        </div>
      </section>

      {/* About section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Meryl's Kitchen</h2>
          <p className="about-text">
            We specialize in wings, pizza, and our famous egg rolls — available in over 30 unique and flavor-packed
            varieties. From comfort classics to creative twists, everything is made from scratch with love.
          </p>
        </div>
      </section>

      {/* Interactive info cards */}
      <section className="info-cards">
        <article className="info-card hours-card">
          <div className="card-icon">
            <Clock className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Hours</h3>
            <p className="card-text">12PM - 10PM</p>
            <p className="card-subtext">Open Daily</p>
          </div>
        </article>

        <article className="info-card location-card" onClick={handleDirections}>
          <div className="card-icon">
            <MapPin className="icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Location</h3>
            <p className="card-text">123 Food Street</p>
            <p className="card-subtext">Tap for directions</p>
          </div>
        </article>
      </section>

      {/* Call-to-action buttons */}
      <section className="cta-section">
        <button className="cta-btn primary-cta" onClick={handleCall}>
          <Phone className="cta-icon" />
          Call Now: (708) 762-9596
        </button>

        <div className="social-links">
          <span className="social-text">Follow us:</span>
          <a href="#" className="social-link">
            @MerylsKitchen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="flyer-footer">
        <p className="footer-text">🏆 Greatness Magnified - Made with ❤️ </p>
      </footer>
    </article>
  )
}
