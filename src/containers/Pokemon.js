import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/PokemonActions";
import _ from "lodash";
import { Typography } from "@material-ui/core";
import PokemonSpritesCard from "../component/PokemonSpritesCard";
import PokemonStatsCard from "../component/PokemonStatsCard";
import PokemonAbilitiesCard from "../component/PokemonAbilitiesCard";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];

      return (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PokemonSpritesCard sprites={pokeData.sprites} />
            <PokemonStatsCard stats={pokeData.stats} />
            <PokemonAbilitiesCard abilities={pokeData.abilities} />
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>loading......</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>Error getting Pokemon</p>;
  };
  return (
    <div>
      <Typography
        variant="h3"
        style={{ fontWeight: "700", textTransform: "capitalize", margin: 20 }}
      >
        {pokemonName}
      </Typography>
      {showData()}
    </div>
  );
};

export default Pokemon;
