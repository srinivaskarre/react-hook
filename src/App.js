import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/state/Counter';
import ComplexObject from './components/state/ComplexObject';
import UseStateWithArrays from './components/state/UseStateWithArrays';
import CounterClass from './components/useeffect/CounterClass';
import CounterFunction from './components/useeffect/CounterFunction';
import ConditionallyCounterClass from './components/useeffect/ConditionallyCounterClass'
import ConditionallyCounterFunction from './components/useeffect/ConditionallyCounterFunction'
import ClassMouse from './components/useeffect/ClassMouse';
import FunctionMouse from './components/useeffect/FunctionMouse';
import MouseContainer from './components/useeffect/MouseContainer';
import IntervalTickingClass from './components/useeffect/IntervalTickingClass';
import IntervalTickingFunction from './components/useeffect/IntervalTickingFunction';
import DataFetching from './components/useeffect/DataFetching';
import DataFetchingWithId from './components/useeffect/DataFechingWithId';
import TopLevelContext from './components/context/TopLevelContext'
import CounterOne from './components/reducer/CounterOne';
import CounterTwo from './components/reducer/CounterTwo';
import MultipleReducers from './components/reducer/MultipleReducers'
import TopContextReducer from './components/contextreducer/TopContextReducer';
import PostWithContextReducer from './components/reducercontext/PostWithContextReducer';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ComplexObject /> */}
      {/* <UseStateWithArrays /> */}
      {/* <CounterClass /> */}
      {/* <CounterFunction /> */}
      {/* <ConditionallyCounterClass /> */}
      {/* <ConditionallyCounterFunction/> */}
      {/* <ClassMouse /> */}
      {/* <FunctionMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalTickingClass /> */}
      {/* <IntervalTickingFunction/> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingWithId /> */}
      {/* <TopLevelContext /> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <MultipleReducers /> */}
      {/* <TopContextReducer/> */}
      <PostWithContextReducer/>
    </div>
  );
}

export default App;
