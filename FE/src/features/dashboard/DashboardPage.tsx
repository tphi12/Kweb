import { ArrowUpRight, Boxes, DollarSign, Package, Wallet } from 'lucide-react';
import { RevenueMixChart } from '../../components/charts/RevenueMixChart';
import { TrajectoryChart } from '../../components/charts/TrajectoryChart';
import { MetricCard } from '../../components/ui/MetricCard';
import { PageHeader } from '../../components/ui/PageHeader';
import { Panel } from '../../components/ui/Panel';
import { StatusBadge } from '../../components/ui/StatusBadge';
import {
  checklistItems,
  dashboardMetrics,
  debtTimeline,
  orderRows,
  revenueMix,
  trajectoryData,
} from '../../data/mockData';

const icons = [Package, DollarSign, Wallet, Boxes];

export function DashboardPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        eyebrow="Admin portfolio"
        title="Financial control center"
        description="Theo doi doanh thu, chi phi, loi nhuan va quang canh van hanh theo thoi gian thuc cho FoxRun Express."
        actions={
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5"
          >
            <ArrowUpRight size={16} />
            Export board
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric, index) => {
          const Icon = icons[index];
          return (
            <MetricCard
              key={metric.label}
              {...metric}
              icon={<Icon size={18} />}
            />
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Panel
          className="xl:col-span-8"
          title="Revenue trajectory"
          subtitle="Run-rate trend for revenue and net profit across the current fiscal cycle."
        >
          <TrajectoryChart data={trajectoryData} />
        </Panel>

        <Panel
          className="bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,244,250,0.94))] xl:col-span-4"
          title="Revenue mix"
          subtitle="Contribution by service line."
        >
          <RevenueMixChart data={revenueMix} />
          <div className="mt-4 grid gap-3">
            {revenueMix.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <strong className="text-[#002547]">{item.value}%</strong>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-7"
          title="Latest high-value orders"
          subtitle="The biggest orders currently affecting realized revenue."
        >
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-fox-surface-high text-left text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                  <th className="px-4 py-4">Order ID</th>
                  <th className="px-4 py-4">Customer</th>
                  <th className="px-4 py-4">Product</th>
                  <th className="px-4 py-4">Amount</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderRows.slice(0, 4).map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-none hover:bg-slate-50/80">
                    <td className="px-4 py-4 font-bold text-[#002547]">{row.id}</td>
                    <td className="px-4 py-4">{row.customer}</td>
                    <td className="px-4 py-4 text-slate-600">{row.product}</td>
                    <td className="px-4 py-4 font-bold text-[#002547]">{row.amount}</td>
                    <td className="px-4 py-4">
                      <StatusBadge label={row.status} tone={row.tone} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel
          className="xl:col-span-5"
          title="Receivable ageing"
          subtitle="Customer debt grouped by maturity."
        >
          <div className="grid gap-3">
            {debtTimeline.map((entry) => (
              <div key={entry.label} className="rounded-2xl bg-slate-50/90 px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-900">{entry.label}</h4>
                    <p className="mt-1 text-sm text-slate-500">Open invoice bucket</p>
                  </div>
                  <strong className="text-lg font-bold text-[#002547]">{entry.amount}</strong>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-12"
          title="Monthly close checklist"
          subtitle="Cross-functional tasks for daily visibility and fast follow-up."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {checklistItems.map((item) => (
              <article key={item.title} className="rounded-[20px] bg-slate-50/90 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{item.owner}</p>
                <h4 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-900">
                  {item.title}
                </h4>
                <div className="mt-4">
                  <StatusBadge
                    label={item.progress}
                    tone={
                      item.progress === 'Completed'
                        ? 'success'
                        : item.progress === 'In progress'
                          ? 'info'
                          : 'neutral'
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
