export const dashboardMetrics = [
  { label: 'Total Orders', value: '1,248', delta: '+12.4% vs last month' },
  { label: 'Revenue', value: '$142,850', delta: '+18.1% on track', tone: 'primary' as const },
  { label: 'Costs', value: '$87,420', delta: 'Freight + payroll settled' },
  { label: 'Profit', value: '$55,430', delta: '+9.6% margin expansion', tone: 'positive' as const },
];

export const trajectoryData = [
  { month: 'Jan', revenue: 76000, profit: 22100 },
  { month: 'Feb', revenue: 88200, profit: 26040 },
  { month: 'Mar', revenue: 93100, profit: 28190 },
  { month: 'Apr', revenue: 98400, profit: 30610 },
  { month: 'May', revenue: 106500, profit: 33640 },
  { month: 'Jun', revenue: 118900, profit: 39120 },
  { month: 'Jul', revenue: 129400, profit: 43810 },
  { month: 'Aug', revenue: 142850, profit: 55430 },
];

export const revenueMix = [
  { name: 'Delivery Contracts', value: 46, color: '#183a61' },
  { name: 'Corporate COD', value: 29, color: '#0c6c40' },
  { name: 'Add-on Insurance', value: 15, color: '#88a6cf' },
  { name: 'Warehouse Services', value: 10, color: '#d3e4ff' },
];

export const orderRows = [
  { id: '#FXR-2024-001', date: '24 Oct 2023', customer: 'Apex Corp', initials: 'AC', product: 'Cloud Storage Tier 3', amount: '$12,450.00', status: 'Completed', tone: 'success' as const },
  { id: '#FXR-2024-002', date: '25 Oct 2023', customer: 'Stellar Tech', initials: 'ST', product: 'Security Audit Plus', amount: '$8,200.00', status: 'Shipping', tone: 'info' as const },
  { id: '#FXR-2024-003', date: '26 Oct 2023', customer: 'Nova Ventures', initials: 'NV', product: 'Custom API Suite', amount: '$24,000.00', status: 'Initialized', tone: 'neutral' as const },
  { id: '#FXR-2024-004', date: '26 Oct 2023', customer: 'Mars Logistics', initials: 'ML', product: 'Freight Tracking Module', amount: '$5,600.00', status: 'Cancelled', tone: 'danger' as const },
  { id: '#FXR-2024-005', date: '27 Oct 2023', customer: 'BlueCanopy Foods', initials: 'BF', product: 'Express Return Batch', amount: '$14,180.00', status: 'Completed', tone: 'success' as const },
];

export const operationsBoard = [
  { stage: 'Initialized', total: 18, amount: '$109,400', detail: 'Awaiting warehouse lock-in' },
  { stage: 'Dispatching', total: 9, amount: '$58,100', detail: 'Courier labels issued today' },
  { stage: 'Shipping', total: 13, amount: '$74,930', detail: 'COD reconciliation in progress' },
  { stage: 'Completed', total: 92, amount: '$482,600', detail: 'Auto-posted to AR' },
];

export const customerAccounts = [
  { name: 'Apex Corp', segment: 'Enterprise logistics', contract: 'Annual fulfillment retainer', outstanding: '$32,400', due: '29 Mar 2026', proof: '3 receipts', status: 'Overdue', tone: 'warning' as const },
  { name: 'Nova Ventures', segment: 'Marketplace partner', contract: 'COD weekly settlement', outstanding: '$18,950', due: '30 Mar 2026', proof: '2 receipts', status: 'Pending', tone: 'info' as const },
  { name: 'BlueCanopy Foods', segment: 'Cold-chain distribution', contract: '60-day contract', outstanding: '$0', due: 'Paid', proof: '5 proofs', status: 'Settled', tone: 'success' as const },
  { name: 'Mars Logistics', segment: 'Cross-border export', contract: 'Project shipment', outstanding: '$9,700', due: '05 Apr 2026', proof: '1 receipt', status: 'Due soon', tone: 'neutral' as const },
];

export const debtTimeline = [
  { label: 'Current', amount: '$71,200' },
  { label: '1-15 days', amount: '$29,800' },
  { label: '16-30 days', amount: '$18,400' },
  { label: '31+ days', amount: '$12,600' },
];

export const cashEntries = [
  { type: 'Thu', title: 'Corporate COD settlement', category: 'Operations income', owner: 'Sarah Chen', amount: '+$24,800', date: '23 Mar 2026' },
  { type: 'Chi', title: 'March payroll batch', category: 'Salary', owner: 'Admin approval', amount: '-$11,250', date: '23 Mar 2026' },
  { type: 'Chi', title: 'Warehouse campaign', category: 'Marketing', owner: 'Linh Tran', amount: '-$4,300', date: '22 Mar 2026' },
  { type: 'Chi', title: 'Inbound goods order', category: 'Import supply', owner: 'Purchasing queue', amount: '-$7,900', date: '22 Mar 2026' },
];

export const approvals = [
  { request: 'Inbound labels for Q2', requester: 'Minh Vu', amount: '$5,200', status: 'Waiting accountant' },
  { request: 'Packaging replenishment', requester: 'Duyen Le', amount: '$2,840', status: 'Ready to approve' },
  { request: 'Fleet maintenance reserve', requester: 'Quang Ho', amount: '$3,650', status: 'Need admin review' },
];

export const auditEntries = [
  { time: '08:42', actor: 'Sarah Chen', role: 'Accountant', action: 'approved cash disbursement', target: 'PAY-2026-039', detail: 'Payroll batch for operations team was approved and posted to ledger.' },
  { time: '09:15', actor: 'Bao Nguyen', role: 'Operator', action: 'updated shipping status', target: '#FXR-2024-002', detail: 'Order moved from Initialized to Shipping with airway bill attached.' },
  { time: '10:06', actor: 'Admin', role: 'Administrator', action: 'edited customer credit limit', target: 'Apex Corp', detail: 'Credit line increased from $30,000 to $45,000 after contract renewal.' },
  { time: '11:28', actor: 'Linh Tran', role: 'Finance staff', action: 'uploaded payment proof', target: 'REC-2026-112', detail: 'Bank transfer confirmation and signed statement were attached.' },
];

export const checklistItems = [
  { title: 'Sync courier COD statements', owner: 'Finance', progress: 'Completed' },
  { title: 'Review late receivables > 15 days', owner: 'Admin', progress: 'In progress' },
  { title: 'Approve pending import costs', owner: 'Accountant', progress: 'Queued' },
];
