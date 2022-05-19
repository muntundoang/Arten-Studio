import Home from './page/home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          {/* <Route path="" element={<Card/>}/>
          <Route path='detail'>
            <Route path=':id' element={<Detailed/>} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
