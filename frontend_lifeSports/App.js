import React from 'react';
import StackNav from './src/components/Navigator/StackNavigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './src/modules';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={ store }>
      <StackNav/>
    </Provider>
  );
};

export default App;