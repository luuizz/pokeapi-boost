import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Container } from '../../components/container/container';
import { PokemonDetail } from '../../../types/pokeTypes';
import { Pokemon } from '../../services/pokemon';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  imports: [Container, CommonModule, NgOptimizedImage],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.scss',
})
export class PokemonDetails implements OnInit {
  pokemonName: string = '';
  pokemonDetail!: PokemonDetail;
  constructor(private route: ActivatedRoute, private pokemonService: Pokemon) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pokemonName = params['name'];
      this.pokemonService
        .getPokemonByName(this.pokemonName)
        .subscribe((data) => {
          this.pokemonDetail = data;
        });
    });
  }
}
