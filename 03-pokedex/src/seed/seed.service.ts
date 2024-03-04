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
    await this.pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name; no }[] = [];

    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      pokemonToInsert.push({ no, name });
    }

    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed successfully!';
  }
}
