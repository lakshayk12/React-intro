import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' //default import
// import {Greet} from './components/Greet' //name import
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import LifeCycle from './components/LifeCycle'
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Lakshay" surname="Kumar">
        <p>This is Children props.</p>
      </Greet> */}
      {/* <Greet name="Rishi">
        <button>Ok</button>
      </Greet> */}

      {/*Now lets do it with Class Component*/}
      {/* <Welcome name="Lakshay" surname="Kumar"></Welcome> */}
      {/* <Hello/> */}
      {/* <Message name='Lakshay'></Message> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <LifeCycle /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      <HookCounter4 />
    </div>
  );
}

export default App;
