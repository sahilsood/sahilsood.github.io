import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import { site } from "../data/site";
import { profile } from "../data/profile";

const apps = [
  { key: "home", label: "Home", Icon: Home },
  { key: "contact", label: "Contact", Icon: Mail },
];

/**
 * Foldable "Galaxy Z Fold" device mockup.
 * Scroll drives a 3D fold (down = close, up = open); once folded past 90° the
 * inner screen is swapped for the metallic back cover.
 */
export default function InteractiveDashboard() {
  const [activeApp, setActiveApp] = useState("home");
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    // Respect users who prefer reduced motion — leave the device open.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    // Map scroll position (0 → 520px) to a 0..1 fold progress.
    const update = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / 520));
      scene.style.setProperty("--fold", p.toFixed(3));
      scene.classList.toggle("is-flipped", p >= 0.5);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-6">
      <div ref={sceneRef} className="fold-scene">
        <div className="fold-glow" />
        <div className="fold-device">
          <div className="fold-half fold-half--left">
            <div className="fold-chassis fold-chassis--left">
              <div className="fold-screen fold-screen--left">
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                    <img
                      src={profile.avatar}
                      alt={site.name}
                      className="h-32 w-32 rounded-2xl border border-[#2a3441] object-cover"
                    />
                    <p className="text-xs uppercase tracking-[0.28em] text-red-400">{profile.handle}</p>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-100">{profile.greeting}</h2>
                    <p className="text-sm text-slate-400">{profile.role}</p>
                    <p className="max-w-xs text-xs leading-5 text-slate-500">
                      {profile.tagline}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveApp("contact")}
                      className="rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300 transition hover:bg-red-500/25"
                    >
                      Contact
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {profile.status.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#222a35] bg-[#11161d] p-3">
                        <p className="text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                        <p className="mt-1 text-[0.7rem] leading-4 text-slate-200">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fold-hinge" aria-hidden="true" />

          <div className="fold-half fold-half--right">
            <div className="fold-chassis fold-chassis--right">
              <div className="fold-screen fold-screen--right">
                <div className="relative z-10 flex h-full flex-col p-3">
                  <div className="min-h-0 flex-1 overflow-hidden rounded-[1.3rem] border border-[#222a35] bg-[#0d1117] p-4 text-slate-100">
                    <AnimatePresence mode="wait">
                      {activeApp === "home" && (
                        <motion.div
                          key="home"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="h-full overflow-y-auto pr-1"
                        >
                          <div className="space-y-4 text-sm leading-6 text-slate-300">
                            {profile.bio.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeApp === "contact" && (
                        <motion.div
                          key="contact"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="h-full overflow-y-auto pr-1"
                        >
                          <h3 className="text-xl font-semibold tracking-tight text-slate-100">Contact</h3>
                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <a
                              href={site.links.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="social-tile"
                              style={{ "--accent": "#4aa8ff", "--glow": "rgba(59,157,255,0.55)" }}
                            >
                              <span className="social-tile__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                                </svg>
                              </span>
                              <span className="social-tile__label">LinkedIn</span>
                            </a>
                            <a
                              href={site.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="social-tile"
                              style={{ "--accent": "#e6edf3", "--glow": "rgba(255,255,255,0.32)" }}
                            >
                              <span className="social-tile__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                                </svg>
                              </span>
                              <span className="social-tile__label">GitHub</span>
                            </a>
                            <a
                              href={site.links.x}
                              target="_blank"
                              rel="noreferrer"
                              className="social-tile"
                              style={{ "--accent": "#e6edf3", "--glow": "rgba(255,255,255,0.32)" }}
                            >
                              <span className="social-tile__icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                              </span>
                              <span className="social-tile__label">X</span>
                            </a>
                            <a
                              href={site.resumeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="social-tile"
                              style={{ "--accent": "#ff5c5c", "--glow": "rgba(255,60,60,0.55)" }}
                            >
                              <span className="social-tile__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                  <path d="M14 2v6h6"/>
                                  <path d="M12 18v-6"/>
                                  <path d="m9 15 3 3 3-3"/>
                                </svg>
                              </span>
                              <span className="social-tile__label">Resume</span>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="mt-3 rounded-[1.2rem] border border-[#222a35] bg-[#11161d] px-2 py-2">
                    <div className="grid grid-cols-2 gap-2">
                      {apps.map((app) => (
                        <button
                          key={app.key}
                          type="button"
                          onClick={() => setActiveApp(app.key)}
                          className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-[0.65rem] font-medium transition ${
                            activeApp === app.key ? "bg-red-500/15 text-red-300" : "text-slate-400 hover:bg-[#161c26]"
                          }`}
                        >
                          <app.Icon size={18} strokeWidth={2.2} />
                          <span className="mt-1">{app.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fold-cover" aria-hidden="true">
              <div className="fold-cover__camera">
                <span className="fold-lens" />
                <span className="fold-lens" />
                <span className="fold-lens" />
              </div>
              <span className="fold-cover__wordmark">Samsung Galaxy Z Fold8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}