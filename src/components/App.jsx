import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import reducers from 'reducers';

const persistedState = {};
const store = createStore(
    // reducers,
    persistedState,
    applyMiddleware(reduxThunk))
const App = () => (
    <Provider store={store} className="app">
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    </Provider>
)
export default App;