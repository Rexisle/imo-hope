"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * ==============================
 * CONFIGURATION
 * ==============================
 * If event is rescheduled, set a date.
 * If null → fallback to 3rd Friday logic.
 *
 * Example:
 * new Date(2026, 1, 20, 10, 0, 0)
 */

const rescheduledDate: Date | null = new Date(2026, 1, 28, 10, 0, 0);

/**
 * Get Nth Friday of a month
 */
function getNthFriday(year: number, month: number, n: number) {
  const firstDay = new Date(year, month, 1);
  const firstFridayOffset = (5 - firstDay.getDay() + 7) % 7;
  const date = 1 + firstFridayOffset + (n - 1) * 7;

  return new Date(year, month, date, 10, 0, 0); // 10:00 AM
}

/**
 * Get next outreach date
 */
function getNextOutreachDate(rescheduled: Date | null) {
  const now = new Date();

  // 1️⃣ If manually rescheduled and still upcoming → use it
  if (rescheduled && rescheduled > now) {
    return rescheduled;
  }

  // 2️⃣ Otherwise fallback to 3rd Friday logic
  let year = now.getFullYear();
  let month = now.getMonth();
  let nextDate = getNthFriday(year, month, 3);

  if (now > nextDate) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    nextDate = getNthFriday(year, month, 3);
  }

  return nextDate;
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const nextDate = getNextOutreachDate(rescheduledDate);
    setTargetDate(nextDate);
    setMounted(true);

    const interval = setInterval(() => {
      const diff = nextDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !targetDate) {
    return null; // Prevent hydration mismatch
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const formattedDate = targetDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeBlocks = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
        Next Outreach
      </h2>

      <p className="text-gray-400 mb-10 text-sm md:text-base">
        {formattedDate} • 10:00 AM
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
          >
            <motion.div
              key={block.value}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {block.value.toString().padStart(2, "0")}
            </motion.div>

            <div className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider">
              {block.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}