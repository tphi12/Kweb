import type { ReactNode } from 'react';

type PanelProps = {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Panel({ title, subtitle, action, children, className = '' }: PanelProps) {
  return (
    <section
      className={`rounded-[24px] bg-white/90 p-6 shadow-[0_12px_32px_rgba(25,28,30,0.06)] backdrop-blur-sm ${className}`}
    >
      {title || action ? (
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            {title ? (
              <h3 className="font-['Manrope'] text-xl font-bold tracking-tight text-[#002547]">
                {title}
              </h3>
            ) : null}
            {subtitle ? <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p> : null}
          </div>
          {action}
        </div>
      ) : null}
      {children}
    </section>
  );
}
