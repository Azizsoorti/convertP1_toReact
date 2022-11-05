import Header from './components/Header'
import Banner from './components/Banner';
import Categories from './components/Categories';
// import Believe from './components/Believe';
import Features from './components/Features';
import Event from './components/Event';
// import Card_feature from './components/Card_feature';
import Price from './components/Price';
import Questions from './components/Questions';
// import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <Header />

      <Routes>

        {/* <Route path="/" element={<Header />} /> */}
        <Route path="banner" element={<Banner />} />
        <Route path="categories" element={<Categories />} />
        {/* <Route path="believe" element={<Believe />} /> */}
        <Route path="features" element={<Features />} />
        <Route path="event" element={<Event />} />
        {/* <Route path="card_feature" element={<Card_feature />} /> */}
        <Route path="price" element={<Price />} />
        <Route path="questions" element={<Questions />} />
        {/* <Route path="download" element={<Download />} /> */}
        {/* <Route path="footer" element={<Footer />} /> */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
