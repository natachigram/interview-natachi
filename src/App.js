import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<Second />} />
        <Route path='third' element={<Third />} />
        <Route path='fourth' element={<Fourth />} />
      </Routes>
    </div>
  );
}

export default App;
