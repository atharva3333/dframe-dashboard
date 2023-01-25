import {applyMiddleware, legacy_createStore as createStore, combineReducers} from 'redux';
//Importing the 'redux-thunk' package.
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import dummyReducer from './reducers/dummyReducer';

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
	dummy: dummyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
