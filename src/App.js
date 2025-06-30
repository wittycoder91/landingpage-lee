import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Industries from './components/Industries';
import ClientReviews from './components/ClientReviews';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <Navbar />
        <div id="features">
          <Hero />
          <Features />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="reviews">
          <ClientReviews />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
