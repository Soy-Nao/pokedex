import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/PokedexDetail.css";
import logo from "./img/pokemon.png";

const PokedexDetail = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, [id]);
  console.log(pokemon);
  return (
    <div className={`containerDetail ${pokemon.types?.[0]?.type?.name}`}>
      <img src={`${logo}`} alt="" />
      <div className="header">
        <div className="imgPokemon">
          <div>
            <img src={pokemon.sprites?.other.home.front_default} alt="" />
          </div>
          {/* <div className="contentInf"> */}
          <div className="center">
            <div className="headerInf">
              <p>
                <b>{pokemon.weight}</b>
                <br />
                Weight
              </p>
            </div>

            <div className="headerInf">
              <p>
                <b>{pokemon.height}</b>
                <br />
                Height
              </p>
            </div>
          </div>
          <h2 className="line">
            <span>{`${pokemon.name
              ?.charAt(0)
              .toUpperCase()}${pokemon.name?.slice(1)}`}</span>
            <br />
            <span className="id">#{pokemon.id}</span>
          </h2>

          {/* </div> */}
        </div>
        <div className="containerInf">
          <div className="line2">
            <h2>
              <span>Type</span>
            </h2>
            <br />
            <div className="btn-container">
              {pokemon.types?.map((pokeType) => (
                <div
                  className={`btn ${pokeType.type.name}`}
                  key={pokeType.type.name}
                >
                  {pokeType.type.name}
                  
                </div>
              ))}
            </div>
          </div>
          <div className="line2">
            <h2>
              <span>Abilities</span>
            </h2>
            <br />
            <div className="btn-container">
              {pokemon.abilities?.map((pokeAbilities) => (
                <div className={`btn two`} key={pokeAbilities.ability.name}>
                  {pokeAbilities.ability.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movements">
        <h2>Movements</h2>
        {pokemon.moves?.map((move) => (
          <li key={move.move.name}>
            {move.move.name} <div></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PokedexDetail;
