import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="dude"/>
      <Welcome name="dude"/>
      <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
