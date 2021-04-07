import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./auth";
import roundsReducer from "./rounds";
import courseReducer from "./course";
import teeboxReducer from "./teeboxes";
import holesReducer from "./holes";

const rootReducer = combineReducers({
  session: sessionReducer,
  rounds: roundsReducer,
  courses: courseReducer,
  teeboxes: teeboxReducer,
  holes: holesReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;