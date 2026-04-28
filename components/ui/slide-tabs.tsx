"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Position = { left: number; width: number; opacity: number };

interface TabProps {
  children: React.ReactNode;
  setPosition: (pos: Position) => void;
  onClick: () => void;
  href: string;
}

export const SlideTabs = ({
  tabs = ["Services", "Solutions", "Markets", "Team", "Pricing", "Resources"],
}: {
  tabs?: string[];
}) => {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({ left: selectedTab.offsetLeft, width, opacity: 1 });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({ left: selectedTab.offsetLeft, width, opacity: 1 });
        }
      }}
      className="relative flex w-fit rounded-full border border-[#242628] bg-[#17181c] p-1"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          ref={(el) => { tabsRef.current[i] = el; }}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
          href={`#${tab.toLowerCase()}`}
        >
          {tab}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, href }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          const el = (ref as React.RefObject<HTMLLIElement>)?.current;
          if (!el) return;
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }}
        className="relative z-10 block cursor-pointer"
      >
        <a
          href={href}
          className="block px-4 py-1.5 text-[13px] font-medium uppercase tracking-wide text-[#72767a] hover:text-white mix-blend-difference transition-colors"
        >
          {children}
        </a>
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => (
  <motion.li
    animate={{ ...position }}
    className="absolute z-0 h-8 rounded-full bg-[#29ABE2]/20 border border-[#29ABE2]/40"
  />
);
