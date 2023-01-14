import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header/Header';
import Home from "../Home/Home";
import Artists from "../Artists/Artists";
import News from "../News/News";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='artists' element={<Artists />} />
        <Route path='news' element={<News />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
