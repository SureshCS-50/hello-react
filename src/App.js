import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import { EventBind } from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Greet name="dude" heroname={'heroname'}/> */}
      {/* <Welcome name="dude" heroname={'heroname'}/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind/>
    </div>
  );
}

export default App;
