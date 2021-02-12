import React from 'react'
import MainAppBar from './components/MainAppBar/MainAppBar';
import Router from './routes/Router'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainAppBar/>
        <Router/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
