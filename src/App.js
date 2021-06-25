import './index.css';
import Metronome from "./components/Metronome";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Metronome />
      <AppFooter />
    </div>
  );
}

export default App;
