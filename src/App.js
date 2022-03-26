// import logo from './logo.svg';

import { Provider } from 'react-redux';

import store from './redux/configStore';

// import Card from './Card';
import Home from './Home'
import Detail from './Detail'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//경고 제거 - 주석 처리 되어있지만 작동함
/* eslint-disable */
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/detail/:index' element={<Detail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
