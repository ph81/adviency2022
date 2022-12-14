import { Routes, Route, useLocation } from 'react-router-dom';
import { GiftProvider } from './context/GiftContext';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import GlobalStyles from './GlobalStyles';
import 'nes.css/css/nes.min.css';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <GiftProvider>
      <GlobalStyles />

      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="modal" element={<Add />} />
        </Route>
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Add />} />
        </Routes>
      )}
    </GiftProvider>
  );
};

export default App;
