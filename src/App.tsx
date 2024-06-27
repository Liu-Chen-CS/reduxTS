import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";
import {
    changePerson,
    CounterState,
    decrement,
    fetchFunFact,
    FunFactType,
    increment
} from "./store/modules/counterSlice";

function App() {
    const {name, age, funFact} = useSelector((state: RootState): CounterState => state.CounterReducer);
    const dispatch:AppDispatch = useDispatch();
    return (
        <div className="App">
            {name} - {age}
            <button onClick={(): void => {
                dispatch(increment())
            }}>+age
            </button>
            <button onClick={(): void => {
                dispatch(decrement())
            }}>-age
            </button>
            <button onClick={(): void => {
                dispatch(changePerson({name: "Lisa Guillard", age: 24}))
            }}>change person
            </button>
            <ul>
                {funFact?.map((item:FunFactType) => <li key={item.id}>{item.attributes.body}</li>)}
            </ul>
            <button onClick={():void=>{dispatch(fetchFunFact())}}>get fun fact</button>
        </div>
    );
}

export default App;
