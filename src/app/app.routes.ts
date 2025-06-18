import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PokemonDetails } from './pages/pokemon-details/pokemon-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetails,
  },
];
