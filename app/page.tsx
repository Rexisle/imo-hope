"use client";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/hr.png')] bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
  IMO HOPE FOR THE HOPELESS <br className="hidden md:block" />
  
</h1>

<p className="text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200">
  An Evangelical Free Medical Outreach.
</p>

<a
  href="#about"
  className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
>
  Explore Movement
</a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-24 px-6 md:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Imo Hope for the Hopeless Outreach is a monthly impact initiative focused on
            evangelism, humanitarian service, worship, and community
            transformation in rural areas of Imo State, Nigeria. We are committed to
            sharing the love of Christ through medical outreach, food distribution,
            and spiritual support, bringing hope to those in need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/h.png"
            alt="Outreach impact"
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>
      </section>
      <Activities />

      {/* GALLERY */}
      <Gallery />

      {/* VIDEO + COUNTDOWN */}
      <section className="py-24 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Watch The Movement
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          See what God is doing through Imo Hope for the Hopeless.
        </p>

        {/* Reduced Video Size */}
        <div className="max-w-3xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/F8PsyRIU9aI"
            title="REFCEO Outreach Recap"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        
      </section>
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">

{/* Section Header */}
<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
  Next Outreach Countdown
</h2>

{/* Glow Accent Background */}
<div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600/30 blur-[120px] rounded-full" />
<div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600/30 blur-[120px] rounded-full" />

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
>

  {/* Left: Countdown */}
  <div className="flex-1 text-center md:text-left">
    <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 text-sm md:text-base">
      Every second Friday, we gather to serve, uplift, and transform lives. Join the movement.
    </p>

    {/* Glass Countdown Container */}
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] mb-4">
      <Countdown />
    </div>

    {/* Location with Icon */}
    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mt-2 text-sm md:text-base">
      <MapPin size={20} className="text-purple-400" />
      <span>Central Community Church, Main Street, Cityville</span>
    </div>
  </div>

  {/* Right: Hero Image */}
  <div className="flex-1">
    <motion.img
      src="/next.jpeg"
      alt="Outreach"
      className="rounded-3xl shadow-2xl object-cover w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />
  </div>

</motion.div>
</section>

      {/* DONATION CTA */}
      <section className="bg-black text-white py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Partner With The Vision
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-gray-300">
            Your support fuels the mission and helps us reach more lives.
          </p>
            <a
            href="/partnership"
            className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
            Partner now
            </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Brand */}
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
      IMO HOPE FOR THE HOPELESS
    </h3>

    <p className="text-gray-400 max-w-md mx-auto mb-10 text-sm md:text-base">
      Impacting lives through faith,
      compassion, and community transformation.
    </p>

    {/* Social Links */}
    <div className="flex justify-center gap-10 text-sm font-medium mb-12">
      <a
        href="#"
        className="hover:text-white transition duration-300 hover:scale-105"
      >
        Instagram
      </a>
      <a
        href="#"
        className="hover:text-white transition duration-300 hover:scale-105"
      >
        YouTube
      </a>
      <a
        href="#"
        className="hover:text-white transition duration-300 hover:scale-105"
      >
        Contact
      </a>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 pt-8">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} REFCEO. All rights reserved.
      </p>
    </div>

  </div>
</footer>
    </main>
  );
}