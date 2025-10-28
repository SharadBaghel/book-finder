import React, { useState } from "react";
import SearchBar from "./SearchBar";

function Header({ onSearch }) {
  const [hovered, setHovered] = useState(false);

  const headerStyle = {
  textAlign: "center",
  padding: "2rem 1rem 1.5rem 1rem",
  marginBottom: "1.5rem",
  borderRadius: "1rem",
  background: "linear-gradient(135deg, #dbeafe 10%, #f3e8ff 40%, #fde68a 100%)", // Magic pastel gradient
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  transform: hovered ? "scale(1.02)" : "scale(1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "default",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};


  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "#1f2937",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
  };

  const emojiStyle = {
    fontSize: "2.8rem"
  };

  const subtitleStyle = {
    color: "#4b5563",
    marginTop: "0.5rem",
    fontSize: "1rem"
  };

  const underlineStyle = {
    width: hovered ? "80px" : "60px",
    height: "4px",
    borderRadius: "2px",
    background: "linear-gradient(to right, #3b82f6, #9333ea, #ec4899)",
    margin: "1rem auto 0",
    transition: "width 0.5s ease"
  };

  return (
    <header
      style={headerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 style={titleStyle}>
        <span style={emojiStyle}>📖</span> Discover Your Next Read
      </h1>
      <p style={subtitleStyle}>
        Search millions of books from the Open Library — quick, simple, and elegant.
      </p>
      <div style={underlineStyle}></div>
      {/* Add the SearchBar below the app subtitle */}
      
<div style={{ width: "100%", maxWidth: 500, margin: "18rem auto 0" }}>
  <SearchBar onSearch={onSearch} />
</div>

    </header>
  );
}

export default Header;
