"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  return (
   <section id="contact" className="py-20 px-6 bg-gradient-to-b from-brandDark to-black">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Work <span className="text-brandBlue">Together</span>
          </h2>

          <p className="text-brandGrey mb-6">
            Ready to transform your business with smart IT solutions?
            Reach out to us today and let’s build something exceptional.
          </p>

          <div className="space-y-4 text-brandGrey">
            <p>📍 Nairobi, Kenya</p>
            <p>📞 +254 700 000 000</p>
            <p>📧 info@noventratech.com</p>
          </div>
        </div>
               {/* Right Side Form */}
               <Reveal>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-brandBlue"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-brandBlue"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-brandBlue"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brandBlue hover:bg-blue-800 py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

          </form>
        </div>
        </Reveal>
      </div>
    </section>
  );
}