import { AppProviders } from 'providers/AppProviders';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { Table } from 'components/Table/Table';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <AppProviders>
        <Loader />
        <Table />
        <Form />
      </AppProviders>
    </div>
  );
};

export default App;
