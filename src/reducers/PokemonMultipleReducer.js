const DefaultState = {
  laoding: false,
  data: {},
  errorMsg: "",
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    case "POKEMON_MULTIPLE_FAILED":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon data",
      };
    default:
      return state;
  }
};

export default PokemonMultipleReducer;
