"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: You’ll connect this to a database or email service later
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-gray-900">
      <h1 className="text-5xl font-bold mb-4 text-center text-black">
        FlowForge AI
      </h1>
      <p className="text-lg text-center mb-8 max-w-xl text-gray-800">
        Automate your business workflows with AI. Capture leads, follow up automatically, and save your team hours every week.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2 w-72 sm:w-auto text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold mt-4">
          Thanks! You’re on the waitlist.
        </p>
      )}

      <section className="mt-12 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">What We Automate</h2>
        <ul className="list-disc list-inside space-y-2 text-left sm:text-center text-gray-800">
          <li>Lead capture and qualification</li>
          <li>Automated follow-up emails</li>
          <li>CRM updates and workflow automation</li>
          <li>AI assistants for repetitive tasks</li>
        </ul>
      </section>
    </main>
  );
}