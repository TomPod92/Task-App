import { useState, useEffect } from 'react';
// import Button from 'components/Button';
import { Task } from 'types';
import { dummyTasksData } from 'dummy-data';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { Loader } from 'components/Loader/Loader';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task>();

  useEffect(() => {
    setTimeout(() => {
      setTasks(dummyTasksData);
      setTasksLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {tasksLoading && <Loader />}
      <div className="tasks-table-container">
        <div className="tasks-table">
          <TasksColumn />
          <TasksColumn />
          <TasksColumn />
        </div>
      </div>
      <TaskForm />
    </div>
  );
};

export default App;
