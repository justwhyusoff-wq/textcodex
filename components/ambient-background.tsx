const particles = [
  ["8%", "16%", "5s", "0s"],
  ["18%", "72%", "8s", "-2s"],
  ["31%", "28%", "7s", "-4s"],
  ["44%", "83%", "9s", "-5s"],
  ["58%", "21%", "6s", "-3s"],
  ["66%", "61%", "10s", "-8s"],
  ["76%", "12%", "8s", "-1s"],
  ["89%", "43%", "7s", "-6s"],
  ["93%", "78%", "11s", "-7s"],
  ["53%", "48%", "5.5s", "-2.5s"],
];

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-shell">
      <div className="ambient-orb ambient-orb-crimson" />
      <div className="ambient-orb ambient-orb-blue" />
      <div className="ambient-orb ambient-orb-gold" />
      <div className="grid-veil" />
      <div className="smoke-veil" />
      <div className="grain-veil" />
      {particles.map(([left, top, duration, delay]) => (
        <span
          className="ambient-particle"
          key={`${left}-${top}`}
          style={{
            left,
            top,
            animationDuration: duration,
            animationDelay: delay,
          }}
        />
      ))}
    </div>
  );
}
