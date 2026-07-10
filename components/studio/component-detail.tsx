"use client";

import { Check, Clipboard, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import type { ComponentEntry } from "@/lib/component-registry";

const widths = { desktop: "100%", tablet: "760px", mobile: "390px" } as const;

export function ComponentDetail({ entry }: { entry: ComponentEntry }) {
  const [viewport, setViewport] = useState<keyof typeof widths>("desktop");
  const [copied, setCopied] = useState(false);
  async function copyCode() {
    await navigator.clipboard.writeText(entry.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return <div className="detail-layout">
    <section className="detail-hero"><span>{entry.category}</span><h1>{entry.title}</h1><p>{entry.description}</p><div className="detail-badges"><b>{entry.status}</b><b>Dark mode</b><b>Responsive</b></div></section>
    <section className="detail-panel">
      <div className="detail-panel__toolbar"><strong>Live preview</strong><div className="viewport-controls"><button className={viewport === "desktop" ? "is-active" : ""} onClick={() => setViewport("desktop")} aria-label="Desktop preview"><Monitor size={16}/></button><button className={viewport === "tablet" ? "is-active" : ""} onClick={() => setViewport("tablet")} aria-label="Tablet preview"><Tablet size={16}/></button><button className={viewport === "mobile" ? "is-active" : ""} onClick={() => setViewport("mobile")} aria-label="Mobile preview"><Smartphone size={16}/></button></div></div>
      <div className="responsive-stage"><div className="responsive-frame" style={{maxWidth: widths[viewport]}}>{entry.preview}</div></div>
    </section>
    <section className="code-panel"><div><strong>Usage</strong><button onClick={copyCode}>{copied ? <Check size={15}/> : <Clipboard size={15}/>} {copied ? "Copied" : "Copy code"}</button></div><pre><code>{entry.code}</code></pre></section>
    <section className="detail-notes"><div><strong>Accessibility</strong><p>Keyboard focus, semantic markup and readable contrast are included in the baseline implementation.</p></div><div><strong>Production use</strong><p>Import the component directly from the local UI folder and adapt its public props rather than duplicating its CSS.</p></div></section>
  </div>;
}
