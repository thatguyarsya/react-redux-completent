import React from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from 'redux'


const stateReducer = (state={}, action) => {
  switch (action.type){
    case 'change_state': {
      state = {...state, state: action.dat}
      break;
    }
    default: {
      return state
    }
  }
   return state
};

const androidReducer = (state=[], action) => {
  switch (action.type){
    case 'change_id': {
      state = {...state, id: action.dat}
      break;
    }
    default: {
      return state
    }
  }
    return state;
};

const reducers = combineReducers({
   state: stateReducer,
   android: androidReducer
})

const store = createStore(reducers);

// 3. Subscribe if State Changes
store.subscribe(() => {
  console.log("incoming state alteration:", store.getState())
})

// 4. Dispatch an Action
store.dispatch({type: 'change_id', dat:'008236'})
store.dispatch({type: 'change_state', dat:'DEAD'})



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         create a to-do list <br /> <bold>****IN YOUR MIND*****</bold>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
