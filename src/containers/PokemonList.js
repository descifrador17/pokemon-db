import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/PokemonActions";
import PokemonListCard from "../component/PokemonListCard";
import { Button, TextField } from "@material-ui/core";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <p>loading......</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((el) => {
        return <PokemonListCard key={el.name} name={el.name} />;
      });
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
  };

  const searchPokemon = () => {
    console.log();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          variant="outlined"
          style={{ margin: 25 }}
          placeholder="Eg. Pikachu"
          label="Search Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="outlined"
          style={{ margin: 25 }}
          type="submit"
          onClick={() => props.history.push(`/pokemon/${search.toLowerCase()}`)}
        >
          Search
        </Button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;
