import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/PokemonActions";
import PokemonListCard from "../component/PokemonListCard";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((el) => {
        return <PokemonListCard key={el.name} name={el.name} />;
      });
    }

    if (pokemonList.loading) {
      return <p>loading......</p>;
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
  };
  return <div>{showData()}</div>;
};

export default PokemonList;
