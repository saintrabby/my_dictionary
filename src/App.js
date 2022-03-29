// import logo from './logo.svg';

import { Provider } from 'react-redux';

import store from './redux/configStore';
import styled from 'styled-components'

// import Card from './Card';
import Home from './Home'
import Detail from './Detail'
import CardRename from './CardRename'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//경고 제거 - 주석 처리 되어있지만 작동함
/* eslint-disable */
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Head>안녕</Head>
          <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/detail/:index' element={<Detail />}></Route>
              <Route path='/cardrename/:data' element={<CardRename />}></Route>
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;



const Head = styled.div`
    width: 100vw;
    height: 100px;
    position: fixed;
    font-size: 50px;

    top: 0px;
    background-color: #ddd;
`


const Container = styled.div`
    min-height: 100vh;
    
    background-color: #555;
`
