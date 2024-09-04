import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
