import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";

const getPokemos = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!, // -2 es igual al penultimo
    name: pokemon.name,
  }));


  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemos(151);
  return (
    <div className="flex flex-col">
      <span className="text-3xl my-2">Listado de Pokémons <small className="text-blue-600">staticos</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
