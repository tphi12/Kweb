import { FileUp, Plus, Trash2, X } from 'lucide-react';
import { useMemo, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

type LineItem = {
  id: number;
  name: string;
  qty: number;
  price: number;
};

export function OrderCreateModal({ open, onClose }: Props) {
  const [items, setItems] = useState<LineItem[]>([{ id: 1, name: '', qty: 1, price: 0 }]);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.qty * item.price, 0),
    [items],
  );

  if (!open) {
    return null;
  }

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const updateItem = (id: number, field: keyof Omit<LineItem, 'id'>, value: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: field === 'name' ? value : Number(value),
            }
          : item,
      ),
    );
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/30 p-4 backdrop-blur-sm">
      <div className="grid max-h-[calc(100vh-2rem)] w-full max-w-6xl grid-rows-[auto_1fr_auto] overflow-hidden rounded-[28px] bg-white/92 shadow-[0_24px_60px_rgba(25,28,30,0.16)]">
        <div className="flex items-center justify-between gap-4 px-7 py-6">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#002547]">
              New sales order
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Generate a new transaction ledger for a client.
            </p>
          </div>
          <button type="button" className="rounded-2xl bg-slate-100 p-2 text-slate-500 transition hover:text-[#002547]" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="grid min-h-0 md:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="bg-slate-50/90 px-7 py-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Draft progress
            </p>
            <div className="mt-5 grid gap-4">
              {[
                { step: '1', label: 'Customer details', active: false, done: true },
                { step: '2', label: 'Items and services', active: true, done: false },
                { step: '3', label: 'Documentation', active: false, done: false },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div
                    className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                      item.done || item.active
                        ? 'bg-[#002547] text-white'
                        : 'border border-slate-300 text-slate-400'
                    }`}
                  >
                    {item.step}
                  </div>
                  <span className={item.active ? 'font-semibold text-[#002547]' : item.done ? 'font-semibold text-[#0c6c40]' : 'text-slate-400'}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] bg-white/75 p-5">
              <h4 className="font-display text-lg font-bold text-[#002547]">Summary</h4>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <strong className="text-[#002547]">${subtotal.toLocaleString()}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Tax (5%)</span>
                  <strong className="text-[#002547]">${tax.toLocaleString()}</strong>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                  <span className="font-semibold text-[#002547]">Grand total</span>
                  <strong className="text-lg text-[#002547]">${total.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </aside>

          <div className="grid min-h-0 content-start gap-8 overflow-auto px-7 py-7">
            <section>
              <h4 className="mb-4 font-display text-lg font-bold text-[#002547]">Customer selection</h4>
              <select className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#002547] focus:ring-4 focus:ring-blue-100">
                <option>Select a registered customer...</option>
                <option>Apex Corp (ID: 9923)</option>
                <option>Stellar Tech (ID: 4410)</option>
                <option>Nova Ventures (ID: 1102)</option>
              </select>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h4 className="font-display text-lg font-bold text-[#002547]">Line items</h4>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0c6c40]"
                  onClick={() =>
                    setItems((current) => [...current, { id: Date.now(), name: '', qty: 1, price: 0 }])
                  }
                >
                  <Plus size={14} />
                  Add row
                </button>
              </div>
              <div className="grid gap-3">
                {items.map((item) => (
                  <div key={item.id} className="grid gap-3 md:grid-cols-[2.3fr_0.8fr_1fr_auto]">
                    <input
                      className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#002547] focus:ring-4 focus:ring-blue-100"
                      placeholder="Product name"
                      value={item.name}
                      onChange={(event) => updateItem(item.id, 'name', event.target.value)}
                    />
                    <input
                      type="number"
                      className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#002547] focus:ring-4 focus:ring-blue-100"
                      placeholder="Qty"
                      value={item.qty}
                      onChange={(event) => updateItem(item.id, 'qty', event.target.value)}
                    />
                    <input
                      type="number"
                      className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#002547] focus:ring-4 focus:ring-blue-100"
                      placeholder="Price"
                      value={item.price}
                      onChange={(event) => updateItem(item.id, 'price', event.target.value)}
                    />
                    <button
                      type="button"
                      className="grid h-12 w-12 place-items-center rounded-2xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                      onClick={() =>
                        setItems((current) =>
                          current.length > 1 ? current.filter((row) => row.id !== item.id) : current,
                        )
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="mb-4 font-display text-lg font-bold text-[#002547]">Supporting documents</h4>
              <div className="grid min-h-[190px] place-items-center rounded-[24px] border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center text-slate-500">
                <div className="grid gap-3">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#002547] shadow-panel">
                    <FileUp size={24} />
                  </div>
                  <strong className="text-slate-700">Drop payment receipts or PDFs here</strong>
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    Maximum file size: 10MB
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-end gap-3 bg-slate-50/90 px-7 py-5">
          <button type="button" className="rounded-2xl px-5 py-3 font-semibold text-slate-500 transition hover:bg-white" onClick={onClose}>
            Cancel draft
          </button>
          <button type="button" className="inline-flex min-h-11 items-center rounded-2xl bg-gradient-to-r from-fox-primary to-fox-primary-soft px-5 font-semibold text-white shadow-action transition hover:-translate-y-0.5">
            Finalize and create order
          </button>
        </div>
      </div>
    </div>
  );
}
