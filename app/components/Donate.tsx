"use client";

import { motion } from "framer-motion";
import { Copy, Landmark, Phone } from "lucide-react";
import { useState } from "react";

export default function Donate() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="donate"
      className="relative py-28 px-6 md:px-16 bg-blue-950 text-white overflow-hidden"
    >
      {/* Glow Accent */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-600/30 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Support The Mission
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Your partnership helps us provide free medical care,
          evangelism, and support to rural communities.
          Every contribution makes impact.
        </p>

        {/* Bank Details Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-left space-y-6">

          <div className="flex items-center gap-3 text-lg font-semibold">
            <Landmark className="text-blue-400" />
            Bank Transfer Details
          </div>

          <div className="space-y-4 text-gray-300">

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Account Name</p>
                <p className="font-medium">IMO-HOPE FOR THE HOPELESS</p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("IMO-HOPE FOR THE HOPELESS", "name")
                }
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
              >
                <Copy size={16} />
                {copied === "name" ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Account Number</p>
                <p className="font-medium">1228788000</p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("0123456789", "number")
                }
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
              >
                <Copy size={16} />
                {copied === "number" ? "Copied" : "Copy"}
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-400">Bank Name</p>
              <p className="font-medium">Zenith Bank</p>
            </div>

          </div>
        </div>

        {/* Confirmation CTA */}
        <div className="mt-10">
          <a
            href="https://wa.me/2348036510709"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 transition font-semibold"
          >
            <Phone size={18} />
            Confirm Transfer on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}