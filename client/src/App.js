import Home from './page/home'
import Footer from './components/footer';
import HomeBody from './components/home-body';
import Calender from './components/calender';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path="" element={<HomeBody/>}/>
          <Route path="booking" element={<Calender/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
