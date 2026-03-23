import { lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell';

const DashboardPage = lazy(async () =>
  import('../features/dashboard/DashboardPage').then((module) => ({
    default: module.DashboardPage,
  })),
);
const OrdersPage = lazy(async () =>
  import('../features/orders/OrdersPage').then((module) => ({
    default: module.OrdersPage,
  })),
);
const CustomersPage = lazy(async () =>
  import('../features/customers/CustomersPage').then((module) => ({
    default: module.CustomersPage,
  })),
);
const FinancePage = lazy(async () =>
  import('../features/finance/FinancePage').then((module) => ({
    default: module.FinancePage,
  })),
);
const AuditPage = lazy(async () =>
  import('../features/audit/AuditPage').then((module) => ({
    default: module.AuditPage,
  })),
);

function RouteLoader({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-[40vh] place-items-center">
          <div className="rounded-[20px] bg-white/90 px-6 py-4 text-sm font-semibold text-slate-500 shadow-panel">
            Loading workspace...
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <RouteLoader><DashboardPage /></RouteLoader> },
      { path: '/orders', element: <RouteLoader><OrdersPage /></RouteLoader> },
      { path: '/customers', element: <RouteLoader><CustomersPage /></RouteLoader> },
      { path: '/finance', element: <RouteLoader><FinancePage /></RouteLoader> },
      { path: '/audit-log', element: <RouteLoader><AuditPage /></RouteLoader> },
    ],
  },
]);
