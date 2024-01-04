import {
  GET_ALL_DOGS,
  GET_DETAIL,
  CLEAN_STATE,
  GET_TEMPERAMENTS,
  FILTER_API_BDD,
  GET_DOGS_BYNAME,
  GET_ALPH,
  ORDER_WEIGHT,
} from "./actions-types";

const initialState = {
  allDogs: [],
  allDogsBackup: [],
  details: [],
  temperament: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        allDogsBackup: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        details: action.payload ? action.payload : "No Detail",
      };
    case CLEAN_STATE:
      return {
        ...state,
        [action.payload]: [],
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperament: action.payload,
      };
    case FILTER_API_BDD:
      console.log("ACTION", action);
      let dbDogs = [];
      if (action.payload === "database") {
        state.allDogs = state.allDogsBackup;
        dbDogs = state.allDogs.filter((element) => {
          if (typeof element.id !== "number") {
            return element;
          }
        });
      } else {
        state.allDogs = state.allDogsBackup;
        dbDogs = state.allDogs.filter((element) => {
          if (typeof element.id === "number") {
            return element;
          }
        });
      }
      return {
        ...state,
        allDogs: dbDogs,
      };
    case GET_DOGS_BYNAME:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_ALPH:
      let ordenados;
      if (action.payload === "A-Z") {
        ordenados = [...state.allDogs].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      } else if (action.payload === "Z-A") {
        ordenados = [...state.allDogs].sort((a, b) =>
          a.name < b.name ? 1 : -1
        );
      } else {
        ordenados = state.allDogsBackup;
      }
      return {
        ...state,
        allDogs: ordenados,
      };
    case ORDER_WEIGHT:
      let filtersw;
      if (action.payload === "Default") {
        filtersw = state.allDogsBackup;
      } else if (action.payload === "Ascendente") {
        filtersw = [...state.allDogs].sort(
          (a, b) => parseInt(a.weight) - parseInt(b.weight)
        );
      } else if (action.payload === "Descendente") {
        filtersw = [...state.allDogs].sort(
          (a, b) => parseInt(b.weight) - parseInt(a.weight)
        );
      }
      return {
        ...state,
        allDogs: filtersw,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
