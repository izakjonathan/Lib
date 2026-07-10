import { Check, CheckCircle2, Clipboard, FileCode2, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import type { ComponentEntry } from "@/lib/component-registry";

const widths = { desktop: "100%", tablet: "760px", mobile: "390px" } as const;
const defaultAccessibility = ["Semantic markup", "Visible keyboard focus", "Readable colour contrast"];

export function ComponentDetail({ entry }: { entry: ComponentEntry }) {
  const [viewport, setViewport] = useState<keyof typeof widths>("desktop");
  const [copied, setCopied] = useState(false);
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(entry.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }
  const accessibility = entry.accessibility ?? defaultAccessibility;
  return <div className="detail-layout">
    <section className="detail-hero"><span>{entry.category}</span><h1>{entry.title}</h1><p>{entry.description}</p><div className="detail-badges"><b>{entry.status}</b><b>Dark mode</b><b>Responsive</b></div></section>
    <section className="detail-panel">
      <div className="detail-panel__toolbar"><strong>Live preview</strong><div className="viewport-controls" aria-label="Preview width"><button className={viewport === "desktop" ? "is-active" : ""} onClick={() => setViewport("desktop")} aria-label="Desktop preview" aria-pressed={viewport === "desktop"}><Monitor size={16}/></button><button className={viewport === "tablet" ? "is-active" : ""} onClick={() => setViewport("tablet")} aria-label="Tablet preview" aria-pressed={viewport === "tablet"}><Tablet size={16}/></button><button className={viewport === "mobile" ? "is-active" : ""} onClick={() => setViewport("mobile")} aria-label="Mobile preview" aria-pressed={viewport === "mobile"}><Smartphone size={16}/></button></div></div>
      <div className="responsive-stage"><div className="responsive-frame" style={{maxWidth: widths[viewport]}}>{entry.preview}</div></div>
    </section>
    <section className="code-panel"><div><strong>Usage</strong><button onClick={copyCode}>{copied ? <Check size={15}/> : <Clipboard size={15}/>} {copied ? "Copied" : "Copy code"}</button></div><pre><code>{entry.code}</code></pre></section>
    {entry.props?.length ? <section className="api-panel"><header><div><span>Component API</span><h2>Public props</h2></div>{entry.source && <code><FileCode2 size={14}/>{entry.source}</code>}</header><div className="api-table" role="table"><div className="api-row api-row--head" role="row"><span>Prop</span><span>Type</span><span>Default</span><span>Description</span></div>{entry.props.map((prop) => <div className="api-row" role="row" key={prop.name}><code>{prop.name}</code><code>{prop.type}</code><span>{prop.defaultValue ?? "Required"}</span><p>{prop.description}</p></div>)}</div></section> : null}
    <section className="detail-notes"><div><strong>Accessibility checks</strong><ul className="a11y-list">{accessibility.map((item) => <li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul></div><div><strong>Production use</strong><p>Import the component directly from the local UI folder and adapt its public props rather than duplicating its CSS.</p>{entry.source && <code className="source-path">{entry.source}</code>}</div></section>
  </div>;
}
