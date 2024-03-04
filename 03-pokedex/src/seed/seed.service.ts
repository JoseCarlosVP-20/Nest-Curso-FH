import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(@InjectModel(Pokemon.name) private readonly pokemonModel) {}
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      const pokemon = await this.pokemonModel.create({ no, name });
    }
    return 'Seed executed successfully!';
  }
}
