import React from "react";

const AppContext = React.createContext();
const [team, dispatch] = useReducer(teamReducer,[]);
function teamReducer(state, action){
    switch (action.type){
    case 'ADD_POKEMON':
    return [...state, action.payload];
        case 'REMOVE POKEMON':
            return state.filter((pokemon) => pokemon.id !== action.payload)
}
}


export default AppContext;