import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyles';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import SeatsPage from './pages/SeatsPage';
import Sucess from './pages/Sucess';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:movieId' element={<MoviePage />} />
        <Route path='/assentos/:sessionId' element={<SeatsPage />} />
        <Route path='/sucesso' element={<Sucess />} />
      </Routes>
    </Router>
  );
}

export default App;
