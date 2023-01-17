import { createContext, ReactNode, useState, useEffect } from 'react';
import { Task, taskStatusOrder } from 'types';
import { dummyTasksData } from 'dummy-data';
import { useNotification } from 'hooks/useNotification';

interface TaskContextData {
  tasks: Task[];
  tasksLoading: boolean;
  selectedTask: Task | null;
  isFormModalOpen: boolean;
  createTask: (task: Task) => void;
  editTask: (task: Task) => void;
  changeTaskStatus: (task: Task) => void;
  handleSelectTaskToEdit: (task: Task) => void;
  toggleFormModal: () => void;
  clearSelectedTask: () => void;
}

export const TaskContext = createContext<TaskContextData>({
  tasks: [],
  tasksLoading: true,
  selectedTask: null,
  isFormModalOpen: false,
  createTask: () => {},
  editTask: () => {},
  changeTaskStatus: () => {},
  handleSelectTaskToEdit: () => {},
  toggleFormModal: () => {},
  clearSelectedTask: () => {},
});

interface Props {
  children: ReactNode;
}

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const { successToast } = useNotification();

  const createTask = (task: Task) => {
    setTasksLoading(true);
    setTimeout(() => {
      setTasks((prev) => [...prev, task]);
      setTasksLoading(false);
    }, 2000);

    clearSelectedTask();
    successToast('Task created');
    toggleFormModal();
  };

  const editTask = (taskToEdit: Task) => {
    setTasksLoading(true);

    const newTasks = tasks.map((task: Task) => {
      if (task.id === taskToEdit.id) {
        return {
          ...taskToEdit,
          history: [
            ...taskToEdit.history,
            {
              date: new Date(),
              changeDescription: 'Task edited',
            },
          ],
        };
      } else {
        return task;
      }
    });

    setTimeout(() => {
      setTasks(newTasks);
      setTasksLoading(false);
    }, 2000);

    successToast('Task edited');
    clearSelectedTask();
    toggleFormModal();
  };

  const changeTaskStatus = (clickedTask: Task) => {
    const statusAtIndex = taskStatusOrder.findIndex(
      (status) => status === clickedTask.status
    );

    const newStatus = taskStatusOrder[statusAtIndex + 1];
    const date = new Date();
    const changeDescription = `Moved from ${clickedTask.status} to ${newStatus}`;

    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === clickedTask.id) {
          return {
            ...task,
            status: newStatus,
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

    successToast('Task status changed');
  };

  const toggleFormModal = () => {
    setIsFormModalOpen((p) => !p);
  };

  const handleSelectTaskToEdit = (task: Task) => {
    setSelectedTask(task);
    toggleFormModal();
  };

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setTasks(dummyTasksData);
      setTasksLoading(false);
    }, 2000);
    setTasks(dummyTasksData);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksLoading,
        selectedTask,
        isFormModalOpen,
        createTask,
        editTask,
        changeTaskStatus,
        handleSelectTaskToEdit,
        toggleFormModal,
        clearSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
