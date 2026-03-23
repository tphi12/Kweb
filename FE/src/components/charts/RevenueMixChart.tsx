import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type Slice = {
  name: string;
  value: number;
  color: string;
};

export function RevenueMixChart({ data }: { data: Slice[] }) {
  return (
    <div className="h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={58}
            outerRadius={88}
            paddingAngle={3}
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
              const amount = typeof value === 'number' ? value : Number(value ?? 0);
              return [`${amount}%`, String(name ?? '')];
            }}
            contentStyle={{
              border: 'none',
              borderRadius: '18px',
              background: 'rgba(255,255,255,0.94)',
              boxShadow: '0 12px 32px rgba(25, 28, 30, 0.08)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
