import { Task, TaskStatus } from 'types';

export const sortAndFilterTasks = (tasks: Task[], status: TaskStatus) => {
  return tasks
    .sort((a: Task, b: Task) => b.priority - a.priority)
    .filter((task: Task) => task.status === status);
};
