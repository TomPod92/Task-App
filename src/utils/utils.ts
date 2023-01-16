import { Task, TaskStatus } from 'types';

export const getTasksByStatus = (tasks: Task[], status: TaskStatus) => {
  return tasks
    .filter((task: Task) => task.status === status)
    .sort((a: Task, b: Task) => b.priority - a.priority);
};
