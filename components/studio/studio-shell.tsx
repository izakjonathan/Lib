"use client";

import { Box, Component, Frame, Home, Menu, Palette, Search, Shapes, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#overview", label: "Overview", icon: Home },
  { href: "/#foundation", label: "Foundation", icon: Palette },
  { href: "/#library", label: "All components", icon: Component },
  { href: "/#library", label: "Cards", icon: Box },
  { href: "/#library", label: "Forms", icon: Shapes },
  { href: "/#library", label: "Navigation", icon: Frame },
];

export function StudioShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="studio-shell">
      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <div className="brand"><span>SU</span><div><strong>Studio UI</strong><small>v0.5.0</small></div><button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={20}/></button></div>
        <nav>{links.map(({href,label,icon:Icon}) => <a href={href} key={href} onClick={() => setOpen(false)}><Icon size={18}/>{label}</a>)}</nav>
        <div className="sidebar-note"><strong>Reusable by design</strong><span>Build client products from documented, proven blocks.</span></div>
      </aside>
      {open && <button className="scrim" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />}
      <div className="studio-main">
        <header className="topbar"><button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20}/></button><div className="search-box"><Search size={17}/><input aria-label="Search components" placeholder="Search components…" /></div><ThemeToggle /></header>
        <main>{children}</main>
      </div>
    </div>
  );
}
