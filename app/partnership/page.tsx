"use client";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Stethoscope,
  Eye,
  Droplets,
  Activity,
  Phone,
  MapPin,
  Users,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Partnership() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
        <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16 bg-gradient-to-br from-amber-900 via-black to-black text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Partner With IMO-HOPE FOR THE HOPELESS
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-8">
            An Evangelical & Free Medical Outreach incorporated under the
            Federal Republic of Nigeria Corporate Affairs Commission
            (Reg. No. 6985108).
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Become a Partner
          </a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              IMO-HOPE FOR THE HOPELESS is focused on meeting the needs of rural
              communities in Nigeria and Africa in general.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Riding on the Great Commission (Matthew 28:19-20, Luke 4:18),
              we express the love of Christ through medical outreach and
              compassionate service to the less privileged, indigents,
              orphans and widows.
            </p>
          </motion.div>

          <motion.img
            src="/dark.png"
            alt="Medical Outreach"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-24 bg-gray-50 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Outreach Activities
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { icon: <Users />, title: "Grassroot Evangelism" },
            { icon: <Stethoscope />, title: "Free Medical Care" },
            { icon: <Eye />, title: "Eye Tests & Vision Screening" },
            { icon: <Activity />, title: "Free Blood & Sugar Check" },
            { icon: <Droplets />, title: "Diabetic Screening" },
            { icon: <HeartHandshake />, title: "Support for the Indigent" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="mb-4 flex justify-center text-blue-600">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 px-6 md:px-16 bg-orange-950 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Since inception on April 19th, 2019 to November 23rd, 2025,
          we have covered a total of 70 Autonomous Communities
          across Imo, Abia and Rivers State.
        </p>
      </section>
      <Donate />

      {/* DIRECTORS */}
      <section className="py-24 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Directors / Trustees
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-center">
          {[
            "Dr. Augustine Obinnah",
            "Rev. Sylvia Testimony Okere",
            "Dr. Okere Anoruo Nicholas",
            "Mrs. Edith Oparah",
            "Dr. Okere Sylva Enyinnah",
          ].map((name, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl p-6 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 to-gray-700 text-white px-6 md:px-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact & Partnership
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-start gap-4 mb-6">
              <MapPin />
              <p>
                No. 6 Njor Abel Close, Chinda Street, Mgbuoba,
                Port Harcourt, Rivers State, Nigeria.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone />
              <div>
                <p>Dr. Augustine Obinnah – 0213112516</p>
                <p>Rev. Sylva Okere – 08036510709</p>
                <p>Dr. Okere Sylva Enyinnah – 07040402576</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-full hover:scale-105 transition"
            >
              <Facebook /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-pink-600 px-6 py-3 rounded-full hover:scale-105 transition"
            >
              <Instagram /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-green-600 px-6 py-3 rounded-full hover:scale-105 transition"
            >
              <MessageCircle /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#donate"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Donate
          </a>
        </div>
      </section>
    
      <Footer />
    </main>
  );
}