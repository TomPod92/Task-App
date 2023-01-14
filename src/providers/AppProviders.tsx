import { TaskProvider } from 'contexts/TaskContext';

interface Props {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return <TaskProvider>{children}</TaskProvider>;
};
