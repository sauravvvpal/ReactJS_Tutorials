const redux=require('redux')
const createStore=redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return 
{
    type:BUY_CAKE
}
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM
    }
}

// (previousState,action)=>newState

const initialState={
    numofCakes:10,
    numofIceCreams:20
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default: return state
    }
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numofIceCreams:state.numofIceCreams-1
        }
        default: return state
    }
}

const store=createStore(reducer)  // redux store holding the application state
console.log('Initial State',store.getState()) // give the initial state of our apllication
const Unsubscribe =store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
Unsubscribe()