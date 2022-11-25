import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PokedexCard from "./PokedexCard";
import { useNavigate } from "react-router-dom";
import "./css/Pokedex.css";

const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [pokedex, setPokedex] = useState([]);
  const [pokedexName, setPokedexName] = useState("");
  const [pokedexTypes, setPokedexType] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setPokedex(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setPokedexType(res.data.results));
  }, []);
  //   console.log(pokedexTypes);

  const searchPokemon = () => {
    navigate(`/pokedex/${pokedexName.toLowerCase()}`);
  };

  const filterType = (e) => {
    // alert(e.target.value)
    axios.get(e.target.value).then((res) => setPokedex(res.data.pokemon));
  };
  const [page, setPage] = useState(1);
  const pokemonPerPage = 5;
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;  
  const pokemonPaginated = pokedex.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(pokedex?.length/pokemonPerPage)

  const numbers = [];
  for(let i = 1; i <= totalPages; i++){
    numbers.push(i)
  }
  return (
    <div className="container">
      <h1>Welcome {userName}! </h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={pokedexName}
        onChange={(e) => setPokedexName(e.target.value)}
      />
      <button className="btnSearch" onClick={searchPokemon}>
        Search
      </button>
      <b>Select Category</b>
      <select className="select" onChange={filterType} name="" id="">
        {pokedexTypes?.map((pokedexType) => (
          <option key={pokedexType.name} value={pokedexType.url}>
            {pokedexType.name}
          </option>
        ))}
      </select>
      <div className="btnPage">
      <button onClick={() => setPage(page + 1)} disabled={page ===1}>Prev Page</button>
      {numbers.map(number =>(
        <button onClick={() => setPage(number)}>{number}</button>
      ) )}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next Page</button>
        
      </div>

      <div>
        <ul className="cardContainer">
          {pokemonPaginated.map((poke) => (
            <PokedexCard
              url={poke.url ? poke.url : poke.pokemon.url}
              key={poke.url ? poke.url : poke.pokemon.url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
