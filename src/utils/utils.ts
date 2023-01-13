import { Task, TaskStatus } from 'types';

export const sortAndFilterTasks = (tasks: Task[], status: TaskStatus) => {
  return tasks
    .sort((task: Task) => task.priority - task.priority)
    .filter((task: Task) => task.status === status);
};
