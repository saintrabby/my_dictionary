// import logo from './logo.svg';

import styled from 'styled-components'

import store from './configStore'

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home'
import Write from './Detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Head></Head>
          <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/write' element={<Write />}></Route>
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
    background-color: #888;
`


const Container = styled.div`
    min-height: 100vh;
    
    background-color: #444;
`
