// src/Donate.jsx
import React from 'react';
import './Donate.css';

function Donate() {
  return (
    <div className="donate-container">
      <h1>🙏 Donate Us</h1>
      <p className="donate-message">
        We are on a mission to help people in need by providing food, clothing, and essential support.
        <br /><br />
        Every contribution you make helps us reach more individuals struggling with hunger and poverty.
      </p>

      <div className="donate-stats">
        <h3>📊 Why Your Help Matters</h3>
        <p>
          🌍 Millions of people worldwide still lack access to regular meals, clean water, and basic necessities.<br />
          💡 Many families survive on less than $2 a day, making it difficult to afford even a single meal.<br />
          🤝 Your donation directly supports those affected by poverty and hardship.
        </p>
        <p>
          Together, we can make a meaningful difference in someone’s life.
        </p>
      </div>

      <div className="monero-section">
        <h3>Donate via Monero (XMR)</h3>
        <p>100% private and secure. We never track or store your identity.</p>
        <textarea
          className="monero-address"
          readOnly
          rows="3"
          value="46bQDdBrix8BxXV2DrueVp1sDw1KG9E45e315BYzKxgkTFq2CYNNbXyLe6XPw6Ebja6T5HC1hyuyGdCvrqzrxd3w7urA92V"
        />
        <img
          src="/images/monero.jpeg"
          alt="Monero QR Code"
          className="monero-qr"
        />
      </div>

      <div className="corruption-note">
        <h4>🛡️ Why Monero?</h4>
        <p>
          We believe transparency shouldn't mean vulnerability. In a world where misuse of funds and surveillance is common, we choose Monero to ensure that <strong>your help truly reaches those who need it</strong> — securely and privately.
        </p>
        <p>
          With Monero, your donation remains anonymous and protected. Your generosity is your choice — not your risk.
        </p>
      </div>
    </div>
  );
}

export default Donate;
