import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "./modules/counterSlice";

export const store = configureStore({
    reducer:{
        CounterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;