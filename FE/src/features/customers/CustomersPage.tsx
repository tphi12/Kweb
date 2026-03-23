import { FileCheck2, ReceiptText } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Panel } from '../../components/ui/Panel';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { customerAccounts, debtTimeline } from '../../data/mockData';

export function CustomersPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Accounts receivable"
        title="Customers and debt tracking"
        description="Quan ly chi tiet ho so khach hang, cong no hop dong va cap nhat thanh toan kem chung tu proof."
        actions={
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5"
          >
            <FileCheck2 size={16} />
            Add payment proof
          </button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-12">
        <Panel
          className="bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,244,250,0.94))] xl:col-span-4"
          title="Outstanding balance"
          subtitle="Live view of current receivables."
        >
          <div className="rounded-[20px] bg-white/70 p-5">
            <strong className="block font-display text-4xl font-extrabold tracking-tight text-[#002547]">
              $132,000
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              11 contracts still open across 4 enterprise accounts.
            </p>
          </div>
          <div className="mt-4 grid gap-3">
            {debtTimeline.map((entry) => (
              <div key={entry.label} className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900">{entry.label}</h4>
                  <p className="mt-1 text-sm text-slate-500">Invoice bucket</p>
                </div>
                <strong className="text-[#002547]">{entry.amount}</strong>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-8"
          title="Customer debt ledger"
          subtitle="Detailed contract state, due date and proof completeness."
        >
          <div className="grid gap-4">
            {customerAccounts.map((account) => (
              <article key={account.name} className="rounded-[22px] bg-slate-50/90 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                      {account.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{account.segment}</p>
                  </div>
                  <StatusBadge label={account.status} tone={account.tone} />
                </div>
                <div className="mt-5 grid gap-4 rounded-[18px] bg-white/80 p-4 md:grid-cols-2 xl:grid-cols-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Contract</p>
                    <strong className="mt-2 block text-[#002547]">{account.contract}</strong>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Outstanding</p>
                    <strong className="mt-2 block text-[#002547]">{account.outstanding}</strong>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Due</p>
                    <strong className="mt-2 block text-[#002547]">{account.due}</strong>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Proof</p>
                    <strong className="mt-2 block text-[#002547]">{account.proof}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-12"
          title="Proof of payment repository"
          subtitle="Latest attached evidence used during debt reconciliation."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {customerAccounts.map((account) => (
              <article key={account.name} className="flex h-full flex-col gap-4 rounded-[20px] bg-slate-50/90 p-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#002547] shadow-panel">
                  <ReceiptText size={18} />
                </div>
                <div>
                  <strong className="text-[#002547]">{account.name}</strong>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {account.proof} available in archive
                  </p>
                </div>
                <button type="button" className="mt-auto rounded-2xl bg-white px-4 py-3 font-semibold text-[#002547] shadow-panel transition hover:-translate-y-0.5">
                  View proofs
                </button>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
