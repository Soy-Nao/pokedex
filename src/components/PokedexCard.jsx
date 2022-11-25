import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/PokedexCard.css";

const PokedexCard = ({ url }) => {
  const [pokede, setPokede] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPokede(res.data));
  }, []);
  //   console.log();
  let res = "";
  switch (pokede.types?.[0].type.name) {
    case "normal":
        res = "normal"
        break;
    case "fighting":
      res = "fighting";
      break;
    case "flying":
      res = "flying";
      break;
    case "poison":
      res = "poison";
      break;
    case "ground":
      res = "ground";
      break;
    case "rock":
      res = "rock";
      break;
    case "bug":
      res = "bug";
      break;
    case "ghost":
      res = "ghost";
      break;
    case "steel":
      res = "steel";
      break;
    case "fire":
      res = "fire";
      break;
    case "water":
      res = "water";
      break;
    case "grass":
      res = "grass";
      break;
    case "electric":
      res = "electric";
      break;
    case "psychic":
      res = "psychic";
      break;
    case "ice":
      res = "ice";
      break;
    case "dragon":
      res = "dragon";
      break;
    case "dark":
      res = "dark";
      break;
    case "fairy":
      res = "fairy";
      break;
    case "unknown":
      res = "unknown";
      break;
    case "shadow":
      res = "shadow";
      break;

    default:
      break;
  }

  return (
    <div className={ `pokedexCard ${res}`} >
    
      <Link
        style={{
          textDecoration: "none",
          
        }}
        to={`/pokedex/${pokede.id}`}
        key={pokede.id}
      >
        <div className="title">
          <h2> {pokede.name} </h2>
        </div>
        <div className="inf">
          <b>Type:</b>{" "}
          {pokede.types?.map(
            (pokedexTypeName) => pokedexTypeName.type.name + ", "
          )}
        </div>
        <br />
        <div className="inf">
          <b>HP: </b> {pokede.stats?.[0].base_stat}
        </div>
        <br />
        <div className="inf">
          <b>Attack: </b> {pokede.stats?.[1].base_stat}
        </div>
        <br />
        <div className="inf">
          <b>Defense: </b> {pokede.stats?.[2].base_stat}
        </div>
        <br />
        <div className="inf">
          <b>Speed: </b> {pokede.stats?.[5].base_stat}
        </div>
        <div className="imgCard">
          <img src={pokede.sprites?.other.home.front_default} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default PokedexCard;
