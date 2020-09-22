import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/PokemonActions";
import { Link } from "react-router-dom";

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
        return (
          <div>
            <p>{el.name}</p>
            <Link to={`/pokemon/${el.name}`}>details</Link>
          </div>
        );
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
