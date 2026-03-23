import { Download, Shield } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Panel } from '../../components/ui/Panel';
import { auditEntries } from '../../data/mockData';

export function AuditPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Transparency log"
        title="Activity history and audit log"
        description="Ghi nhan moi thao tac cua admin, nhan vien va ke toan de dam bao minh bach va de dang truy vet sai sot."
        actions={
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5"
          >
            <Download size={16} />
            Export log
          </button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-12">
        <Panel
          className="bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,244,250,0.94))] xl:col-span-4"
          title="Audit posture"
          subtitle="Health signals for traceability and control."
        >
          <div className="rounded-[20px] bg-white/70 p-5">
            <strong className="block font-display text-4xl font-extrabold tracking-tight text-[#002547]">
              99.2%
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Critical financial actions captured with actor, time and entity linkage.
            </p>
          </div>
          <div className="mt-4 flex gap-4 rounded-[20px] bg-white/70 p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-[#002547]">
              <Shield size={18} />
            </div>
            <div>
              <strong className="text-[#002547]">124 actions today</strong>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Across admin, operations and accounting roles.
              </p>
            </div>
          </div>
        </Panel>

        <Panel
          className="xl:col-span-8"
          title="Chronological activity thread"
          subtitle="Every important mutation is logged with enough detail for quick investigation."
        >
          <div className="grid gap-5">
            {auditEntries.map((entry, index) => (
              <article key={`${entry.time}-${entry.target}`} className="grid grid-cols-[26px_minmax(0,1fr)] gap-4">
                <div className="relative flex justify-center">
                  <span className="z-10 mt-2 h-3 w-3 rounded-full bg-[#002547]" />
                  {index < auditEntries.length - 1 ? (
                    <span className="absolute top-0 bottom-[-24px] w-px bg-slate-200" />
                  ) : null}
                </div>
                <div className="rounded-[20px] bg-slate-50/90 p-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start">
                    <span className="w-16 shrink-0 pt-1 font-bold text-[#002547]">{entry.time}</span>
                    <div className="min-w-0">
                      <h4 className="font-display text-xl font-bold tracking-tight text-slate-900">
                        {entry.actor}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">{entry.role}</p>
                    </div>
                  </div>
                  <strong className="mt-4 block text-[#002547]">
                    {entry.action} <span className="text-[#0c6c40]">{entry.target}</span>
                  </strong>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{entry.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
