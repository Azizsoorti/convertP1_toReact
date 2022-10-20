import Header from './components/Header'
import Banner from './components/Banner';
import Categories from './components/Categories';
import Believe from './components/Believe';
import Features from './components/Features';
import Event from './components/Event';
import Card_feature from './components/Card_feature';
import Price from './components/Price';
import Questions from './components/Questions';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <Header />
      <Banner />
      <Categories />
      <Believe />
      <Features />
      <Event />
      <Card_feature />
      <Price />
      <Questions />
      <Download />
      <Footer />


    </div>
  );
}

export default App;
