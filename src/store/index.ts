import {createStore, Store} from "redux";
import {rootReducer} from "./reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

type RootReducer = ReturnType<typeof rootReducer>;
export const store: Store<RootReducer> = createStore(rootReducer, composeWithDevTools())


