import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </>

  );
}

export default App;
