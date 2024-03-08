import './App.css';
import FooterSection from './components/Footer';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Quotes></Quotes>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
