"use client";

import { motion } from "framer-motion";
import { Users, Heart, Cross, HelpingHand } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      title: "Grassroot Evangelism",
      description:
        "We carry out evangelism to rural communities and villages, spreading faith and hope.",
      icon: <Users size={32} className="text-purple-400" />,
    },
    {
      title: "Free Medical Care",
      description:
        "Providing 100% free medical care to the sick and underserved communities.",
      icon: <Cross size={32} className="text-red-400" />,
    },
    {
      title: "Support for the Needy",
      description:
        "Assisting the less privileged, indigent, orphans, and widows in our society.",
      icon: <HelpingHand size={32} className="text-yellow-400" />,
    },
  ];

  return (
    <section className="py-28 px-6 md:px-16 bg-gray-900 text-white relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
        Our Activities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform"
          >
            <div className="mb-4">{activity.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{activity.title}</h3>
            <p className="text-gray-300 text-sm md:text-base">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}