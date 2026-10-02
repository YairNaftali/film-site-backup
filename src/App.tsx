import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { TheGolem } from './components/TheGolem';
import { JewishMuseum } from './components/JewishMuseum';
import { DigitalPhotography } from './components/DigitalPhotography';
import { FilmPhotography } from './components/FilmPhotography';
import { Contact } from './components/Contact';
import { Rebbitzen } from './components/Rebbitzen';

export default function App() {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/the-golem" element={<TheGolem />} />
        <Route path="/jewish-museum" element={<JewishMuseum />} />
        <Route path="/rebbitzen" element={<Rebbitzen />} />
        <Route path="/digital-photography" element={<DigitalPhotography />} />
        <Route path="/film-photography" element={<FilmPhotography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
