import {
  Bell,
  ChartColumnBig,
  CircleHelp,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Menu,
  Settings,
  ShieldCheck,
  Users,
  WalletCards,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/orders', label: 'Sales', icon: CreditCard },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/finance', label: 'Finance', icon: WalletCards },
  { to: '/audit-log', label: 'Audit Log', icon: ShieldCheck },
];

const utilityItems = [
  { label: 'Reports', icon: ChartColumnBig },
  { label: 'Operations', icon: ClipboardList },
];

const searchHints: Record<string, string> = {
  '/dashboard': 'Search KPIs, contracts, ledgers...',
  '/orders': 'Search orders, invoices, customers...',
  '/customers': 'Search customer, debt note, proof...',
  '/finance': 'Search ledger, approvals, expenses...',
  '/audit-log': 'Search user, action, entity...',
};

export function AppShell() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const searchHint = useMemo(
    () => searchHints[location.pathname] ?? 'Search...',
    [location.pathname],
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(211,228,255,0.7),transparent_32%),linear-gradient(180deg,#f9fbfd_0%,#f7f9fb_100%)] text-slate-900">
      <div
        className={`fixed inset-0 z-30 bg-slate-950/20 backdrop-blur-sm transition md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col gap-6 bg-slate-50/95 px-4 py-6 backdrop-blur-xl transition duration-200 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#002547] to-[#1b3b5f] text-white shadow-[0_12px_32px_rgba(25,28,30,0.1)]">
            <span className="font-['Manrope'] text-lg font-extrabold">F</span>
          </div>
          <div>
            <h1 className="font-['Manrope'] text-lg font-extrabold tracking-tight text-[#002547]">
              FoxRun Express
            </h1>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-400">
              The Financial Atelier
            </p>
          </div>
          <button
            type="button"
            className="ml-auto rounded-xl p-2 text-slate-500 transition hover:bg-white hover:text-[#002547] md:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="grid gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-white text-[#002547] shadow-[0_12px_32px_rgba(25,28,30,0.06)]'
                      : 'text-slate-500 hover:translate-x-1 hover:bg-white/80 hover:text-[#002547]'
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-slate-200/60 pt-5">
          <div className="grid gap-1">
            {utilityItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:translate-x-1 hover:bg-white/80 hover:text-[#002547]"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <button
              type="button"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:translate-x-1 hover:bg-white/80 hover:text-[#002547]"
            >
              <Settings size={18} />
              <span>Settings</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:translate-x-1 hover:bg-white/80 hover:text-[#002547]"
            >
              <CircleHelp size={18} />
              <span>Support</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="md:pl-[264px]">
        <header className="sticky top-0 z-20 flex h-[88px] items-center justify-between gap-4 bg-white/85 px-4 backdrop-blur-xl md:px-8">
          <div className="flex flex-1 items-center gap-3">
            <button
              type="button"
              className="rounded-xl bg-white p-2 text-slate-500 transition hover:text-[#002547] md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
            <div className="flex w-full max-w-[420px] items-center gap-3 rounded-full bg-slate-100/90 px-4 py-3">
              <span className="text-sm text-slate-400">⌕</span>
              <input
                type="text"
                placeholder={searchHint}
                className="w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button type="button" className="rounded-xl bg-white p-2 text-slate-500 transition hover:text-[#002547]">
              <Bell size={18} />
            </button>
            <button type="button" className="hidden rounded-xl bg-white p-2 text-slate-500 transition hover:text-[#002547] md:grid md:place-items-center">
              <CircleHelp size={18} />
            </button>
            <button type="button" className="hidden rounded-xl bg-white p-2 text-slate-500 transition hover:text-[#002547] md:grid md:place-items-center">
              <Settings size={18} />
            </button>
            <div className="hidden h-8 w-px bg-slate-200 md:block" />
            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-bold text-[#002547]">Sarah Chen</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Accountant</p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-slate-100 to-white text-xs font-bold text-slate-600 shadow-sm">
                SC
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 pb-10 pt-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
