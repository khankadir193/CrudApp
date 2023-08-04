import logo from './logo.svg';
import './App.css';
import Main from './Crud/Main';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Table } from '@material-ui/core';
import TableData from './Crud/TableData';
import Edit from './Crud/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TableData />}></Route>
        <Route path='/create' element={<Main />}></Route>
        <Route path='/update' element={<Edit />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
