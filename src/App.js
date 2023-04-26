import Home from './components/home/Home';
import TourDetails from './components/Tour Details/TourDetails';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
      


    </>

  );
}

export default App;