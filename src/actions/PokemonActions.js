import Axios from "axios";

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const pageLimit = 20;
    const offset = (page - 1) * pageLimit;
    const res = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: "POKEMON_LIST_FAILED",
    });
  }
};
