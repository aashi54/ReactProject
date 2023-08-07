/*
It serves as a centralized store for state
Redux helps you manage "global" state

$ The Redux Store
A "store" is a container that holds your application's global state.
state canonly be updated in a predictable fashion (means kis component me update kiya ,
    pehle kya state this ab kya hogi)

Action :- What to do
Reducre :- How to do
Store:- Object which holds the state of app
Functions associated with store :- createStore(), dispatch(action), getState()

1) Action :- Pure Object
Actions are plain javaScript objects that have a type field. actions only tell what to do, but 
they don't tell how to do.

return{
    type:'INCREMENT',
    payload:num
}

1.1) Action Creator (Pure function which creates an action)
 export const incNumber = (num)=>{
    return{
        type:'INCREMENT',
        payload:num
    }
 }

 Reusable,Portable abd esay to test


2) Reducer
functions that take the current state and an action as arguments and return a new state result.

const initialState =0;

const changeTheNumber = (state =initialState, action)=>{
     switch (action.type){
        case "INCREMENT": return state + action.payload
        case "DECREMENT" : return state - 1;
        default: return state;
     }
}

3) Store
Redux store brings together the state, action and reducers that make up your app.
you will only have a single store in a redux application.
Every redux store has a single root reducer function.

import {createStore} from "redux";
const store = createStore(rootReducers);

Redux Principles
:- global state is stored as an object inside a single store
:- only way to change the state is to dispatch an action
:- Immutability, one-way data flow, predictability of outcome
:- Changes are made with pure reducer functions :- it will reduce 

actions (folder)
    index.js
reducers (folder)
    index.js
    updown.js


store.jsx

.................................................

actions (folder)
    index.js

export const incNumber = () => {
      return {
        type: "INCREMENT"
      }
}

export const decNumber = () => {
      return {
        type: "DECREMNET"
      }
}

reducers (folder)
    updown.js
    
    const initialState =0;
    const changeTheNumber = (state=initialState, action) = {
         switch(action.type){
            case "INCREMENT" : return state + 1;
            case "DECREMENT" : return state - 1;
            default : return state;
         }
    }

    export default changeTheNumber

   :-  index.js (put all reducers , only one reducer, pass it to reducer)

     import changeTheNumber from "upDown";

     import {combineReducers} from "redux";

     const rootReducer = combineReducers({
        changeTheNumber : (key-value)
        changeTheBackground
     })

     export default rootReducer


Store
import {createStore} from "redux"
import rootReducer from "./reducers/index"

const store = createStore(rootReducer);

export default store;

go to index.js of src (where app is rendered)
import store from "./store";
import {Provider} from "rect-redux";

<Provider store={store}> 
  <App/>
</Provider>

*Now how to get---> dispatch (triger action), selectore-> choose
import {useSelectore, useDispatch} from "react-redux"
import {incNumber, decNumber} from "./action/index"

const myState = useSelector((state)=> state.ChangeTheNumber);
const dispatch = useDispatch();

value {myState}
onClick ={()=>disPatch(incNumber())}


*/