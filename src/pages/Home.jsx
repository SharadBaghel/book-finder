// Import Header and remove direct SearchBar import!
import React, { useState } from "react";
import Header from "../components/Header";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const searchBooks = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setSearched(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();
      setBooks(data.docs.slice(0, 21));
    } catch {
      setError("Failed to fetch books. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto", minHeight: "100vh", position: "relative" }}>
      {/* Pass your searchBooks function into Header */}
      <Header onSearch={searchBooks} />

      {/* Show results below the header */}
      {loading && (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>🔎 Searching books...</p>
      )}
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{error}</p>
      )}
      {!loading && books.length > 0 && (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
      {!loading && !books.length && searched && (
        <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>
          No books found. Try searching something!
        </p>
      )}
      <style>{`
        .books-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }
        @media (max-width: 900px) {
          .books-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .books-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
