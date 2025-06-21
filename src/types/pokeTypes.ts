export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface PokemonDetail {
  name: string;
  id: number;
  types: {
    slot: number;
    type: { name: string };
  }[];
  abilities: { ability: { name: string } }[];
  weight: number;
  height: number;
}
