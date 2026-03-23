type StatusBadgeProps = {
  label: string;
  tone?: 'success' | 'info' | 'neutral' | 'warning' | 'danger';
};

const toneClasses = {
  success: 'bg-[#9ff5bc] text-[#177346]',
  info: 'bg-[#d3e4ff] text-[#2a486d]',
  neutral: 'bg-slate-100 text-slate-600',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-rose-100 text-rose-700',
};

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex min-h-7 items-center rounded-full px-3 text-[11px] font-bold ${toneClasses[tone]}`}>
      {label}
    </span>
  );
}
