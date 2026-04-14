"use client";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
   <section id="home" className="relative flex items-center justify-center text-center px-6 py-16 md:py-20 overflow-hidden">
    <div className="absolute inset-0 -z-20 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-1/3 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]  animate-floatGlow" />
  </div>
    <Reveal>
  <div className="max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Smart IT Solutions for a{" "}
      <span className="text-brandBlue">Digital Future</span>
    </h1>

    <p className="text-gray-400 text-lg mb-8">
      We provide IT consultancy, system development, networking, cybersecurity,
      and enterprise support solutions tailored to help your business grow.
    </p>

    <div className="flex justify-center gap-4">
          <a
  href="#contact"
  className="bg-brandBlue px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"
>
  Get Started
</a>

<a
  href="#services"
  className="border border-brandBlue px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-400 transition"
>
  Our Services
</a>
    </div>
  </div>
  </Reveal>

</section>
  );
}