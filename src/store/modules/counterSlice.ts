import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../index";

export type CounterState = {
    name: string,
    age: number,
    funFact?: FunFactType[],
};

export type FunFactType = {
    id:string,
    type: string,
    attributes:{
        body: string,
    },
}

const initialState: CounterState = {
    name: "Liu Chen",
    age: 28,
    funFact: [],
};

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increment(state: CounterState): void {
            state.age++;
        },
        decrement(state: CounterState): void {
            state.age--;
        },
        changePerson(state: CounterState, action: PayloadAction<CounterState>): CounterState {
            return action.payload;
        },
        setFunFact(state:CounterState, action:PayloadAction<FunFactType[]>):void{
            state.funFact = action.payload;
        }
    },
});

type ReturnFunction = (dispatch:AppDispatch) => Promise<void>;

export const fetchFunFact = (): ReturnFunction =>{
    return(
        async (dispatch:AppDispatch)=>{
            const {data:{data}} = await axios({
                method:"GET",
                url:"https://dogapi.dog/api/v2/facts",
            });
            dispatch(setFunFact(data));
        }
    );
}

export const {
    increment,
    decrement,
    changePerson,
    setFunFact,
} = counterSlice.actions;

export default counterSlice.reducer;