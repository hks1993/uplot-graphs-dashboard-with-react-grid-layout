import { createStore } from "redux";
import { ChartReducer } from "./chartsReducer";

export const store = createStore(ChartReducer);
