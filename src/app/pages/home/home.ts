import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../services/pokemon';
import { PokemonListResponse } from '../../../types/pokeTypes';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Container],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  pokemons: PokemonListResponse['results'] = [];
  countPagination: number = 20;

  constructor(private pokemonService: Pokemon) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.countPagination).subscribe((res) => {
      this.pokemons = res.results;
    });
  }

  showMorePokemons(): void {
    this.countPagination += 20;
    this.loadPokemons();
  }
}
