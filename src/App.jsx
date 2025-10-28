import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  // Default testimonials
  const [testimonials, setTestimonials] = useState([
    {
      name: "Alex Johnson",
      feedback:
        "Book Finder made my research projects so much easier! Love how fast and simple it is.",
    },
    {
      name: "Priya Sharma",
      feedback:
        "A clean and beautiful interface. I discovered so many new authors using this app!",
    },
    {
      name: "Daniel Lee",
      feedback:
        "Finally a book search tool that just works — quick results and stunning UI!",
    },
  ]);

  // Handle new user feedback
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setTestimonials((prev) => [...prev, { name, feedback: message }]);
    alert("💬 Thank you for your feedback!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 app-bg">
  {/* Header */}
  <header
    className="app-header glass-effect shadow-lg mx-auto mt-6 mb-2 font-extrabold rounded-xl relative px-8 py-8 flex flex-col items-center text-[10rem] leading-none"
    style={{ 
      background: "linear-gradient(135deg, #dbeafe 10%, #f3e8ff 40%, #fde68a 100%)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      color: "#1f2937"
    }}
  >
    <div className="flex items-center gap-8 mb-6 text-[16rem] md:text-[17rem]">
      <span>📚</span>
      <span>🔍</span>
      
      <span>Book Finder</span>
      
      
    </div>
    <div className="header-underline w-44 h-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full mt-4"></div>
  </header>




      {/* Main Search Section */}
      <main className="flex-grow flex justify-center">
        <Home />
      </main>

      {/* Testimonials Section */}
      <section
        style={{
          marginTop: "0rem",
          padding: "3rem 1rem",
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(10px)",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          boxShadow: "inset 0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#1f2937",
          }}
        >
          ❤️ What Our Users Say
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                borderRadius: "1rem",
                textAlign: "center",
                padding: "1.5rem",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.1)";
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  color: "#374151",
                  marginBottom: "0.75rem",
                  lineHeight: "1.5",
                }}
              >
                “{t.feedback}”
              </p>
              <h4
                style={{
                  fontWeight: "600",
                  color: "#111827",
                  fontSize: "1rem",
                }}
              >
                — {t.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <footer className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">📩 Contact Us</h2>
          <p className="text-sm mb-6 text-blue-100">
            Have suggestions, feedback, or issues? Drop us a message below 👇
          </p>

          <form
            onSubmit={handleFeedbackSubmit}
            className="grid gap-3 sm:grid-cols-2 text-gray-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="sm:col-span-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 h-24 resize-none"
              required
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          <p className="mt-8 text-xs opacity-80">
            &copy; {new Date().getFullYear()} Book Finder &mdash; Built with React 💙
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
