import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Movies } from '../reducers/moviesReducer';

export const store = createStore(Movies, composeWithDevTools())