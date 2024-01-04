import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DETAIL,
  CLEAN_STATE,
  GET_TEMPERAMENTS,
  FILTER_API_BDD,
  GET_DOGS_BYNAME,
  GET_ALPH,
  ORDER_WEIGHT,
} from "./actions-types.js";

const api_server = "http://localhost:3001";

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${api_server}/dogs`);
      return dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const dog = await axios.get(`${api_server}/dogs/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: dog.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanState = (state) => {
  return {
    type: CLEAN_STATE,
    payload: state,
  };
};

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api_server}/temperaments`);
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const filterApiBdd = (valueSelect) => {
  return {
    type: FILTER_API_BDD,
    payload: valueSelect,
  };
};

export function getDogsByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api_server}/dogs?name=${name}`);
      return dispatch({
        type: GET_DOGS_BYNAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const ordenAlph = (valueSelect) => {
  return {
    type: GET_ALPH,
    payload: valueSelect,
  };
};
export const orderweight = (value) => {
  console.log("aqui");
  return (dispatch) => {
    return dispatch({
      type: ORDER_WEIGHT,
      payload: value,
    });
  };
};
