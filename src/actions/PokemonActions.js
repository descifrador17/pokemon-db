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

export const GetPokemon = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING",
    });

    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: name,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: "POKEMON_MULTIPLE_FAILED",
    });
  }
};
