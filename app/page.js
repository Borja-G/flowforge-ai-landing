"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // make sure this path is correct

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { data, error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      console.log("Supabase response:", { data, error }); // ← check console

      if (error) {
        setMessage("Something went wrong. See console for details.");
      } else {
        setMessage("Success! Your email was added to the waitlist.");
        setEmail("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("Unexpected error. Check console.");
    }
  };

  return (
    <main
      style={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Test AI Automation Waitlist</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Test Join Waitlist
        </button>
      </form>
      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </main>
  );
}