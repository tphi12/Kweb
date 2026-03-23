import type { ReactNode } from 'react';

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  tone?: 'default' | 'primary' | 'positive';
  icon?: ReactNode;
};

const toneClasses = {
  default: 'bg-white text-slate-900',
  primary: 'bg-gradient-to-br from-[#002547] to-[#1b3b5f] text-white',
  positive: 'bg-gradient-to-br from-[#0f5d38] to-[#0c6c40] text-white',
};

export function MetricCard({
  label,
  value,
  delta,
  tone = 'default',
  icon,
}: MetricCardProps) {
  return (
    <article className={`rounded-[24px] p-6 shadow-[0_12px_32px_rgba(25,28,30,0.06)] ${toneClasses[tone]}`}>
      <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-inherit/80">
        <span>{label}</span>
        {icon ? <div className="rounded-2xl bg-white/12 p-3">{icon}</div> : null}
      </div>
      <strong className="mt-5 block text-3xl font-extrabold tracking-tight">{value}</strong>
      <p className="mt-3 text-sm text-inherit/80">{delta}</p>
    </article>
  );
}
