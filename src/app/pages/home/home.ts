import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../services/pokemon';
import { PokemonListResponse } from '../../../types/pokeTypes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  pokemons: PokemonListResponse['results'] = [];

  constructor(private pokemonService: Pokemon) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemons(20)
      .subscribe((res: PokemonListResponse) => {
        this.pokemons = res.results;
      });
  }
}
