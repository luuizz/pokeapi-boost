import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonListResponse } from '../../types/pokeTypes';

@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.apiUrl}/pokemon?limit=${limit}`
    );
  }

  getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.apiUrl}/pokemon/${name}`);
  }
}
