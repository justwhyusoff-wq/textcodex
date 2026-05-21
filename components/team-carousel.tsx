"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";

import { team, type TeamMember } from "../data/team";

const AUTO_SLIDE_MS = 6000;

function stepIndex(index: number, step: number) {
  return (index + step + team.length) % team.length;
}

function auraStyle(member: TeamMember) {
  return {
    "--aura": member.auraHex,
    "--aura-rgb": member.auraRgb,
  } as CSSProperties;
}

function Arrow({
  label,
  onClick,
  side,
}: {
  label: string;
  onClick: () => void;
  side: "left" | "right";
}) {
  return (
    <button
      aria-label={label}
      className={`carousel-arrow ${side === "left" ? "left-0" : "right-0"}`}
      onClick={onClick}
      type="button"
    >
      <span>{side === "left" ? "<" : ">"}</span>
    </button>
  );
}

function Preview({
  member,
  side,
  onClick,
}: {
  member: TeamMember;
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <motion.button
      aria-label={`Focus ${member.name}`}
      className={`preview-card ${side === "left" ? "preview-left" : "preview-right"}`}
      onClick={onClick}
      style={auraStyle(member)}
      type="button"
      whileHover={{ y: -10, scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="preview-glow" />
      <span className="relative block h-56 w-full sm:h-72">
        <Image
          alt={`${member.name} faceless aura silhouette`}
          className="object-contain"
          fill
          quality={66}
          sizes="(max-width: 640px) 28vw, 220px"
          src={member.image}
        />
      </span>
      <span className="relative z-10 mt-auto block pb-5 text-center">
        <span className="block text-[0.62rem] uppercase tracking-[0.42em] text-white/34">
          Next aura
        </span>
        <span className="mt-2 block font-semibold tracking-[0.18em] text-white">
          {member.name}
        </span>
      </span>
    </motion.button>
  );
}

export function TeamCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const member = team[index];
  const previous = team[stepIndex(index, -1)];
  const next = team[stepIndex(index, 1)];

  useEffect(() => {
    if (paused || reduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => stepIndex(current, 1));
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  return (
    <section
      aria-label="JUSTWHYTEAM team carousel"
      className="relative"
      id="team"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-halo" style={auraStyle(member)} />
      <div className="relative min-h-[760px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-3 py-6 shadow-aura-panel backdrop-blur-md sm:px-8 lg:min-h-[820px]">
        <div className="carousel-scan" />
        <div className="aura-ring aura-ring-one" style={auraStyle(member)} />
        <div className="aura-ring aura-ring-two" style={auraStyle(member)} />
        <div className="mb-5 flex items-center justify-between gap-4 px-2">
          <p className="signal-label">Active entity / 0{index + 1}</p>
          <div className="hidden items-center gap-2 sm:flex">
            {team.map((item, dotIndex) => (
              <button
                aria-label={`Show ${item.name}`}
                className={`carousel-dot ${dotIndex === index ? "is-active" : ""}`}
                key={item.name}
                onClick={() => setIndex(dotIndex)}
                style={auraStyle(item)}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[678px] items-center justify-center">
          <Arrow
            label="Show previous team member"
            onClick={() => setIndex((current) => stepIndex(current, -1))}
            side="left"
          />
          <Preview
            member={previous}
            onClick={() => setIndex((current) => stepIndex(current, -1))}
            side="left"
          />
          <Preview
            member={next}
            onClick={() => setIndex((current) => stepIndex(current, 1))}
            side="right"
          />
          <Arrow
            label="Show next team member"
            onClick={() => setIndex((current) => stepIndex(current, 1))}
            side="right"
          />

          <div className="relative z-20 w-full max-w-[30rem] px-8 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.article
                className="active-member"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                key={member.name}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70 || info.velocity.x < -450) {
                    setIndex((current) => stepIndex(current, 1));
                  }

                  if (info.offset.x > 70 || info.velocity.x > 450) {
                    setIndex((current) => stepIndex(current, -1));
                  }
                }}
                style={auraStyle(member)}
                initial={{ opacity: 0, rotateY: -24, scale: 0.86, x: 54 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
                exit={{ opacity: 0, rotateY: 24, scale: 0.88, x: -54 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <span className="active-spotlight" />
                <motion.div
                  className="relative z-10 h-[25rem] sm:h-[31rem]"
                  animate={reduceMotion ? undefined : { y: [0, -16, 0], rotate: [0, 0.8, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    alt={`${member.name} faceless aura silhouette`}
                    className="silhouette-image object-contain"
                    fill
                    priority={index === 0}
                    quality={78}
                    sizes="(max-width: 1024px) 82vw, 460px"
                    src={member.image}
                  />
                </motion.div>
                <div className="relative z-20 -mt-10 rounded-[1.6rem] border border-white/10 bg-black/70 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.42em]" style={{ color: member.auraHex }}>
                        {member.auraTitle}
                      </p>
                      <h2 className="display-title mt-3 text-3xl text-white sm:text-4xl">
                        {member.name}
                      </h2>
                    </div>
                    <span className="aura-chip">{member.auraName}</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                    {member.role}
                  </p>
                  <p className="mt-4 leading-7 text-white/62">{member.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
