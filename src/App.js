import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GiftProvider } from './context/GiftContext';
import Home from './pages/Home';
import Edit from './pages/Edit';
import GlobalStyles from './GlobalStyles';
import 'nes.css/css/nes.min.css';

const App = () => {
  return (
    <GiftProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </GiftProvider>
  );
};

export default App;
