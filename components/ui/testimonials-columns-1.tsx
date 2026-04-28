"use client";
import React from "react";
import { motion } from "motion/react";

export const testimonials = [
  {
    text: "Moximize completely transformed how we approach outbound. Within 60 days we had a fully running cold email system booking 8–12 qualified meetings per month.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael D.",
    role: "Head of Sales, SaaS Platform",
  },
  {
    text: "Jerson and the team built our entire HubSpot instance from scratch. Pipelines, automations, reporting — everything is clean and actually useful now.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria L.",
    role: "CEO, Professional Services Firm",
  },
  {
    text: "The inbound strategy they developed brought us a 3x increase in organic leads over 4 months. The content is genuinely strategic, not just filler.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Kevin P.",
    role: "Founder, Tech Consultancy",
  },
  {
    text: "We had tried two other agencies before Moximize. Nobody else understood our ICP the way they did. Our pipeline has never been this healthy.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya S.",
    role: "VP Marketing, B2B SaaS",
  },
  {
    text: "The HubSpot setup was flawless. They didn't just configure it — they taught our team how to actually use it. Adoption went from 20% to 95%.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "David M.",
    role: "CTO, Manufacturing Co.",
  },
  {
    text: "Our LinkedIn outreach went from zero to 15 booked demos per month in 6 weeks. The targeting and copywriting were both exceptional.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sophie R.",
    role: "Head of Growth, FinTech",
  },
  {
    text: "Best investment we've made in marketing this year. Moximize built us a repeatable system — not just a one-time campaign.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "James T.",
    role: "COO, Real Estate Group",
  },
  {
    text: "They took our messy HubSpot portal and turned it into a proper revenue machine. The automations alone save us 10+ hours per week.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Aisha K.",
    role: "Operations Director, Agency",
  },
  {
    text: "From day one, the team was proactive, transparent, and focused on results. I've never had an agency partner like this before.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Carlos E.",
    role: "CEO, Healthcare Startup",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[#242628] bg-[#17181c] shadow-lg shadow-[#29ABE2]/5 max-w-xs w-full"
              >
                <div className="text-[14px] leading-[1.7] text-[#d9d9d9] italic">&ldquo;{text}&rdquo;</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-white leading-5">{name}</div>
                    <div className="text-[12px] leading-5 text-[#72767a]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
