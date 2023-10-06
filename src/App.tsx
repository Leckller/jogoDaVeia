import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Layout from './components/Layout';
import Novidades from './pages/Novidades';

function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-variant: small-caps;
    }
    img{
      width: 50%;
    }
    
  `;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
        </Route>
        <Route path="/novidades" element={ <Novidades /> } />

      </Routes>
    </>
  );
}

export default App;
