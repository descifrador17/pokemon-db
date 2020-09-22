const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        count: action.payload.count,
        errorMsg: "",
      };
    case "POKEMON_LIST_FAILED":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
