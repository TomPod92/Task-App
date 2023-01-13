export enum TaskStatus {
  Open = 'open',
  Pending = 'pending',
  Closed = 'closed',
}

export const taskStatusOrder = [
  TaskStatus.Open,
  TaskStatus.Pending,
  TaskStatus.Closed,
];

export enum TaskPriority {
  Low,
  Medium,
  High,
}

export interface HistoryEntry {
  date: string;
  changeDescription: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  history: HistoryEntry[];
}
