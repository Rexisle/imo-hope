"use client";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

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
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Who We Are
    </h2>
    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
      <p>
        <strong>IMO-Hope for the Hopeless</strong> is an Evangelical medical outreach (CAC Reg: 6985108) with Head office in Portharcourt. Dedicated to serving 
        the rural heartlands of Nigeria. Driven by the Great Commission of 
        Matthew 28:19-20 and the compassion of Luke 4:18, we act as a 
        bridge of hope for the indigent, orphans, and widows.
      </p>
      
      <p>
        Our mission moves on the "vehicle of love," providing free healthcare 
        and essential aid to communities often overlooked. We believe that 
        healing the body is a powerful gateway to sharing the message of 
        Christ’s love.
      </p>

      <div className="bg-blue-50 p-4 border-l-4 border-blue-600 italic text-sm">
        <p className="font-semibold text-blue-900 mb-1">Our Policy of Stewardship:</p>
        We maintain strict budgetary reviews to ensure that every resource 
        reaches those in need, keeping our administrative costs at an 
        absolute minimum for maximum local impact.
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="rounded-3xl overflow-hidden shadow-2xl relative"
  >
    <img
      src="/h.png" 
      alt="Medical outreach impact in Nigeria"
      className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
    />
    {/* Optional overlay tag for extra modern feel */}
    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
      <p className="text-blue-700 font-bold text-sm">CAC Reg: 6985108</p>
    </div>
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
            src="https://www.youtube.com/embed/AnuR_vHFmEE"
            title="REFCEO Outreach Recap"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        
      </section>
      <section
        id="events"
        className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white"
      >

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
      On the set out day of outreach, we gather to serve, uplift, and transform lives. Join the movement.
    </p>

    {/* Glass Countdown Container */}
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] mb-4">
      <Countdown />
    </div>

    {/* Location with Icon */}
    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mt-2 text-sm md:text-base">
      <MapPin size={20} className="text-purple-400" />
      <span>Isiala Secretariat Town hall, Akpotu</span>
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
      <section className="bg-gray-800 text-white py-24 text-center px-6">
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
<Footer />
     
    </main>
  );
}