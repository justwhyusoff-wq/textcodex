export function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="signal-label">{kicker}</p>
      <h2 className="display-title mt-4 text-3xl text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/58">{copy}</p>
    </div>
  );
}
