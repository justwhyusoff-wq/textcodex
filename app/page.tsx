import { AmbientBackground } from "../components/ambient-background";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { TeamCarousel } from "../components/team-carousel";

const services = [
  "Creative Direction",
  "Video Production",
  "Brand Strategy",
  "Social Media Management",
  "Marketing Campaigns",
  "Vibe Coding & Automation",
  "Creator Connections",
];

const projects = [
  "Brand Campaign",
  "Short Film",
  "Social Launch",
  "Product Promo",
  "Visual Identity",
  "Creator Collaboration",
];

const reasons = [
  "One unit from research to release, so strategy and visuals keep the same pulse.",
  "Faceless by design: the work, atmosphere, and impact stay louder than identity.",
  "Cinematic craft meets sales movement, automation, creator relations, and social momentum.",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AmbientBackground />
      <section className="hero-shell mx-auto grid min-h-screen max-w-[94rem] items-center gap-10 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(38rem,1.12fr)] lg:px-10">
        <div className="relative z-10 pt-12 lg:pt-0">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,.9)]" />
              <span className="text-[0.66rem] uppercase tracking-[0.52em] text-white/52">
                Anonymous signal online
              </span>
            </div>
            <h1 className="hero-title mt-7 text-[clamp(3.3rem,10vw,10.8rem)] text-white">
              JUSTWHY
              <span>TEAM</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-white/66 sm:text-xl">
              A faceless creative force turning ideas into visuals, brands, films,
              systems, and digital energy.
            </p>
            <div className="signal-marquee mt-7" aria-label="Research. Strategy. Film. Visuals. Sales. Social. Vibes.">
              <span>Research. Strategy. Film. Visuals. Sales. Social. Vibes.</span>
              <span>Research. Strategy. Film. Visuals. Sales. Social. Vibes.</span>
            </div>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row">
              <a className="primary-action" href="#team">
                Meet The Team
              </a>
              <a className="ghost-action" href="#contact">
                Start A Project
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="relative z-10" delay={0.14}>
          <TeamCarousel />
        </Reveal>
      </section>

      <section className="content-section" id="about">
        <Reveal>
          <SectionHeading
            copy="We operate where mood, message, systems, and momentum collide. Every project starts with a signal, then becomes a cinematic asset people can feel and act on."
            kicker="About JUSTWHYTEAM"
            title="A collective built behind the glow."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="cinema-panel p-6 sm:p-8" delay={0.05}>
            <p className="display-title text-2xl text-white sm:text-4xl">
              Visual pressure. Strategic calm. Digital systems that keep moving
              after the frame cuts.
            </p>
          </Reveal>
          <Reveal className="cinema-panel flex flex-col justify-between gap-8 p-6 sm:p-8" delay={0.12}>
            <span className="signal-label">Operating mode</span>
            <div className="grid grid-cols-3 gap-3 text-center">
              {["Aura", "Vision", "Output"].map((item, index) => (
                <div className="metric-cell" key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" id="services">
        <Reveal>
          <SectionHeading
            copy="Direction, production, campaigns, creator movement, social rhythm, and practical automation shaped as one premium system."
            kicker="Services"
            title="Creative systems with cinematic voltage."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal className="service-card" delay={index * 0.045} key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>Built for launch velocity, sharp atmosphere, and audience memory.</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section" id="portfolio">
        <Reveal>
          <SectionHeading
            copy="A gallery of future cases: campaigns and visual worlds waiting for the right brief, screen, and crowd."
            kicker="Portfolio"
            title="Projected work from the signal room."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal className="project-card" delay={index * 0.055} key={project}>
              <div className="project-frame">
                <span />
                <span />
                <span />
              </div>
              <p>Transmission 0{index + 1}</p>
              <h3>{project}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section" id="why">
        <Reveal>
          <SectionHeading
            copy="The team is cross-functional on purpose. Ideas do not wait for handoffs when the same room can research, shape, produce, sell, and distribute."
            kicker="Why Work With Us"
            title="We keep the concept alive through execution."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal className="reason-card" delay={index * 0.08} key={reason}>
              <span />
              <p>{reason}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section pb-16" id="contact">
        <Reveal className="contact-panel">
          <p className="signal-label">Open channel</p>
          <h2 className="display-title mt-5 text-4xl text-white sm:text-6xl">
            Lets build something people remember.
          </h2>
          <a className="primary-action mt-9" href="mailto:hello@justwhyteam.com">
            Work With JUSTWHYTEAM
          </a>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-[94rem] flex-col gap-3 border-t border-white/10 px-5 py-9 text-sm text-white/42 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-semibold uppercase tracking-[0.42em] text-white/68">
          JUSTWHYTEAM 2025
        </p>
        <p>Built with aura, strategy, and vision.</p>
      </footer>
    </main>
  );
}
