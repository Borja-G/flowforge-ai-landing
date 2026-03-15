"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("You're on the waitlist!");
      setEmail("");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at 20% 30%, rgba(90,0,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,140,255,0.35), transparent 40%), #050505",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          AI Automation for Modern Businesses
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.8,
            marginBottom: "40px",
            lineHeight: "1.5",
          }}
        >
          Automate workflows, reduce manual work, and scale faster with AI-powered
          systems. Join the waitlist to get early access.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              width: "260px",
              outline: "none",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px 22px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, #6a5cff, #3aa0ff)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Join Waitlist
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              opacity: 0.8,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}