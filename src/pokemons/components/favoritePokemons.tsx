"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid, SimplePokemon } from "..";

export const FavoritePokemons = () => {
  const data = useAppSelector((state) => state.pokemons);
  const pokemons: SimplePokemon[] = Object.values(data);

  return (
    <div className="flex flex-col">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};
