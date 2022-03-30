import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Second from './Second';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;
