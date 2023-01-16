import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProviders } from 'providers/AppProviders';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { Table } from 'components/Table/Table';
import { FormModalButton } from 'components/FormModalButton/FormModalButton';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <AppProviders>
        <Loader />
        <Table />
        <Form />
        <FormModalButton />
      </AppProviders>
      <ToastContainer />
    </div>
  );
};

export default App;
