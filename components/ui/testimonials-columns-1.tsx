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
  {
    text: "We closed 3 enterprise deals in the first quarter after Moximize rebuilt our outbound. The ROI was immediate and obvious.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Thomas B.",
    role: "VP Sales, Enterprise SaaS",
  },
  {
    text: "Finally an agency that speaks RevOps. They connected HubSpot to our billing system and now our forecasting is actually accurate.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Lauren W.",
    role: "Revenue Operations Manager",
  },
  {
    text: "Cold email was dead for us — or so we thought. Moximize brought it back to life with AI personalisation at a scale we couldn't do in-house.",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    name: "Andre M.",
    role: "Founder, B2B Logistics Tech",
  },
  {
    text: "Within 45 days we had a pipeline dashboard I could actually show the board. No more guessing where deals were coming from.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Nina H.",
    role: "CMO, Growth-Stage Startup",
  },
  {
    text: "The team genuinely cares about your numbers, not just deliverables. Every week we knew exactly what was working and why.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    name: "Patrick O.",
    role: "Head of Marketing, SaaS",
  },
  {
    text: "Switched from a bloated in-house stack to Moximize and cut costs by 60% while doubling our meeting volume. No brainer.",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    name: "Yuki T.",
    role: "COO, Professional Services",
  },
  {
    text: "They set up sequences in Clay + Instantly that our team had been trying to build for months. Done in two weeks, running in four.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Ethan G.",
    role: "Director of Demand Gen",
  },
  {
    text: "Our HubSpot was a graveyard of duplicate contacts and broken workflows. Moximize cleaned it up and made it a system we trust.",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    name: "Rachel P.",
    role: "VP Operations, Consulting Firm",
  },
  {
    text: "The strategy calls aren't just updates — they're actual working sessions. We leave every call with a clear action list and measurable targets.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "Marcos F.",
    role: "CEO, Manufacturing SMB",
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
