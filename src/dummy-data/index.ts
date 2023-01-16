import { TaskStatus, TaskPriority } from 'types';

export const dummyTasksData = [
  {
    id: 'abc',
    title: 'Pay bills',
    description: 'Pay my electricity bills',
    priority: TaskPriority.High,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
  {
    id: 'def',
    title: 'Walk the dog',
    description: 'I need to walk the dog as soon as possible',
    priority: TaskPriority.Medium,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
  {
    id: 'ghi',
    title: 'Finish an assignment',
    description: 'Finish a task list for Stonly',
    priority: TaskPriority.High,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
  {
    id: 'fdfd',
    title: 'Groceries',
    description: 'Buy lots of things',
    priority: TaskPriority.Low,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
  {
    id: 'adasdwbc',
    title: 'Pack up',
    description: 'I need to pack my things',
    priority: TaskPriority.Medium,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
  {
    id: 'abdsadsac',
    title: 'Send a package',
    description: 'Send a Christmas gift that I forgot',
    priority: TaskPriority.Low,
    status: TaskStatus.Open,
    history: [{ date: new Date(), changeDescription: 'Task created' }],
  },
];
