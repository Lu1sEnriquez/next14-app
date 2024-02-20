import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "lmin fasf  fesjkasd",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-3xl my-2">
        Pokémons Favoritos<small className="text-blue-600">Global State</small>
      </span>

      <FavoritePokemons></FavoritePokemons>
    </div>
  );
}
