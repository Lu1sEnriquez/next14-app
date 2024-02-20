import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface del state
/**
 *  {
 *  '1' : {id: '1', name: 'bulbasour'}
 * }
 */
interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "Bulbasaur" },
  "4": { id: "4", name: "Charmander" },
  "6": { id: "6", name: "Charizard" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      const { id } = pokemon;

      // si existe el pokemon en favoritos lo eliminia
      if (!!state[id]) {
        // doble negacion convierte el objeto a valor booleano
        delete state[id];
        return;
      }
      // sino lo agrega
      state[id] = pokemon;
    },
  },
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
