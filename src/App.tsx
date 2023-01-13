import { useState, useEffect } from 'react';
// import Button from 'components/Button';
import { TaskStatus, Task, taskStatusOrder } from 'types';
import { dummyTasksData } from 'dummy-data';
import { Form } from 'components/Form/Form';
import { Column } from 'components/Column/Column';
import { Loader } from 'components/Loader/Loader';
import AbcIcon from '@mui/icons-material/Abc';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleChangeTaskStatus = (clickedTask: Task) => {
    const statusAtIndex = taskStatusOrder.findIndex(
      (status) => status === clickedTask.status
    );

    const changeStatusTo = taskStatusOrder[statusAtIndex + 1];
    const date = new Date().toISOString();
    const changeDescription = `Moved from ${clickedTask.status} to ${changeStatusTo}`;

    console.log('date', date);
    console.log('changeDescription', changeDescription);

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

  const handleCreateTask = (task: Task) => {
    setTasksLoading(true);
    setTimeout(() => {
      setTasks((prev) => [...prev, task]);
      setTasksLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setTasks(dummyTasksData);
      setTasksLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <Loader isOpen={tasksLoading} />
      <div className="table-container">
        <div className="table">
          {taskStatusOrder.map((status: TaskStatus) => (
            <Column
              key={status}
              columnType={status}
              tasks={tasks}
              onTaskClick={setSelectedTask}
              onMoveTask={handleChangeTaskStatus}
            />
          ))}
        </div>
      </div>
      <Form
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        onTaskCreate={handleCreateTask}
      />
    </div>
  );
};

export default App;
