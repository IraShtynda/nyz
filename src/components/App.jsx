import { Routes, Route } from "react-router-dom";
import '../style/App.scss';
import Header from './Header';
import Home from "./Home";
import Artists from "./Artists";
import News from "./News";
import Contacts from "./Contacts";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='artists' element={<Artists />} />
        <Route path='news' element={<News />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
