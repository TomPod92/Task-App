import { useState } from 'react';
// import Button from 'components/Button';
import './App.scss';

const App = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const toggleShow = () => {
    setShow((p) => !p);
  };

  return (
    <div className="app">
      <header className="App-header">Header</header>
      {show && <div data-testid="test">I am here</div>}
      {/* <Button /> */}
      <div data-testid="count">{count}</div>
      <button onClick={toggleShow}>Click</button>
      <button onClick={() => setCount((p) => p + 1)}>Increment</button>
    </div>
  );
};

export default App;
