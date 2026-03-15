"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // ← put it here at the top

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      setMessage("Something went wrong. Please try again.");
      console.error(error);
    } else {
      setMessage("Thanks! You’re on the waitlist.");
      setEmail("");
    }
  };

  return (
    <main style={{ backgroundColor: "white", color: "black", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Join the AI Automation Waitlist</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>Join Waitlist</button>
      </form>
      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </main>
  );
}