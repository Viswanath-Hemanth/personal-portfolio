interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps): React.JSX.Element {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  );
}
