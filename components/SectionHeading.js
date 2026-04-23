export default function SectionHeading({ eyebrow, title, hint, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
      <div>
        {eyebrow && (
          <div className="text-xs font-mono uppercase tracking-widest text-ocean mb-2">
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ivory">{title}</h2>
        {hint && <p className="mt-1 text-slate-muted max-w-2xl">{hint}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
