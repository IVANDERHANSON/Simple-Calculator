import { Routes, Route} from 'react-router-dom';
import Open from './Open';
import SimpleCalculator from './SimpleCalculator';
import Support from './Support';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Open/>}></Route>
        <Route path='/simple-calculator' element={<SimpleCalculator/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </>
  );
}

export default App;
