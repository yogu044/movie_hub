// About.js
import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About MOVIX</h2>
      <p>
        <strong>Welcome to <span className="highlight">MOVIX</span></strong> — your ultimate movie discovery platform!
      </p>
      <p>
        At MOVIX, we’re passionate about cinema. Our goal is to make your movie exploration experience seamless, informative, and enjoyable.
        Whether you're a film buff or just browsing for your next watch, MOVIX brings everything you need into one place:
      </p>
      <ul>
        <li>🎞️ High-quality Posters & Summaries</li>
        <li>👥 Detailed Cast & Crew Info</li>
        <li>🎯 Genres, Ratings, Runtime, and Language</li>
        <li>🔁 Smart Similar Movie Recommendations</li>
      </ul>
      <p>
        MOVIX helps you go beyond the trailer. Explore hidden gems, relive iconic classics, or keep up with the latest blockbusters — all with a clean, interactive experience.
      </p>
    </div>
  );
}
