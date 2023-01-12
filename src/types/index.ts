export enum TaskStatus {
  Open = 'open',
  Pending = 'pending',
  Closed = 'closed',
}

export enum TaskPriority {
  Low,
  Medium,
  High,
}

export interface HistoryEntry {
  date: Date;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  history?: HistoryEntry[];
}
