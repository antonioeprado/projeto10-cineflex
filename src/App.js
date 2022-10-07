import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyles';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import SeatsPage from './pages/SeatsPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/sessoes/' element={MoviePage} />
        <Route path='/assentos/' element={SeatsPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
