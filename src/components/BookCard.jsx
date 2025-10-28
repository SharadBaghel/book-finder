import React from "react";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x180?text=No+Cover"; // smaller height

  const authors = book.author_name?.slice(0, 3).join(", ") || "Unknown Author";
  const year = book.first_publish_year || "N/A";

  return (
    <div className="card">
      <img src={coverUrl} alt={book.title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title" title={book.title}>{book.title}</h3>
        <div className="card-authors">{authors}</div>
        <div className="card-year">{year}</div>
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
          className="card-link"
        >
          View on OpenLibrary →
        </a>
      </div>

      <style>{`
        .card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 10px 30px rgba(56, 43, 255, 0.15);
        }
        .card-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #f0f0f0;
        }
        .card-content {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #283593;
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-authors {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.3rem;
        }
        .card-year {
          font-size: 0.85rem;
          color: #6986a6;
          margin-bottom: 0.7rem;
        }
        .card-link {
          margin-top: auto;
          background-color: #1976d2;
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          text-align: center;
          transition: background-color 0.18s ease;
          display: inline-block;
        }
        .card-link:hover {
          background-color: #0d47a1;
        }
      `}</style>
    </div>
  );
}

export default BookCard;
