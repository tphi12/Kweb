import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Point = {
  month: string;
  revenue: number;
  profit: number;
};

export function TrajectoryChart({ data }: { data: Point[] }) {
  return (
    <div className="h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -18, right: 8, top: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#183a61" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#183a61" stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0c6c40" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0c6c40" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#dfe3e7" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={12} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={56}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              border: 'none',
              borderRadius: '18px',
              background: 'rgba(255,255,255,0.94)',
              boxShadow: '0 12px 32px rgba(25, 28, 30, 0.08)',
            }}
            formatter={(value) => {
              const amount = typeof value === 'number' ? value : Number(value ?? 0);
              return [`$${amount.toLocaleString()}`, ''];
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#183a61"
            strokeWidth={2.5}
            fill="url(#revenueFill)"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#0c6c40"
            strokeWidth={2.2}
            fill="url(#profitFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
