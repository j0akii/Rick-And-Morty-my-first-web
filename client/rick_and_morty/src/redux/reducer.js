import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: actions.payload, 
                allCharacters: actions.payload 
            }

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: actions.payload 
            };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.gender === actions.payload),
            }

        case ORDER:
            if (actions.payload == 'A') {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a, b) => a.id - b.id),
                }
            }
            else if (actions.payload == 'D') {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a, b) => b.id - a.id),
                }
            }
        
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters,
            }

        default:
            return {...state}
    }
}

export default rootReducer;