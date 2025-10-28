import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  // Inline style for the parent container to center everything
  const centerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};


  // Inline style for the form itself
  const formStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "600px",
    maxWidth: "90vw",
  };

  // Input style
  const inputStyle = {
    width: "70%",
    padding: "18px",
    borderRadius: "14px",
    fontSize: "1.5rem",
    border: "2px solid #b0b0b0",
    outline: "none",
    boxSizing: "border-box",
  };

  // Button style
  const buttonStyle = {
    padding: "0 32px",
    height: "58px",
    borderRadius: "14px",
    background: "#2563eb",
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s",
  };

  return (
    <div style={centerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Search by book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={e => (e.target.style.background = "#1e40af")}
          onMouseOut={e => (e.target.style.background = "#2563eb")}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
