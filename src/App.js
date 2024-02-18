import { Route, Routes } from 'react-router';

import './App.css';

import NavMenu from './components/NavMenu/NavMenu';
import Home from "./pages/Home";
import Word from './pages/Word';
import Words from "./pages/Words";

function App() {
  return <>
    <NavMenu/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/words/:name" element={<Words />}/>
      <Route path="/word/:name" element={<Word />}/>
    </Routes>
  </>;
}

export default App;
