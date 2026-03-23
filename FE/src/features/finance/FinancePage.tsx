import { CheckCircle2, Landmark, Receipt } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Panel } from '../../components/ui/Panel';
import { approvals, cashEntries } from '../../data/mockData';

export function FinancePage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Accounting desk"
        title="Cashflow and cashbook"
        description="Kiem soat dong tien thuc te, phan loai chi phi va phe duyet cac don nhap hang tu nhan vien."
        actions={
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5"
          >
            <Receipt size={16} />
            New cash entry
          </button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-12">
        <Panel
          className="bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,244,250,0.94))] xl:col-span-4"
          title="Cash on hand"
          subtitle="Consolidated cashbook status for today."
        >
          <div className="rounded-[20px] bg-white/70 p-5">
            <strong className="block font-display text-4xl font-extrabold tracking-tight text-[#002547]">
              $88,420
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Net flow today: +$1,350 after approved disbursements.
            </p>
          </div>
          <div className="mt-4 grid gap-3">
            <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-4">
              <span className="text-slate-500">Approved payouts</span>
              <strong className="text-[#002547]">$27,100</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-4">
              <span className="text-slate-500">Expected inflow</span>
              <strong className="text-[#002547]">$31,750</strong>
            </div>
          </div>
        </Panel>

        <Panel
          className="xl:col-span-8"
          title="Thu - Chi ledger"
          subtitle="Chronological view of realized cash movements."
        >
          <div className="grid gap-4">
            {cashEntries.map((entry) => (
              <article key={`${entry.title}-${entry.date}`} className="flex gap-4 rounded-[20px] bg-slate-50/90 p-5">
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                    entry.type === 'Thu'
                      ? 'bg-emerald-100 text-[#177346]'
                      : 'bg-rose-100 text-rose-600'
                  }`}
                >
                  {entry.type === 'Thu' ? <Landmark size={18} /> : <Receipt size={18} />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="font-display text-xl font-bold tracking-tight text-slate-900">
                        {entry.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{entry.category}</p>
                    </div>
                    <strong className="text-lg font-bold text-[#002547]">{entry.amount}</strong>
                  </div>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                    <span>{entry.owner}</span>
                    <span>{entry.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-12"
          title="Approval queue"
          subtitle="Requests from operations waiting for accounting validation."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {approvals.map((approval) => (
              <article key={approval.request} className="grid gap-3 rounded-[20px] bg-slate-50/90 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {approval.requester}
                  </p>
                  <CheckCircle2 size={16} className="text-[#0c6c40]" />
                </div>
                <h4 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                  {approval.request}
                </h4>
                <strong className="text-[#002547]">{approval.amount}</strong>
                <p className="text-sm leading-6 text-slate-500">{approval.status}</p>
                <button type="button" className="mt-2 rounded-2xl bg-white px-4 py-3 font-semibold text-[#002547] shadow-panel transition hover:-translate-y-0.5">
                  Review request
                </button>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
