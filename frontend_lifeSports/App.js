import React from 'react';
import StackNav from './src/components/Navigator/StackNavigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/modules';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={ store }>
      <StackNav/>
    </Provider>
  );
};

export default App;