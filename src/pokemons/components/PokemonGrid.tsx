import Image from "next/image";
import React from "react";
import { PokemonCard, SimplePokemon } from "@/pokemons";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
 
    return (
    <div className="flex flex-wrap items-center justify-start gap-2 w-full h-screen">
      {pokemons.map((pokemon) => (

        <PokemonCard key={pokemon.id} pokemon={pokemon}/>



        // <div
        //   key={pokemon.id}
        //   className="border-4 rounded-xl border-slate-600 shadow flex flex-row items-center px-2 min-w-60 gap-2"
        // >
        //   
        //   <span>
        //     <h3>{pokemon.name}</h3>
        //   </span>
        // </div>
      ))}
    </div>
  );
};
