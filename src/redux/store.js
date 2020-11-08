import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleWares = [];
if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

export { store, persistor };
