import React, { useReducer } from 'react';
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
import ClassCounter1 from './components/ClassCounter1';
import HookCounter1 from './components/HookCounter1';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  let newState = state
  switch (action) {
    case 'increment':
      newState = state + 1
      break
    case 'decrement':
      newState = state - 1
      break
    case 'reset':
      newState = initialState
      break
    default:
      newState = state
      break
  }
  return newState
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
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
      {/* <HookCounter4 /> */}
      {/* <ClassCounter1 /> */}
      {/* <HookCounter1 /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer />  */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Lakshay'}>
        <ChannelContext.Provider value={'Kumar'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      <h1>Count: {count}</h1>
      <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Component1 />
        <Component2 />
        <Component3 />
      </CountContext.Provider>
    </div >
  );
}

export default App;
