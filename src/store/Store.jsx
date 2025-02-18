import { legacy_createStore as createStore } from "redux";
import CarsReducer from "./Reducers/CarsReducer";

const Store = createStore(CarsReducer);
export default Store;