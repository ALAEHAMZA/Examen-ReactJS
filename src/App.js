import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceuil from './Component/Acceuil';
import ListeUser from './Component/ListeUser';
import ListePosts from './Component/ListePosts';
import DetailUser from './Component/DetailUser';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} >
            <Route  index element={<ListeUser />} />
            <Route path='ListTodo/:id' element={<ListePosts />} />
            <Route path='DetailUser/:id' element={<DetailUser />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
