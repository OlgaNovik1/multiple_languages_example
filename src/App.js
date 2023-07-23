
import { Trans } from 'react-i18next';
import './App.css';
import Buttons from './components/Buttons'
import Description from './components/Description';
import Language from './components/Language';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Language />
      <Title />
      <Description />
      <Buttons />
    </div>
  );
}

export default App;
