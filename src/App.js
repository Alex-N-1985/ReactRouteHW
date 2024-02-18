import { Route, Routes } from 'react-router';

import './App.css';

import NavMenu from './components/NavMenu/NavMenu';
import Home from "./pages/Home"

function App() {
  return <>
    <NavMenu/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </>;
}

export default App;
