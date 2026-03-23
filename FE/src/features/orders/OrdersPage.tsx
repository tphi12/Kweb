import { Filter, MoreVertical, Plus } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Panel } from '../../components/ui/Panel';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { operationsBoard, orderRows } from '../../data/mockData';
import { OrderCreateModal } from './OrderCreateModal';

export function OrdersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Operations workspace"
        title="Order management"
        description="Theo doi danh sach don hang, trang thai va quy trinh xu ly tu luc khoi tao den khi hoan tat."
        actions={
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5"
            onClick={() => setOpen(true)}
          >
            <Plus size={16} />
            Create new order
          </button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-12">
        <Panel
          className="xl:col-span-8"
          title="Filter board"
          subtitle="Quick filtering for transaction and status reviews."
        >
          <div className="grid gap-4 lg:grid-cols-[2.2fr_1.1fr_auto]">
            <label className="grid gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Filter by date
              </span>
              <div className="grid gap-3 md:grid-cols-2">
                <input className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none focus:border-[#002547] focus:ring-4 focus:ring-blue-100" type="date" />
                <input className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none focus:border-[#002547] focus:ring-4 focus:ring-blue-100" type="date" />
              </div>
            </label>
            <label className="grid gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Order status
              </span>
              <select className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none focus:border-[#002547] focus:ring-4 focus:ring-blue-100">
                <option>All statuses</option>
                <option>Initialized</option>
                <option>Dispatching</option>
                <option>Shipping</option>
                <option>Completed</option>
              </select>
            </label>
            <button type="button" className="inline-flex min-h-12 items-center justify-center gap-2 self-end rounded-2xl bg-white px-5 font-semibold text-[#002547] shadow-panel transition hover:-translate-y-0.5">
              <Filter size={16} />
              Apply filters
            </button>
          </div>
        </Panel>

        <Panel
          className="bg-gradient-to-br from-[#002547] to-[#1b3b5f] text-white xl:col-span-4"
          title="Total sales (MTD)"
          subtitle="Revenue booked inside March 2026."
        >
          <div className="relative overflow-hidden rounded-[20px] bg-white/6 p-5">
            <strong className="block font-display text-4xl font-extrabold tracking-tight">$142,850.00</strong>
            <p className="mt-2 text-sm text-white/80">Average fulfillment margin 38.8%</p>
            <div className="pointer-events-none absolute -right-4 -bottom-6 h-24 w-24 rounded-full bg-white/8 blur-xl" />
          </div>
        </Panel>

        <Panel
          className="xl:col-span-12"
          title="Processing pipeline"
          subtitle="Operational workload split by stage."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operationsBoard.map((item) => (
              <article key={item.stage} className="rounded-[20px] bg-slate-50/90 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {item.stage}
                </p>
                <strong className="mt-3 block text-sm font-bold text-[#002547]">{item.total} orders</strong>
                <h4 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
                  {item.amount}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-12"
          title="Orders list"
          subtitle="Main operating table for corporate sales transactions."
        >
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-fox-surface-high text-left text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                  <th className="px-4 py-4">Order ID</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Customer</th>
                  <th className="px-4 py-4">Product</th>
                  <th className="px-4 py-4">Total amount</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {orderRows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-none hover:bg-slate-50/80">
                    <td className="px-4 py-5 font-bold text-[#002547]">{row.id}</td>
                    <td className="px-4 py-5 text-slate-500">{row.date}</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                          {row.initials}
                        </div>
                        <strong>{row.customer}</strong>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-slate-600">{row.product}</td>
                    <td className="px-4 py-5 font-bold text-[#002547]">{row.amount}</td>
                    <td className="px-4 py-5">
                      <StatusBadge label={row.status} tone={row.tone} />
                    </td>
                    <td className="px-4 py-5">
                      <button type="button" className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-[#002547]">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>

      <OrderCreateModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
