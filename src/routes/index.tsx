import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Instagram,
  Youtube,
  Github,
  Facebook,
  MessageCircle,
  Mail,
  Ghost,
  ArrowUpRight,
  Zap,
  Moon,
  Sparkles,
  Globe,
} from "lucide-react";
import heroVideo from "@/assets/hero.mov.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
      meta: [
      { title: "Abhyanshu Raj — Spider Links" },
      { name: "description", content: "Developer. Designer. Creator. All my links in one place." },
      { property: "og:title", content: "Abhyanshu Raj — Spider Links" },
      { property: "og:description", content: "Developer. Designer. Creator. All my links in one place." },
    ],
  }),
  component: Index,
});

const links = [
  { label: "Instagram", handle: "@abhyanshuraj_", icon: Instagram, href: "https://www.instagram.com/abhyanshuraj_/" },
  { label: "Instagram", handle: "@console4o4", icon: Instagram, href: "https://www.instagram.com/console4o4/" },
  { label: "YouTube", handle: "@Console.404", icon: Youtube, href: "https://www.youtube.com/@Console.404" },
  { label: "GitHub", handle: "Follow", icon: Github, href: "https://github.com/" },
  { label: "Vercel", handle: "Projects", icon: Globe, href: "https://vercel.com/abhyanshu2-3013s-projects" },
  { label: "Facebook", handle: "Like page", icon: Facebook, href: "https://www.facebook.com/share/18JU6QHt2a/?mibextid=wwXIfr" },
  { label: "WhatsApp", handle: "6206358342", icon: MessageCircle, href: "https://wa.me/916206358342" },
  { label: "Snapchat", handle: "Add me", icon: Ghost, href: "https://snapchat.com/t/8yTlD8vo" },
];

const COMIC = "'Bangers', 'Bowlby One', system-ui, sans-serif";
const TITLE = "'Anton', 'Arial Black', sans-serif";

type Theme = "spider" | "midnight";

function Index() {
  const [theme, setTheme] = useState<Theme>("spider");
  const isSpider = theme === "spider";

  // Theme tokens
  const t = isSpider
    ? {
        accent: "#e10600",
        accentSoft: "#b3001b",
        chip: "#fff7d6",
        panelBg: "bg-white",
        panelText: "text-black",
        border: "border-black",
        shadow: "shadow-[5px_5px_0_0_#000]",
        shadowLg: "shadow-[8px_8px_0_0_#000]",
        bg: "radial-gradient(900px 500px at 20% -10%, #b3001b 0%, transparent 60%), radial-gradient(700px 500px at 100% 10%, #2a0007 0%, transparent 55%), #0a0a0a",
      }
    : {
        accent: "#7c5cff",
        accentSoft: "#3a2a8f",
        chip: "#0f172a",
        panelBg: "bg-slate-900",
        panelText: "text-slate-100",
        border: "border-slate-700",
        shadow: "shadow-[5px_5px_0_0_rgba(124,92,255,0.35)]",
        shadowLg: "shadow-[8px_8px_0_0_rgba(124,92,255,0.35)]",
        bg: "radial-gradient(900px 500px at 20% -10%, #3a2a8f 0%, transparent 60%), radial-gradient(700px 500px at 100% 10%, #0b1026 0%, transparent 55%), #05070f",
      };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{ background: t.bg }}
    >
      {/* Spider web SVG corners — only in spider theme, hidden on small screens */}
      {isSpider && (
        <>
          <SpiderWeb className="pointer-events-none absolute -top-10 -left-10 hidden h-56 w-56 text-white/15 sm:block md:h-72 md:w-72" />
          <SpiderWeb className="pointer-events-none absolute -top-4 -right-12 hidden h-48 w-48 -scale-x-100 text-white/10 sm:block md:h-64 md:w-64" />
          <SpiderWeb className="pointer-events-none absolute -bottom-16 -right-10 hidden h-64 w-64 rotate-180 text-white/10 sm:block md:h-80 md:w-80" />
        </>
      )}

      {/* Halftone dot overlay — lighter & smaller on mobile */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay sm:opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] sm:opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-lg px-4 pt-5 pb-14 sm:px-5 sm:pt-6 sm:pb-16">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 border-black px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white shadow-[3px_3px_0_0_#000] sm:px-3 sm:text-[11px] sm:tracking-[0.3em]"
            style={{ fontFamily: COMIC, background: t.accent }}
          >
            <Zap className="h-3.5 w-3.5 fill-white" />
            {isSpider ? "Spider-Verse" : "Midnight"}
          </span>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isSpider ? "midnight" : "spider")}
            aria-label="Toggle theme"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-black bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black shadow-[3px_3px_0_0_#000] transition-transform hover:-translate-y-0.5 sm:px-3 sm:text-[11px] sm:tracking-[0.2em]"
            style={{ fontFamily: COMIC }}
          >
            {isSpider ? <Moon className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
            {isSpider ? "Midnight" : "Spider"}
          </button>
        </div>

        {/* Hero card — comic panel */}
        <div className="relative mt-5">
          <div
            className="absolute -top-3 right-3 z-20 rotate-[6deg] rounded-xl border-[3px] border-black bg-white px-2.5 py-1 text-sm text-black shadow-[4px_4px_0_0_#000] sm:px-3"
            style={{ fontFamily: COMIC, letterSpacing: "0.05em" }}
          >
            {isSpider ? "THWIP!" : "POW!"}
          </div>

          <div className={`relative overflow-hidden rounded-2xl border-[3px] border-black bg-black ${t.shadowLg}`}>
            <video
             src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/5] w-full object-cover"
            />
            {/* Web overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen sm:opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, ${t.accent}80 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, ${t.accent}80 0 1px, transparent 1px 14px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Title block */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div
                className="inline-block rotate-[-2deg] rounded-md border-[3px] border-black px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-white shadow-[3px_3px_0_0_#000] sm:px-3 sm:tracking-[0.4em]"
                style={{ background: t.accent }}
              >
                Full Stack Developer
              </div>
              <h1
                className="mt-3 leading-[0.85] text-white"
                style={{
                  fontFamily: TITLE,
                  fontSize: "clamp(2.2rem, 11vw, 4.5rem)",
                  letterSpacing: "0.01em",
                  WebkitTextStroke: "2px #000",
                  textShadow: `4px 4px 0 #000, 7px 7px 0 ${t.accent}`,
                }}
              >
                ABHYANSHU RAJ
              </h1>
            </div>
          </div>

          {/* Mobile-only spider web — shown below hero image */}
          {isSpider && (
            <div className="pointer-events-none relative mt-2 flex justify-center sm:hidden">
              <SpiderWeb className="h-40 w-40 text-white/20" />
            </div>
          )}
        </div>

        {/* Tagline panel */}
        <div
          className={`mt-5 rotate-[-0.6deg] rounded-xl border-[3px] border-black px-3 py-3 text-center shadow-[5px_5px_0_0_#000] sm:px-4 ${
            isSpider ? "bg-[#fff7d6] text-black" : "bg-slate-900 text-slate-100"
          }`}
        >
          <p
            style={{ fontFamily: COMIC, letterSpacing: "0.05em" }}
            className="text-sm sm:text-base"
          >
            💻 DEVELOPER. DESIGNER. CREATOR. 🚀 CODER. CREATOR. LEARNER. 💻 WEB DEVELOPER | UI DESIGNER | TECH
          </p>
        </div>

        {/* Journey panel */}
        <div
          className={`mt-5 rounded-xl border-[3px] border-black px-3 py-3 text-center shadow-[5px_5px_0_0_#000] sm:px-4 sm:py-4 ${
            isSpider ? "bg-[#fff7d6] text-black" : "bg-slate-900 text-slate-100"
          }`}
        >
          <p
            style={{ fontFamily: COMIC, letterSpacing: "0.05em", lineHeight: "1.6" }}
            className="text-xs sm:text-sm"
          >
            🚀 CODING MY WAY TO SUCCESS<br />
            100 Days of Frontend Development Journey<br />
            📈 1 M+ views on Instagram<br />
            🎥 200+ Coding Videos & Projects Shared<br />
            Turning Passion into Skills, One Day at a Time 💻
          </p>
        </div>

        {/* Section header */}
        <div className="mt-7 flex items-center gap-2 sm:gap-3">
          <div className="h-[3px] flex-1 bg-black/70" />
          <span
            className="rotate-[-2deg] rounded-md border-[3px] border-black px-2.5 py-1 text-xs uppercase text-white shadow-[3px_3px_0_0_#000] sm:px-3 sm:text-sm"
            style={{ fontFamily: COMIC, letterSpacing: "0.12em", background: t.accent }}
          >
            Catch Me Here
          </span>
          <div className="h-[3px] flex-1 bg-black/70" />
        </div>

        {/* Links */}
        <div className="mt-5 space-y-3">
          {links.map((l, i) => (
          <a
              key={`${l.label}-${l.handle}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 rounded-xl border-[3px] border-black p-3 pr-3.5 transition-all hover:-translate-y-0.5 hover:translate-x-[-2px] hover:shadow-[8px_8px_0_0_#000] sm:gap-4 sm:pr-4 ${
                isSpider ? "bg-white text-black" : "bg-slate-900 text-slate-100"
              } shadow-[5px_5px_0_0_#000]`}
              style={{ transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})` }}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-[3px] border-black text-white shadow-[3px_3px_0_0_#000] sm:h-12 sm:w-12"
                style={{ background: t.accent }}
              >
                <l.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block truncate text-base leading-none sm:text-lg"
                  style={{ fontFamily: TITLE, letterSpacing: "0.02em" }}
                >
                  {l.label.toUpperCase()}
                </span>
                <span className="mt-1 block truncate text-[11px] uppercase tracking-[0.18em] opacity-60 sm:text-xs sm:tracking-[0.2em]">
                  {l.handle}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        {/* Business enquiries */}
        <a
          href="mailto:abhyanshu2@gmail.com"
          className="mt-7 block rotate-[-0.8deg] overflow-hidden rounded-xl border-[3px] border-black bg-black text-white transition-transform hover:rotate-0"
          style={{ boxShadow: `6px 6px 0 0 ${t.accent}` }}
        >
          <div className="flex items-center justify-between gap-2 border-b-[3px] border-black bg-white px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-black sm:tracking-[0.3em]">
            <span className="truncate" style={{ fontFamily: COMIC, letterSpacing: "0.18em" }}>
              {isSpider ? "The Daily Bugle" : "Night Dispatch"}
            </span>
            <span className="shrink-0">Extra!</span>
          </div>
          <div className="flex items-center gap-3 p-3.5 sm:gap-4 sm:p-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-[3px] border-white sm:h-12 sm:w-12"
              style={{ background: t.accent }}
            >
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span
                className="block truncate text-lg leading-none sm:text-xl"
                style={{ fontFamily: TITLE, letterSpacing: "0.03em" }}
              >
                BUSINESS ENQUIRIES
              </span>
              <span className="mt-1 block truncate text-[11px] uppercase tracking-[0.18em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
                abhyanshu2@gmail.com
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </div>
        </a>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-2 px-2 text-center">
          <div
            className="rounded-md border-[3px] border-black px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white shadow-[3px_3px_0_0_#000] sm:tracking-[0.3em]"
            style={{ fontFamily: COMIC, background: t.accent }}
          >
            With great content comes great responsibility
          </div>
          <span className="text-xs text-white/45">© {new Date().getFullYear()} Abhyanshu Raj</span>
        </div>
      </div>
    </div>
  );
}

function SpiderWeb({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return <line key={i} x1="0" y1="0" x2={Math.cos(a) * 220} y2={Math.sin(a) * 220} />;
      })}
      {[30, 60, 95, 135, 180].map((r) => (
        <path
          key={r}
          d={Array.from({ length: 13 })
            .map((_, i) => {
              const a = (i * Math.PI) / 6;
              const x = Math.cos(a) * r;
              const y = Math.sin(a) * r;
              return `${i === 0 ? "M" : "L"} ${x} ${y}`;
            })
            .join(" ")}
        />
      ))}
    </svg>
  );
}
