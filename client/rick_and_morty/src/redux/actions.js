import axios from "axios";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';


// export const addFav = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//       axios.post(endpoint, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// };

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav';
         const response = await axios.post(endpoint, character);
         dispatch({
            type: ADD_FAV,
            payload: response.data
         });
      } catch (error) {
         console.log(error);
      }
   };
};

// export const removeFav = (id) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//       });
//       });
//    };
// };

export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
         const response = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: response.data,
         })
      }
      catch (error) {
         console.log(error);
      }
   }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}
