import { useEffect, useState } from "react";

/* ============ EDIT YOUR CONTENT HERE ============ */
const DATA = {
  name: "Aarav Sharma",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible web apps that people enjoy using.",
  about: [
    "I'm a developer with 4+ years of experience building products with React, Node.js and cloud services. I care about clean code, clear interfaces and shipping things that work.",
    "Outside of work I contribute to open source, write about web performance and mentor junior developers.",
  ],
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Resume", href: "#" },
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Company One",
      period: "2023 – Present",
      points: [
        "Led a redesign of the checkout flow, lifting conversion by 18%.",
        "Cut bundle size by 40% with code-splitting and lazy loading.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Company Two",
      period: "2021 – 2023",
      points: [
        "Built a dashboard used by 20,000+ users daily with React and TypeScript.",
        "Introduced automated testing, raising coverage from 20% to 80%.",
      ],
    },
    {
      role: "Junior Developer",
      company: "Company Three",
      period: "2020 – 2021",
      points: ["Shipped customer-facing features and fixed 100+ bugs in the first year."],
    },
  ],
  projects: [
    {
      title: "TaskFlow",
      desc: "A team task manager with real-time updates and drag-and-drop boards.",
      tech: ["React", "Node.js", "MongoDB"],
      live: "#",
      code: "#",
    },
    {
      title: "ShopLane",
      desc: "An e-commerce storefront with search, cart and secure payments.",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      live: "#",
      code: "#",
    },
    {
      title: "WeatherNow",
      desc: "A clean weather app with 7-day forecasts and saved locations.",
      tech: ["React", "REST API", "CSS"],
      live: "#",
      code: "#",
    },
    {
      title: "DevNotes",
      desc: "A markdown note-taking app that works offline.",
      tech: ["React", "IndexedDB", "PWA"],
      live: "#",
      code: "#",
    },
  ],
  skills: {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind", "HTML & CSS"],
    Backend: ["Node.js", "Express", "REST", "GraphQL"],
    "Data & tools": ["MongoDB", "PostgreSQL", "Git", "Docker", "Jest"],
  },
};
/* ================================================= */

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];

export default function Portfolio() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pf">
      <style>{css}</style>

      <aside className="side">
        <div>
          <h1>{DATA.name}</h1>
          <p className="role">{DATA.role}</p>
          <p className="tag">{DATA.tagline}</p>
          <nav aria-label="Sections">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className={active === s ? "on" : ""}
                aria-current={active === s ? "true" : undefined}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </a>
            ))}
          </nav>
        </div>
        <div className="social">
          {DATA.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      <main>
        <section id="about">
          <h2>About</h2>
          {DATA.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {DATA.experience.map((x) => (
            <article className="job" key={x.role + x.company}>
              <div className="period">{x.period}</div>
              <div>
                <h3>
                  {x.role}, {x.company}
                </h3>
                <ul>
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {DATA.projects.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="actions">
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer">
                    Source code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          {Object.entries(DATA.skills).map(([group, items]) => (
            <div className="skillrow" key={group}>
              <h3>{group}</h3>
              <div className="chips">
                {items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Have a project or a role in mind? I'd like to hear about it.</p>
          <a className="btn" href={`mailto:${DATA.email}`}>
            Email {DATA.email}
          </a>
        </section>

        <footer>© {new Date().getFullYear()} {DATA.name}</footer>
      </main>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Sans:wght@400;500&display=swap');

.pf{
  --bg:#EDF0F5; --panel:#FFFFFF; --ink:#16213A; --muted:#55607A;
  --line:#D5DBE6; --accent:#2B45E8; --accent-soft:#E2E7FD;
  font-family:'IBM Plex Sans',system-ui,sans-serif;
  color:var(--ink); background:var(--bg); min-height:100vh;
  display:grid; grid-template-columns:340px 1fr; line-height:1.65;
}
.pf *{box-sizing:border-box}
.pf h1,.pf h2,.pf h3{font-family:'Bricolage Grotesque',sans-serif;margin:0;line-height:1.15}
.pf a{color:inherit}
.pf a:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}

.side{
  position:sticky;top:0;height:100vh;padding:56px 40px;
  display:flex;flex-direction:column;justify-content:space-between;
  background:var(--ink);color:#F2F4FA;
}
.side h1{font-size:2.4rem;font-weight:700;letter-spacing:-.02em}
.role{margin:10px 0 0;color:#AEB9F7;font-weight:500}
.tag{margin:18px 0 40px;color:#B9C0D4;max-width:26ch}
.side nav{display:flex;flex-direction:column;gap:4px}
.side nav a{
  text-decoration:none;padding:8px 14px;margin-left:-14px;border-radius:8px;
  color:#B9C0D4;transition:background .2s,color .2s;width:max-content;
}
.side nav a:hover{color:#fff}
.side nav a.on{background:var(--accent);color:#fff}
.social{display:flex;gap:18px;flex-wrap:wrap}
.social a{color:#B9C0D4;text-decoration:underline;text-underline-offset:4px}
.social a:hover{color:#fff}

main{padding:72px 64px 40px;max-width:860px}
section{padding-bottom:72px;scroll-margin-top:40px}
section h2{font-size:1.9rem;margin-bottom:24px;letter-spacing:-.01em}
section p{max-width:62ch;margin:0 0 14px;color:var(--muted)}

.job{display:grid;grid-template-columns:140px 1fr;gap:20px;padding:22px 0;border-top:1px solid var(--line)}
.period{color:var(--muted);font-size:.92rem;padding-top:3px}
.job h3{font-size:1.2rem;margin-bottom:8px}
.job ul{margin:0;padding-left:18px;color:var(--muted)}
.job li{margin-bottom:4px}

.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:24px;display:flex;flex-direction:column}
.card h3{font-size:1.25rem;margin-bottom:8px}
.card p{flex:1}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips span{background:var(--accent-soft);color:var(--accent);font-size:.82rem;font-weight:500;padding:4px 11px;border-radius:999px}
.actions{display:flex;gap:18px;margin-top:18px;font-weight:500}
.actions a{color:var(--accent);text-underline-offset:4px}

.skillrow{display:grid;grid-template-columns:140px 1fr;gap:20px;padding:18px 0;border-top:1px solid var(--line);align-items:start}
.skillrow h3{font-size:1rem;color:var(--muted);font-weight:500;padding-top:4px}

.btn{display:inline-block;background:var(--accent);color:#fff!important;text-decoration:none;
  padding:13px 24px;border-radius:10px;font-weight:500;margin-top:8px;transition:background .2s}
.btn:hover{background:#1F34C2}
footer{color:var(--muted);font-size:.88rem;padding-top:24px;border-top:1px solid var(--line)}

@media (max-width:900px){
  .pf{grid-template-columns:1fr}
  .side{position:static;height:auto;padding:36px 24px;gap:28px}
  .side nav{flex-direction:row;flex-wrap:wrap;gap:6px}
  .side nav a{margin-left:0}
  .tag{margin-bottom:24px;max-width:none}
  main{padding:40px 24px 24px}
  .grid{grid-template-columns:1fr}
  .job,.skillrow{grid-template-columns:1fr;gap:6px}
}
@media (prefers-reduced-motion:reduce){.pf *{transition:none!important}}
`;
