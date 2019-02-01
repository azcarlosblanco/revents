import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = (preloadedState) => {
    const middewares = [];
    const middlewareEnhancer = applyMiddleware(...middewares);
    const storeEnhancers = [middlewareEnhancer];

    const composedEnhanced = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhanced,
    );

    if(process.env.NODE_ENV !== 'production') {
        if(module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                console.log("object")

                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer);
            });
        }
    }

    return store;
}