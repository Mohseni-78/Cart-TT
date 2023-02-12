import { combineReducers } from "redux";
import cartsReducer from "./carts/cartsReducer";

const rootReducer = combineReducers({
  cart: cartsReducer,
});
export default rootReducer;
export type State =ReturnType<typeof rootReducer>
