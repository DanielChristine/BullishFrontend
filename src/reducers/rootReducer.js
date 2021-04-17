import counterReducer from './counter';
import loggedReducer from './isLogged';
import userReducer from './userReducer';
import pageDisplayedReducer from './pageDisplayedReducer';
import birdFactReducer from './birdFactReducer'
import feedReducer from './feedReducer'
import { combineReducers } from 'redux';
import flockReducer from './flockReducer'
import feedUpdatedReducer from './feedUpdatedReducer';
import flockListReducer from './flockListReducer'


export default combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    user: userReducer,
    pageDisplayed: pageDisplayedReducer,
    birdFact: birdFactReducer,
    feed: feedReducer,
    flock: flockReducer,
    friendsAndStatus: flockListReducer,
    feedUpdated: feedUpdatedReducer
})
