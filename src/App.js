import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepoList from './Pages/RepoList';
import RepoDetails from './Pages/RepoDetails';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ="/" element={<RepoList/>}/>
      <Route path ="/repo/:name" element={<RepoDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
