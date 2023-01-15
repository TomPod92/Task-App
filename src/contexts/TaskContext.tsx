import { createContext, ReactNode, useState, useEffect } from 'react';
import { TaskStatus, Task, taskStatusOrder } from 'types';
import { dummyTasksData } from 'dummy-data';

interface TaskContextData {
  tasks: Task[];
  tasksLoading: boolean;
  selectedTask: Task | null;
  isFormModalOpen: boolean;
  createTask: (task: Task) => void;
  changeTaskStatus: (task: Task) => void;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  toggleFormModal: () => void;
}

export const TaskContext = createContext<TaskContextData>({
  tasks: [],
  tasksLoading: true,
  selectedTask: null,
  isFormModalOpen: false,
  createTask: () => {},
  changeTaskStatus: () => {},
  setSelectedTask: () => {},
  toggleFormModal: () => {},
});

interface Props {
  children: ReactNode;
}

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const createTask = (task: Task) => {
    setTasksLoading(true);
    setTimeout(() => {
      setTasks((prev) => [...prev, task]);
      setTasksLoading(false);
    }, 2000);
  };

  const changeTaskStatus = (clickedTask: Task) => {
    const statusAtIndex = taskStatusOrder.findIndex(
      (status) => status === clickedTask.status
    );

    const changeStatusTo = taskStatusOrder[statusAtIndex + 1];
    const date = new Date().toISOString();
    const changeDescription = `Moved from ${clickedTask.status} to ${changeStatusTo}`;

    // console.log('date', date);
    // console.log('changeDescription', changeDescription);

    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === clickedTask.id) {
          return {
            ...task,
            status: changeStatusTo,
            history: [
              ...task.history,
              {
                date,
                changeDescription,
              },
            ],
          };
        }

        return task;
      })
    );
  };

  const toggleFormModal = () => {
    console.log('click', isFormModalOpen);
    setIsFormModalOpen((p) => !p);
  };

  useEffect(() => {
    setTimeout(() => {
      setTasks(dummyTasksData);
      setTasksLoading(false);
    }, 2000);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksLoading,
        selectedTask,
        isFormModalOpen,
        createTask,
        changeTaskStatus,
        setSelectedTask,
        toggleFormModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
